// 西行记 · 朱批辨真 / 路线抉择 / 印谱

const YINPU_KEY = 'xixing-yinpu';
let bzView = null;

function bzLang() {
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
    return lang === 'en' ? 'en' : 'zh';
}

function bzT(key, params) {
    if (typeof t === 'function') {
        const text = t(key, params || {});
        if (text && text !== key) return text;
    }
    return key;
}

function bzText(node) {
    if (node == null) return '';
    if (typeof node === 'string') return node;
    const lang = bzLang();
    return node[lang] || node.zh || node.en || '';
}

function loadYinpu() {
    try {
        const raw = localStorage.getItem(YINPU_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            return {
                quiz: data.quiz || {},
                choice: data.choice || {}
            };
        }
    } catch (e) { /* ignore */ }
    return { quiz: {}, choice: {} };
}

function saveYinpu(state) {
    localStorage.setItem(YINPU_KEY, JSON.stringify(state));
}

function yinpuCounts() {
    const s = loadYinpu();
    const qTotal = bianzhenData.order.quiz.length;
    const cTotal = bianzhenData.order.choice.length;
    const qDone = bianzhenData.order.quiz.filter((id) => s.quiz[id]).length;
    const cDone = bianzhenData.order.choice.filter((id) => s.choice[id]).length;
    return { qDone, qTotal, cDone, cTotal, done: qDone + cDone, total: qTotal + cTotal };
}

function updateYinpuButton() {
    const btn = document.getElementById('yinpuBtn');
    if (!btn) return;
    const n = yinpuCounts();
    btn.textContent = bzT('yinpu.btn', { done: n.done, total: n.total });
}

function closeBianzhen() {
    const el = document.getElementById('bianzhenOverlay');
    if (el) el.hidden = true;
    document.body.classList.remove('bianzhen-open');
    bzView = null;
}

function closeYinpu() {
    const el = document.getElementById('yinpuOverlay');
    if (el) el.hidden = true;
}

function openYinpu() {
    closeBianzhen();
    const el = document.getElementById('yinpuOverlay');
    if (!el) return;
    renderYinpu();
    el.hidden = false;
}

function renderSealRow(gridId, keys, state, kind) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    keys.forEach((key, i) => {
        const meta = bianzhenData.seals[key];
        const sid = Number(key.slice(1));
        const done = key.startsWith('q') ? !!state.quiz[sid] : !!state.choice[sid];
        const stamp = document.createElement('button');
        stamp.type = 'button';
        stamp.className = 'yin-stamp ' + kind + (done ? ' on' : '');
        const name = bzText(meta.name);
        stamp.innerHTML = `<span class="yin-glyph">${meta.glyph}</span><span class="yin-name">${name}</span>`;
        stamp.title = name;
        stamp.addEventListener('click', () => {
            closeYinpu();
            if (typeof journeyData === 'undefined' || typeof navigateToLocation !== 'function') return;
            const idx = journeyData.findIndex((l) => l.id === sid);
            if (idx < 0) return;
            window.currentStepIndex = -1;
            navigateToLocation(idx);
            setTimeout(() => maybeOpenBianzhen(sid, true), 500);
        });
        grid.appendChild(stamp);
        if (i < keys.length - 1) {
            const dash = document.createElement('span');
            dash.className = 'yin-dash ' + kind;
            dash.setAttribute('aria-hidden', 'true');
            grid.appendChild(dash);
        }
    });
}

function renderYinpu() {
    const s = loadYinpu();
    const n = yinpuCounts();
    const title = document.getElementById('yinpuTitle');
    const summary = document.getElementById('yinpuSummary');
    const zhuLabel = document.getElementById('yinpuZhuLabel');
    const moLabel = document.getElementById('yinpuMoLabel');
    const kicker = document.getElementById('yinpuKicker');
    if (kicker) kicker.textContent = bzT('yinpu.kicker');
    if (title) title.textContent = bzT('yinpu.title');
    if (zhuLabel) zhuLabel.textContent = bzT('yinpu.zhuLabel');
    if (moLabel) moLabel.textContent = bzT('yinpu.moLabel');
    if (summary) {
        summary.textContent = n.done === 0
            ? bzT('yinpu.empty')
            : bzT('yinpu.summary', { n: n.done });
    }
    const zhuKeys = Object.keys(bianzhenData.seals).filter((k) => bianzhenData.seals[k].kind === 'zhu');
    const moKeys = Object.keys(bianzhenData.seals).filter((k) => bianzhenData.seals[k].kind === 'mo');
    renderSealRow('yinpuGridZhu', zhuKeys, s, 'zhu');
    renderSealRow('yinpuGridMo', moKeys, s, 'mo');
    const sealLine = document.getElementById('yinpuSealLine');
    if (sealLine) {
        sealLine.textContent = n.done >= n.total ? bzT('yinpu.full') : bzT('yinpu.open');
    }
}

function refreshBianzhenCue(stationId) {
    const cue = document.getElementById('bianzhenCue');
    if (!cue) return;
    const has = !!(bianzhenData.quiz[stationId] || bianzhenData.choice[stationId]);
    cue.hidden = !has;
    cue.textContent = pendingFor(stationId) ? bzT('bz.cue') : bzT('bz.cueAgain');
    cue.dataset.stationId = String(stationId);
}

function pendingFor(stationId) {
    const s = loadYinpu();
    const quiz = bianzhenData.quiz[stationId];
    const choice = bianzhenData.choice[stationId];
    if (quiz && !s.quiz[stationId]) return { type: 'quiz', data: quiz };
    if (choice && !s.choice[stationId]) return { type: 'choice', data: choice };
    return null;
}

function maybeOpenBianzhen(stationId, force) {
    const overlay = document.getElementById('bianzhenOverlay');
    if (!overlay) return;
    const juan = document.getElementById('juanShou');
    if (!force && juan && !juan.classList.contains('hidden')) return;
    if (!force && overlay && !overlay.hidden) return;
    const pending = pendingFor(stationId);
    refreshBianzhenCue(stationId);
    if (!pending && !force) return;
    if (typeof stopPlaying === 'function') {
        const playBtn = document.getElementById('playBtn');
        if (playBtn && playBtn.classList.contains('playing')) stopPlaying();
    }
    if (typeof stopNarration === 'function') stopNarration();
    if (pending) {
        if (pending.type === 'quiz') renderQuiz(stationId, pending.data);
        else renderChoice(stationId, pending.data);
        overlay.hidden = false;
        document.body.classList.add('bianzhen-open');
    } else if (force) {
        const quiz = bianzhenData.quiz[stationId];
        const choice = bianzhenData.choice[stationId];
        if (quiz) renderQuizReveal(stationId, quiz, loadYinpu().quiz[stationId]);
        else if (choice) renderChoiceReveal(stationId, choice, loadYinpu().choice[stationId]);
        else return;
        overlay.hidden = false;
        document.body.classList.add('bianzhen-open');
    }
}

function renderQuiz(stationId, data) {
    const box = document.getElementById('bianzhenBody');
    if (!box) return;
    bzView = { kind: 'quiz', stationId };
    const labels = bzText(data.labels);
    const now = bzT('bz.nowCite');
    box.innerHTML = `
        <p class="bz-kicker">${bzT('bz.kickerQuiz')} · ${bzText(data.station)}（${now}${bzText(data.modern)}）</p>
        <h3>${bzT('bz.peopleSay')}</h3>
        <p class="bz-impression">「${bzText(data.impression)}」</p>
        <p class="bz-hint">${bzText(data.hint)}</p>
        <p class="bz-ask">${bzText(data.ask)}</p>
        <div class="bz-choices">
            <button type="button" data-pick="shi">${labels.shi}</button>
            <button type="button" data-pick="yi">${labels.yi}</button>
            <button type="button" data-pick="mix">${labels.mix}</button>
        </div>
    `;
    box.querySelectorAll('[data-pick]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const pick = btn.getAttribute('data-pick');
            const state = loadYinpu();
            state.quiz[stationId] = pick;
            saveYinpu(state);
            updateYinpuButton();
            renderQuizReveal(stationId, data, pick);
        });
    });
}

function renderQuizReveal(stationId, data, pick) {
    const box = document.getElementById('bianzhenBody');
    if (!box) return;
    bzView = { kind: 'quizReveal', stationId, pick };
    const nextChoice = bianzhenData.choice[stationId] && !loadYinpu().choice[stationId];
    const verdicts = bzText(data.verdict);
    box.innerHTML = `
        <p class="bz-kicker">${bzT('bz.kickerReveal')} · ${bzText(data.station)}</p>
        <p class="bz-verdict">${verdicts[pick] || ''}</p>
        <div class="bz-pi">
            <p class="shi">${bzText(data.shi)}</p>
            <p class="bz-cite">${bzText(data.cite)}</p>
            <p class="yi">${bzText(data.yi)}</p>
        </div>
        <div class="bz-actions">
            ${nextChoice ? `<button type="button" class="bz-next" id="bzToChoice">${bzT('bz.toChoice')}</button>` : ''}
            <button type="button" class="bz-yin" id="bzCollect">${bzT('bz.collect')}</button>
        </div>
    `;
    const toChoice = document.getElementById('bzToChoice');
    if (toChoice) {
        toChoice.addEventListener('click', () => renderChoice(stationId, bianzhenData.choice[stationId]));
    }
    const collect = document.getElementById('bzCollect');
    if (collect) {
        collect.addEventListener('click', () => {
            closeBianzhen();
            const n = yinpuCounts();
            if (n.done >= n.total) openYinpu();
            else updateYinpuButton();
        });
    }
}

function renderChoice(stationId, data) {
    const box = document.getElementById('bianzhenBody');
    if (!box) return;
    bzView = { kind: 'choice', stationId };
    const options = bzText(data.options);
    box.innerHTML = `
        <p class="bz-kicker">${bzT('bz.kickerChoice')} · ${bzText(data.station)}</p>
        <h3>${bzText(data.question)}</h3>
        <div class="bz-choices">
            ${options.map((o) => `<button type="button" data-pick="${o.id}"><strong>${o.label}</strong><span>${o.hint}</span></button>`).join('')}
        </div>
    `;
    box.querySelectorAll('[data-pick]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const pick = btn.getAttribute('data-pick');
            const state = loadYinpu();
            state.choice[stationId] = pick;
            saveYinpu(state);
            updateYinpuButton();
            renderChoiceReveal(stationId, data, pick);
        });
    });
}

function renderChoiceReveal(stationId, data, pick) {
    const box = document.getElementById('bianzhenBody');
    if (!box) return;
    bzView = { kind: 'choiceReveal', stationId, pick };
    const after = bzText(data.after);
    box.innerHTML = `
        <p class="bz-kicker">${bzT('bz.kickerChoiceAfter')} · ${bzText(data.station)}</p>
        <div class="bz-pi">
            <p class="shi">${bzText(data.shi)}</p>
            <p class="bz-cite">${bzText(data.cite)}</p>
            <p class="yi">${after[pick] || ''}</p>
        </div>
        <div class="bz-actions">
            <button type="button" class="bz-yin" id="bzCollect">${bzT('bz.collect')}</button>
        </div>
    `;
    const collect = document.getElementById('bzCollect');
    if (collect) {
        collect.addEventListener('click', () => {
            closeBianzhen();
            const n = yinpuCounts();
            if (n.done >= n.total) openYinpu();
        });
    }
}

function rerenderBianzhenLang() {
    updateYinpuButton();
    const closeBtn = document.getElementById('bianzhenClose');
    const yinpuClose = document.getElementById('yinpuClose');
    if (closeBtn) {
        closeBtn.textContent = bzT('bz.close');
        closeBtn.setAttribute('aria-label', bzT('bz.close'));
    }
    if (yinpuClose) {
        yinpuClose.textContent = bzT('bz.close');
        yinpuClose.setAttribute('aria-label', bzT('bz.close'));
    }
    const cue = document.getElementById('bianzhenCue');
    if (cue && cue.dataset.stationId) refreshBianzhenCue(Number(cue.dataset.stationId));
    const yinpu = document.getElementById('yinpuOverlay');
    if (yinpu && !yinpu.hidden) renderYinpu();
    const overlay = document.getElementById('bianzhenOverlay');
    if (!overlay || overlay.hidden || !bzView) return;
    const { kind, stationId, pick } = bzView;
    if (kind === 'quiz') renderQuiz(stationId, bianzhenData.quiz[stationId]);
    else if (kind === 'quizReveal') renderQuizReveal(stationId, bianzhenData.quiz[stationId], pick);
    else if (kind === 'choice') renderChoice(stationId, bianzhenData.choice[stationId]);
    else if (kind === 'choiceReveal') renderChoiceReveal(stationId, bianzhenData.choice[stationId], pick);
}

function initBianzhen() {
    updateYinpuButton();
    const overlay = document.getElementById('bianzhenOverlay');
    const yinpu = document.getElementById('yinpuOverlay');
    const closeBtn = document.getElementById('bianzhenClose');
    const yinpuClose = document.getElementById('yinpuClose');
    const yinpuBtn = document.getElementById('yinpuBtn');
    const cue = document.getElementById('bianzhenCue');
    if (closeBtn) closeBtn.addEventListener('click', closeBianzhen);
    if (yinpuClose) yinpuClose.addEventListener('click', closeYinpu);
    if (yinpuBtn) yinpuBtn.addEventListener('click', openYinpu);
    if (cue) {
        cue.addEventListener('click', () => {
            const id = Number(cue.dataset.stationId || 0);
            maybeOpenBianzhen(id, true);
        });
    }
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeBianzhen();
        });
    }
    if (yinpu) {
        yinpu.addEventListener('click', (e) => {
            if (e.target === yinpu) closeYinpu();
        });
    }
    document.addEventListener('languageChanged', rerenderBianzhenLang);
    rerenderBianzhenLang();
}

window.maybeOpenBianzhen = maybeOpenBianzhen;
window.openYinpu = openYinpu;
window.updateYinpuButton = updateYinpuButton;
window.refreshBianzhenCue = refreshBianzhenCue;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBianzhen);
} else {
    initBianzhen();
}
