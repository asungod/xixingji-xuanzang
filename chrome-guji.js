// 西行记 · 卷首 / 目录 / 卷面填字

function dismissJuanShou() {
    const el = document.getElementById('juanShou');
    if (el) el.classList.add('hidden');
    document.body.classList.remove('juan-locked');
    const loc = typeof journeyData !== 'undefined' && journeyData[window.currentStepIndex || 0];
    if (loc && typeof maybeOpenBianzhen === 'function') {
        window.setTimeout(() => maybeOpenBianzhen(loc.id), 400);
    }
}

function populateMulu() {
    const box = document.getElementById('muluBody');
    if (!box || typeof journeyData === 'undefined') return;

    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
    const groups = {};
    journeyData.forEach((loc, index) => {
        const d = typeof getStationDisplay === 'function' ? getStationDisplay(loc) : { phase: '', ancient: loc.name, modern: '' };
        const phase = d.phase || (lang === 'zh' ? '行程' : 'Route');
        if (!groups[phase]) groups[phase] = [];
        groups[phase].push({ index, d, loc });
    });

    box.innerHTML = '';
    Object.keys(groups).forEach((phase) => {
        const h = document.createElement('div');
        h.className = 'mulu-phase';
        h.textContent = phase;
        box.appendChild(h);
        groups[phase].forEach(({ index, d }) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'mulu-item';
            const modernLabel = lang === 'zh' ? `今${d.modern}` : `today ${d.modern}`;
            btn.innerHTML = `<span class="n">${String(index + 1).padStart(2, '0')}</span><span class="a">${d.ancient}</span><span class="m">${modernLabel}</span>`;
            btn.addEventListener('click', () => {
                const modalEl = document.getElementById('muluModal');
                if (modalEl && window.bootstrap) {
                    const inst = bootstrap.Modal.getInstance(modalEl);
                    if (inst) inst.hide();
                }
                if (typeof navigateToLocation === 'function') {
                    window.currentStepIndex = -1;
                    navigateToLocation(index);
                }
            });
            box.appendChild(btn);
        });
    });
}

function stationOtherBody(location) {
    if (!location) return { lang: 'en', text: '' };
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
    const zh = typeof getZhStation === 'function' ? (getZhStation(location.id) || {}) : {};
    const en = (window.enStory && window.enStory[location.id]) || {};
    if (lang === 'zh') return { lang: 'en', text: en.narration || '' };
    if (zh.benshi) return { lang: 'zh-CN', text: zh.benshi };
    return { lang: 'en', text: '' };
}

function otherTongueLine(location) {
    if (!location) return '';
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
    const zh = typeof getZhStation === 'function' ? (getZhStation(location.id) || {}) : {};
    const en = (window.enStory && window.enStory[location.id]) || {};
    if (lang === 'zh') {
        if (!en.ancient && !en.modern) return '';
        return en.modern ? `${en.ancient}, today's ${en.modern}.` : `${en.ancient}.`;
    }
    if (zh.ancient && zh.modern) return `古称${zh.ancient}，即今日${zh.modern}。`;
    return '';
}

function fillGujiPanel(location) {
    if (!location || typeof getStationDisplay !== 'function') return;
    const d = getStationDisplay(location);
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';

    const set = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text || '';
    };

    set('desktopPhase', d.phase);
    set('desktopLocationTitle', d.title);
    set('desktopLocationSubtitle', d.subtitle);
    set('desktopDuizhao', d.duizhao);
    const duizhaoEl = document.getElementById('desktopDuizhao');
    if (duizhaoEl) duizhaoEl.removeAttribute('lang');
    const enLine = document.getElementById('desktopEnLine');
    if (enLine) {
        const line = otherTongueLine(location);
        enLine.textContent = line;
        enLine.style.display = line ? 'block' : 'none';
        enLine.lang = lang === 'zh' ? 'en' : 'zh-CN';
    }
    set('desktopQuote', d.quote ? `「${d.quote}」` : '');
    set('desktopDescription', d.benshi || '');
    const otherBody = document.getElementById('desktopOtherText');
    if (otherBody) {
        const other = stationOtherBody(location);
        otherBody.textContent = other.text;
        otherBody.lang = other.lang;
        otherBody.hidden = !other.text;
    }
    set('desktopBuddhistContext', d.fayuan || '');
    set('desktopXuanzangExperience', d.qinli || '');
    set('desktopHistoricalContext', d.dangshi || '');

    const quoteEl = document.getElementById('desktopQuote');
    if (quoteEl) quoteEl.style.display = d.quote ? 'block' : 'none';

    const showSec = (secId, text) => {
        const sec = document.getElementById(secId);
        if (sec) sec.style.display = text ? 'block' : 'none';
    };
    showSec('desktopBuddhistSection', d.fayuan);
    showSec('desktopXuanzangSection', d.qinli);
    showSec('desktopHistoricalSection', d.dangshi);

    const zhupi = document.getElementById('desktopZhupi');
    if (zhupi) {
        if (d.zhupi) {
            const esc = (s) => String(s || '').replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
            zhupi.style.display = 'block';
            zhupi.innerHTML = `<p class="shi">${esc(d.zhupi.shi)}</p><p class="yi">${esc(d.zhupi.yi)}</p>`;
        } else {
            zhupi.style.display = 'none';
            zhupi.innerHTML = '';
        }
    }

    const folded = document.body.classList.contains('ce-folded');
    const tFunc = typeof t === 'function' ? t : (key) => key;
    const fold = document.querySelector('.ce-fold, .side-panel-close');
    if (fold) {
        fold.textContent = folded ? tFunc('nav.unfold') : tFunc('nav.fold');
        fold.setAttribute('aria-label', fold.textContent);
    }

    const headings = {
        zh: { benshi: '本事', fayuan: '法缘', qinli: '亲历', dangshi: '当时' },
        en: { benshi: 'Chronicle', fayuan: 'Buddhist context', qinli: "Xuanzang's experience", dangshi: 'At the time' },
        vi: { benshi: 'Ghi chép', fayuan: 'Phật giáo', qinli: 'Trải nghiệm', dangshi: 'Bối cảnh' }
    };
    const h = headings[lang] || headings.zh;
    const mapTitle = (secId, text) => {
        const sec = document.getElementById(secId);
        if (!sec) return;
        const title = sec.querySelector('.section-title');
        if (title) title.textContent = text;
    };
    const firstSec = document.querySelector('#desktopSidePanel .side-panel-section');
    if (firstSec) {
        const title = firstSec.querySelector('.section-title');
        if (title) title.textContent = h.benshi;
    }
    if (typeof refreshBianzhenCue === 'function') refreshBianzhenCue(location.id);
    if (typeof renderHujianForStation === 'function') renderHujianForStation(location.id);
    mapTitle('desktopBuddhistSection', h.fayuan);
    mapTitle('desktopXuanzangSection', h.qinli);
    mapTitle('desktopHistoricalSection', h.dangshi);

    const source = document.querySelector('#desktopSidePanel .ce-source');
    if (source) source.textContent = tFunc('panel.source');
    const scene = document.querySelector('#desktopSidePanel .ce-scene');
    if (scene) scene.textContent = tFunc('panel.scene');
}

function applyChromeI18n() {
    const tFunc = typeof t === 'function' ? t : (key) => key;
    const set = (id, key) => {
        const el = document.getElementById(id);
        if (el) el.textContent = tFunc(key);
    };
    set('juanTrack', 'juan.track');
    set('juanEnTitle', 'juan.enTitle');
    set('juanEnLine', 'juan.enLine');
    set('juanFu', 'juan.fu');
    set('juanLian1', 'juan.lian1');
    set('juanLian2', 'juan.lian2');
    set('juanAudienceTitle', 'juan.audienceTitle');
    set('juanAudience', 'juan.audience');
    set('juanSceneTitle', 'juan.sceneTitle');
    set('juanScene', 'juan.scene');
    set('juanHowTitle', 'juan.howTitle');
    set('juanHow1', 'juan.how1');
    set('juanHow2', 'juan.how2');
    set('juanHow3', 'juan.how3');
    set('juanHow4', 'juan.how4');
    set('hujianNavBtn', 'nav.hujian');
    if (typeof renderHujianModal === 'function') renderHujianModal();
    set('ruJuanBtn', 'juan.enter');
    set('juanOss', 'juan.oss');
    set('offlineBanner', 'offline.banner');
    set('muluBtn', 'nav.mulu');
    set('aboutNavBtn', 'nav.about');
    set('desktopNavTitle', 'nav.title');
    set('desktopSeal', 'nav.seal');
    set('narrationSeal', 'illustration.stamp');
    set('zhanJuanTab', 'nav.unfold');
    const zhanJuanTab = document.getElementById('zhanJuanTab');
    if (zhanJuanTab) zhanJuanTab.setAttribute('aria-label', tFunc('nav.unfold'));
    const muluTitle = document.querySelector('#muluModal .modal-title');
    if (muluTitle) muluTitle.textContent = tFunc('mulu.title');
    const source = document.querySelector('#desktopSidePanel .ce-source');
    if (source) source.textContent = tFunc('panel.source');
    const scene = document.querySelector('#desktopSidePanel .ce-scene');
    if (scene) scene.textContent = tFunc('panel.scene');
    const panel = document.getElementById('desktopSidePanel');
    if (panel) panel.setAttribute('aria-label', tFunc('nav.panel'));
    ['langGroup', 'navVoiceGroup', 'panelVoiceGroup'].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.setAttribute('aria-label', tFunc(id === 'langGroup' ? 'nav.langGroup' : 'nav.voiceGroup'));
    });
    document.querySelectorAll('[data-voice-mode]').forEach((btn) => {
        const mode = btn.getAttribute('data-voice-mode');
        if (mode) btn.textContent = tFunc('voice.' + mode);
    });
    const fold = document.querySelector('.ce-fold, .side-panel-close');
    const folded = document.body.classList.contains('ce-folded');
    if (fold) {
        fold.textContent = folded ? tFunc('nav.unfold') : tFunc('nav.fold');
        fold.setAttribute('aria-label', fold.textContent);
    }
    const navFold = document.getElementById('navFoldBtn');
    if (navFold) {
        navFold.textContent = tFunc('nav.juan');
        navFold.title = folded ? tFunc('nav.unfold') : tFunc('nav.fold');
    }
    const playBtn = document.getElementById('playBtn');
    if (playBtn && !playBtn.classList.contains('playing')) {
        playBtn.textContent = tFunc('controls.play');
    }
    if (typeof setListenButtons === 'function') {
        const speaking = document.getElementById('listenBtn')?.classList.contains('speaking');
        setListenButtons(!!speaking);
    } else {
        set('listenBtn', 'nav.listen');
        set('navListenBtn', 'nav.listen');
    }
    if (typeof updateYinpuButton === 'function') updateYinpuButton();
    const mobileAbout = document.getElementById('mobileAboutBtn');
    if (mobileAbout) {
        const about = tFunc('nav.about');
        mobileAbout.title = about;
        mobileAbout.setAttribute('aria-label', about);
    }
    const mobileTitle = document.querySelector('.mobile-compact-navbar .navbar-title');
    if (mobileTitle) {
        const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
        mobileTitle.textContent = lang === 'zh' ? '西行记' : lang === 'vi' ? 'Tây Hành Ký' : 'Xuanzang';
    }
    const mobileLang = document.getElementById('mobileLangBtn');
    if (mobileLang) {
        const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
        mobileLang.textContent = lang === 'zh' ? '中' : lang === 'vi' ? 'VI' : 'EN';
        mobileLang.title = tFunc('nav.langGroup');
        mobileLang.setAttribute('aria-label', tFunc('nav.langGroup'));
    }
}

function initGujiChrome() {
    document.body.classList.add('juan-locked');
    const ru = document.getElementById('ruJuanBtn');
    if (ru) ru.addEventListener('click', dismissJuanShou);

    const playNav = document.getElementById('playBtn');
    if (playNav) playNav.classList.add('btn', 'btn-sm');

    applyChromeI18n();
    populateMulu();
    document.addEventListener('languageChanged', () => {
        applyChromeI18n();
        populateMulu();
    });

    const tab = document.getElementById('zhanJuanTab');
    if (tab) {
        tab.addEventListener('click', () => {
            if (typeof toggleDesktopSidePanel === 'function') toggleDesktopSidePanel();
        });
    }

    if (typeof journeyData !== 'undefined' && journeyData[0] && typeof fillGujiPanel === 'function') {
        fillGujiPanel(journeyData[0]);
    }
}

window.dismissJuanShou = dismissJuanShou;
window.fillGujiPanel = fillGujiPanel;
window.populateMulu = populateMulu;
window.applyChromeI18n = applyChromeI18n;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGujiChrome);
} else {
    initGujiChrome();
}
