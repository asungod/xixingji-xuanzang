// 西行记 · 语音讲解
// 默认中英双语。优先播 audio/zh|en/01.mp3（Edge 神经语音预生成）；
// 无文件时再退回浏览器朗读，并避开慧慧等桌面机械音。

let narrationAudio = null;
let narrationToken = 0;
let voicesReady = false;
const audioMiss = new Set();
let voiceMode = localStorage.getItem('xixing-voice-mode') || 'bi';
let narrationScripts = null;
let captionTimer = null;
let photoTimer = null;
let captionRaf = null;
let stageLocation = null;
let lastPhotoIndex = -1;
let currentCues = [];
let currentDuration = 1;

function warmupVoices() {
    if (!window.speechSynthesis) return;
    speechSynthesis.getVoices();
    speechSynthesis.addEventListener('voiceschanged', () => { voicesReady = true; });
    voicesReady = speechSynthesis.getVoices().length > 0;
}

function scoreVoice(v, lang) {
    const blob = `${v.lang} ${v.name}`;
    let n = 0;
    if (/Neural|Natural|Online|Google|Microsoft Xiaoxiao|Yunxi|Yunyang|Yunjian|Yunye|Andrew|Brian|Aria|Jenny/i.test(blob)) n += 8;
    if (/Huihui|Yaoyao|Kangkang|Hanhan|Desktop|SAPI|Microsoft Server/i.test(blob)) n -= 8;
    if (lang === 'zh') {
        if (/zh-CN|zh_CN|普通话/.test(blob)) n += 4;
        else if (/^zh/i.test(v.lang || '')) n += 1;
    }
    if (lang === 'en') {
        if (/en-US|en-GB/.test(blob)) n += 4;
        else if (/^en/i.test(v.lang || '')) n += 1;
    }
    return n;
}

function pickVoice(lang) {
    if (!window.speechSynthesis) return null;
    const voices = speechSynthesis.getVoices() || [];
    const ranked = voices.slice().sort((a, b) => scoreVoice(b, lang) - scoreVoice(a, lang));
    const best = ranked[0];
    if (!best || scoreVoice(best, lang) <= 0) return null;
    return best;
}

let scriptsPromise = null;
function loadNarrationScripts() {
    if (!scriptsPromise) {
        scriptsPromise = fetch('audio/scripts.json')
            .then((r) => r.json())
            .then((data) => { narrationScripts = data; })
            .catch(() => { narrationScripts = {}; });
    }
    return scriptsPromise;
}

function scriptFromPack(location, lang) {
    if (!narrationScripts || !location) return '';
    const pack = narrationScripts[String(location.id)] || narrationScripts[location.id];
    if (!pack) return '';
    return (lang === 'en' ? pack.en : pack.zh) || '';
}

function buildNarrationScript(location, mode, lang) {
    const useLang = lang || (typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh');
    const packed = scriptFromPack(location, useLang === 'en' ? 'en' : 'zh');
    if (packed) return packed;
    if (useLang === 'en') {
        const e = (window.enStory && window.enStory[location.id]) || {};
        return e.narration || '';
    }
    const d = typeof getStationDisplay === 'function' ? getStationDisplay(location) : null;
    const z = typeof getZhStation === 'function' ? getZhStation(location.id) : null;
    if (!d && !z) return '';
    const src = z || {};
    const parts = [];
    parts.push(`第${location.id}站。${src.ancient || d.title}，今日${src.modern || d.modern}。`);
    if (src.yearLabel || d.yearLabel) parts.push((src.yearLabel || d.yearLabel) + '。');
    if (mode === 'full' && (src.quote || d.quote)) parts.push(src.quote || d.quote);
    parts.push(src.benshi || d.benshi || '');
    if (src.zhupi && src.zhupi.shi) parts.push(src.zhupi.shi);
    if (mode === 'full' && src.zhupi && src.zhupi.yi) parts.push(src.zhupi.yi);
    if (mode === 'full' && src.qinli) parts.push(src.qinli);
    return parts.filter(Boolean).join('');
}

function audioUrlFor(location, lang) {
    const id = String(location.id).padStart(2, '0');
    return `audio/${lang}/${id}.mp3`;
}

function getVoiceMode() {
    return voiceMode === 'en' || voiceMode === 'zh' ? voiceMode : 'bi';
}

function setVoiceMode(mode) {
    voiceMode = mode === 'en' || mode === 'zh' ? mode : 'bi';
    localStorage.setItem('xixing-voice-mode', voiceMode);
    document.querySelectorAll('[data-voice-mode]').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-voice-mode') === voiceMode);
    });
}

function playlistFor(location, mode) {
    const m = getVoiceMode();
    // 预录 mp3 是短讲稿；字幕必须用同一段文字，否则会和声音错开
    const scriptMode = 'short';
    const zhItem = { lang: 'zh', url: audioUrlFor(location, 'zh'), text: buildNarrationScript(location, scriptMode, 'zh') };
    const enItem = { lang: 'en', url: audioUrlFor(location, 'en'), text: buildNarrationScript(location, scriptMode, 'en') };
    if (m === 'zh') return [zhItem];
    if (m === 'en') return [enItem];
    return [zhItem, enItem];
}

function stationImageUrls(location) {
    if (!location || !location.modernName) return [];
    const siteIndex = String(location.id).padStart(2, '0');
    const cityName = location.modernName.split(',')[0].trim().replace(/ /g, '_');
    return ['0004', '0001', '0002', '0003'].map((code) => `images/${siteIndex}_${cityName}_${code}.jpg`);
}

function splitSentences(text, lang) {
    if (!text) return [];
    if (lang === 'en') {
        return text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
    }
    return text.split(/(?<=[。！？；])/).map((s) => s.trim()).filter(Boolean);
}

function estimateDuration(text, lang) {
    if (!text) return 8;
    if (lang === 'en') return Math.max(8, text.split(/\s+/).length / 2.4);
    return Math.max(8, text.length / 4.2);
}

function sentenceWeight(s, lang) {
    if (lang === 'en') return Math.max(1, s.split(/\s+/).length);
    return Math.max(1, s.replace(/\s/g, '').length);
}

function mergeShortSentences(parts, lang) {
    const merged = [];
    parts.forEach((p) => {
        const short = lang === 'en' ? p.split(/\s+/).length <= 3 : p.length <= 8;
        if (merged.length && (short || sentenceWeight(merged[merged.length - 1], lang) <= 8)) {
            merged[merged.length - 1] += (lang === 'en' && !/[\s]$/.test(merged[merged.length - 1]) ? ' ' : '') + p;
        } else {
            merged.push(p);
        }
    });
    return merged;
}

function isShortOpener(s, lang) {
    const piece = (s || '').trim();
    if (!piece) return false;
    if (lang === 'en') return /^Stop\s+\w+\.?$/i.test(piece) || sentenceWeight(piece, lang) <= 4;
    return /^第\d+站/.test(piece) && sentenceWeight(piece, lang) <= 16;
}

function makeCues(text, lang, durationSec) {
    let parts = mergeShortSentences(splitSentences(text, lang), lang);
    if (parts.length >= 2 && isShortOpener(parts[0], lang)) {
        const glue = lang === 'en' && !/[\s]$/.test(parts[0]) ? ' ' : '';
        parts[1] = parts[0] + glue + parts[1];
        parts = parts.slice(1);
    }
    if (!parts.length) return [{ t: 0, text: text || '' }];
    const weights = parts.map((s) => sentenceWeight(s, lang));
    const total = weights.reduce((a, b) => a + b, 0) || 1;
    const dur = Math.max(0.1, durationSec || 16);
    const charSec = lang === 'en' ? 0.28 : 0.17;
    const shares = weights.map((w, i) => {
        const raw = dur * (w / total);
        if (w / total >= 0.2) return raw;
        return Math.min(raw, Math.max(0.4, w * charSec + 0.25));
    });
    const used = shares.reduce((a, b) => a + b, 0);
    if (used < dur) {
        const leftover = dur - used;
        const longW = weights.map((w) => (w / total >= 0.12 ? w : 0));
        const longTotal = longW.reduce((a, b) => a + b, 0) || total;
        shares.forEach((_, i) => {
            shares[i] += leftover * ((longW[i] || weights[i]) / longTotal);
        });
    }
    let acc = 0;
    return parts.map((sentence, i) => {
        const t = acc;
        acc += shares[i];
        return { t, text: sentence };
    });
}

function cueAt(cues, timeSec) {
    if (!cues || !cues.length) return null;
    let cur = cues[0];
    for (let i = 0; i < cues.length; i += 1) {
        if (cues[i].t <= timeSec + 0.04) cur = cues[i];
        else break;
    }
    return cur;
}

function paintCaption(cues, timeSec, location, durationSec) {
    const textEl = document.getElementById('capText');
    const cue = cueAt(cues, timeSec);
    if (textEl && cue) textEl.textContent = cue.text;
    const otherEl = document.getElementById('capOther');
    if (otherEl) {
        const showOther = getVoiceMode() === 'bi' && location && cue;
        if (!showOther) {
            otherEl.hidden = true;
            otherEl.textContent = '';
        } else {
            const otherLang = captionLang === 'en' ? 'zh' : 'en';
            const otherText = buildNarrationScript(location, 'short', otherLang);
            const otherCues = splitSentences(otherText, otherLang);
            const index = Math.max(0, cues.indexOf(cue));
            const line = otherCues[Math.min(index, Math.max(0, otherCues.length - 1))] || '';
            otherEl.textContent = line;
            otherEl.hidden = !line;
            otherEl.lang = otherLang === 'en' ? 'en' : 'zh-CN';
        }
    }
    const urls = location ? stationImageUrls(location) : [];
    if (urls.length && durationSec > 0.5) {
        const p = Math.min(urls.length - 1, Math.floor((timeSec / durationSec) * urls.length));
        if (p !== lastPhotoIndex) {
            lastPhotoIndex = p;
            setNarrationPhoto(urls[p]);
        }
    }
}

function clearStageTimers() {
    if (captionTimer) {
        clearInterval(captionTimer);
        captionTimer = null;
    }
    if (photoTimer) {
        clearInterval(photoTimer);
        photoTimer = null;
    }
    if (captionRaf) {
        cancelAnimationFrame(captionRaf);
        captionRaf = null;
    }
}

function setNarrationPhoto(url) {
    const img = document.getElementById('narrationPhoto');
    if (!img || !url) return;
    img.classList.remove('in');
    const probe = new Image();
    probe.onload = () => {
        img.src = url;
        requestAnimationFrame(() => img.classList.add('in'));
    };
    probe.src = url;
}

function syncNarrationCaption() {
    const stage = document.getElementById('narrationStage');
    if (!stage || stage.hidden) return;
    const folded = document.body.classList.contains('ce-folded') || window.innerWidth < 1024;
    stage.classList.toggle('with-caption', folded);
}

function hideNarrationStage() {
    clearStageTimers();
    stageLocation = null;
    const stage = document.getElementById('narrationStage');
    if (!stage) return;
    stage.hidden = true;
    stage.classList.remove('on', 'with-caption');
    const img = document.getElementById('narrationPhoto');
    if (img) {
        img.classList.remove('in');
        img.removeAttribute('src');
    }
}

function showNarrationStage(location) {
    const stage = document.getElementById('narrationStage');
    if (!stage || !location) return;
    stageLocation = location;
    stage.hidden = false;
    stage.classList.add('on');
    syncNarrationCaption();
    const urls = stationImageUrls(location);
    if (urls[0]) setNarrationPhoto(urls[0]);
}

let captionLang = 'zh';

function setCaptionMeta(location, lang) {
    const meta = document.getElementById('capMeta');
    if (!meta || !location) return;
    const zh = typeof getZhStation === 'function' ? (getZhStation(location.id) || {}) : {};
    const en = (window.enStory && window.enStory[location.id]) || {};
    if (lang === 'en') {
        meta.textContent = en.modern ? `${en.ancient}, today's ${en.modern}` : (en.ancient || '');
        meta.lang = 'en';
        return;
    }
    meta.textContent = zh.modern ? `${zh.ancient} · 今${zh.modern}` : (zh.ancient || '');
    meta.lang = 'zh-CN';
}

function runCaptions(location, item, durationSec, clock) {
    clearStageTimers();
    lastPhotoIndex = -1;
    syncNarrationCaption();
    captionLang = item.lang;
    setCaptionMeta(location, item.lang);
    currentDuration = Math.max(0.1, durationSec || 16);
    currentCues = makeCues(item.text, item.lang, currentDuration);
    paintCaption(currentCues, 0, location, currentDuration);
    const tick = () => {
        const t = clock ? clock() : 0;
        paintCaption(currentCues, t, location, currentDuration);
        captionRaf = requestAnimationFrame(tick);
    };
    captionRaf = requestAnimationFrame(tick);
}

function stopNarration(opts) {
    narrationToken += 1;
    if (narrationAudio) {
        narrationAudio.pause();
        narrationAudio.removeAttribute('src');
        try { narrationAudio.load(); } catch (e) { /* ignore */ }
        narrationAudio = null;
    }
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (!opts || opts.hide !== false) hideNarrationStage();
    setListenButtons(false);
}

function setListenButtons(speaking) {
    const label = typeof t === 'function'
        ? t(speaking ? 'nav.stop' : 'nav.listen')
        : (speaking ? 'Stop' : 'Listen');
    ['listenBtn', 'navListenBtn'].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.toggle('speaking', speaking);
        el.textContent = label;
    });
}

function currentLocation() {
    if (typeof journeyData === 'undefined' || !journeyData.length) return null;
    const i = typeof window.currentStepIndex === 'number' ? window.currentStepIndex : 0;
    return journeyData[Math.max(0, Math.min(i, journeyData.length - 1))];
}

function tryPlayFile(url) {
    return new Promise((resolve) => {
        if (audioMiss.has(url)) {
            resolve(null);
            return;
        }
        const audio = new Audio();
        audio.preload = 'auto';
        let settled = false;
        const done = (value) => {
            if (settled) return;
            settled = true;
            if (!value) audioMiss.add(url);
            resolve(value);
        };
        audio.addEventListener('canplaythrough', () => done(audio), { once: true });
        audio.addEventListener('error', () => done(null), { once: true });
        audio.src = url;
        audio.load();
        setTimeout(() => {
            if (settled) return;
            if (audio.readyState >= 3) done(audio);
            else done(null);
        }, 900);
    });
}

function speakUtterance(text, lang, token, ondone, location, item) {
    if (!window.speechSynthesis || !text) {
        ondone();
        return;
    }
    const duration = estimateDuration(text, lang);
    const t0 = performance.now();
    runCaptions(location, item, duration, () => (performance.now() - t0) / 1000);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'en' ? 'en-US' : 'zh-CN';
    u.rate = lang === 'zh' ? 0.82 : 0.92;
    u.pitch = lang === 'zh' ? 0.88 : 0.95;
    const voice = pickVoice(lang);
    if (voice) u.voice = voice;
    u.onboundary = (ev) => {
        if (token !== narrationToken || ev.charIndex == null || !currentCues.length) return;
        let pos = 0;
        let idx = 0;
        for (let i = 0; i < currentCues.length; i += 1) {
            pos += currentCues[i].text.length;
            if (ev.charIndex >= pos) idx = Math.min(i + 1, currentCues.length - 1);
            else {
                idx = i;
                break;
            }
        }
        const textEl = document.getElementById('capText');
        if (textEl) textEl.textContent = currentCues[idx].text;
    };
    u.onend = ondone;
    u.onerror = ondone;
    speechSynthesis.speak(u);
}

function playQueue(queue, token, done, location) {
    const next = (i) => {
        if (token !== narrationToken) return;
        if (i >= queue.length) {
            setListenButtons(false);
            if (done) done();
            if (token === narrationToken) hideNarrationStage();
            return;
        }
        const item = queue[i];
        const go = () => next(i + 1);
        const startTts = () => {
            speakUtterance(item.text, item.lang, token, go, location, item);
        };
        tryPlayFile(item.url).then((audio) => {
            if (token !== narrationToken) return;
            if (!audio) {
                startTts();
                return;
            }
            narrationAudio = audio;
            const dur = Number.isFinite(audio.duration) && audio.duration > 1
                ? audio.duration
                : estimateDuration(item.text, item.lang);
            runCaptions(location, item, dur, () => (audio.ended ? dur : audio.currentTime || 0));
            audio.onended = go;
            audio.onerror = () => {
                audioMiss.add(item.url);
                startTts();
            };
            const p = audio.play();
            if (p && p.catch) p.catch(startTts);
        });
    };
    setListenButtons(true);
    next(0);
}

function speakStation(location, mode, opts) {
    const onend = opts && opts.onend ? opts.onend : null;
    stopNarration({ hide: false });
    const token = narrationToken;
    if (!location) {
        if (onend) onend();
        return;
    }
    if (typeof foldSidePanelForNarration === 'function') {
        foldSidePanelForNarration();
    }
    showNarrationStage(location);
    loadNarrationScripts().then(() => {
        if (token !== narrationToken) return;
        playQueue(playlistFor(location, mode || 'short'), token, () => {
            if (token !== narrationToken) return;
            if (onend) onend();
        }, location);
    });
}

function toggleListenCurrent() {
    const speakingNow = (narrationAudio && !narrationAudio.paused) || (window.speechSynthesis && speechSynthesis.speaking);
    const playBtn = document.getElementById('playBtn');
    if (speakingNow || (playBtn && playBtn.classList.contains('playing'))) {
        if (typeof stopPlaying === 'function' && playBtn && playBtn.classList.contains('playing')) {
            stopPlaying();
        } else {
            stopNarration();
        }
        return;
    }
    const loc = currentLocation();
    if (loc) speakStation(loc, 'full');
}

function initNarration() {
    warmupVoices();
    loadNarrationScripts();
    setVoiceMode(getVoiceMode());
    const bind = (id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', toggleListenCurrent);
    };
    bind('listenBtn');
    bind('navListenBtn');
    document.querySelectorAll('[data-voice-mode]').forEach((btn) => {
        btn.addEventListener('click', () => setVoiceMode(btn.getAttribute('data-voice-mode')));
    });
    document.addEventListener('languageChanged', () => {
        const speaking = document.getElementById('listenBtn')?.classList.contains('speaking');
        setListenButtons(!!speaking);
    });
}

window.buildNarrationScript = buildNarrationScript;
window.speakStation = speakStation;
window.stopNarration = stopNarration;
window.toggleListenCurrent = toggleListenCurrent;
window.setVoiceMode = setVoiceMode;
window.getVoiceMode = getVoiceMode;
window.syncNarrationCaption = syncNarrationCaption;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNarration);
} else {
    initNarration();
}
