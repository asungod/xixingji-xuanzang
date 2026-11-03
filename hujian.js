// 互鉴：阿拉伯读法挂在已有站点上；孟加拉读法按《西域记》卷十往下翻，不插入二十九站播放。

function hujianEsc(value) {
    return String(value || '').replace(/[&<>"']/g, (ch) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[ch]));
}

function hujianLang() {
    return typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
}

function hujianEn() {
    return hujianLang() === 'en';
}

function hujianHasStation(id) {
    return typeof hujianArStops !== 'undefined' && !!hujianArStops[id];
}

function hujianTextsHtml(note) {
    const zh = `<p class="hujian-text">${hujianEsc(note.zh)}</p>`;
    const en = note.en
        ? `<p class="hujian-text hujian-text-en" lang="en">${hujianEsc(note.en)}</p>`
        : '';
    return hujianEn() ? (en + zh) : (zh + en);
}

function hujianCurrentStationId() {
    const index = window.currentStepIndex;
    if (typeof journeyData === 'undefined' || index == null || index < 0) return '';
    const stop = journeyData[index];
    return stop ? String(stop.id) : '';
}

function hujianNamesHtml(note, lang) {
    const scriptLang = note.bn ? 'bn' : 'ar';
    const dir = scriptLang === 'ar' ? ' dir="rtl"' : '';
    const also = note.alsoScript
        ? `<span class="hujian-also"><span class="hujian-script" lang="ar" dir="rtl">${hujianEsc(note.alsoScript)}</span><span class="hujian-label">${hujianEsc(hujianEn() ? (note.alsoEn || note.alsoLabel) : note.alsoLabel)}</span></span>`
        : '';
    const place = note.modern
        ? ((hujianEn() ? 'now ' : '今') + note.modern)
        : (hujianEn() ? '' : (note.today || ''));
    const placeHtml = place ? `<span class="hujian-label">${hujianEsc(place)}</span>` : '';
    return `
        <p class="hujian-names">
            <span class="hujian-ancient">${hujianEsc(note.ancient)}</span>
            <span class="hujian-script" lang="${scriptLang}"${dir}>${hujianEsc(note.scriptName)}</span>
            ${also}
            ${placeHtml}
        </p>
    `;
}

function hujianVoiceHtml(note) {
    if (note.ar) return `<p class="hujian-voice" lang="ar" dir="rtl">${hujianEsc(note.ar)}</p>`;
    if (note.bn) return `<p class="hujian-voice" lang="bn">${hujianEsc(note.bn)}</p>`;
    return '';
}

function hujianSourceHtml() {
    return `<p class="hujian-source">据《大唐西域记》《大慈恩寺三藏法师传》。</p>
        <p class="hujian-source" lang="en">Based on the Great Tang Records and the Biography of the Tripitaka Master.</p>`;
}

function hujianStationHtml(id) {
    if (!hujianHasStation(id)) return '';
    const note = hujianArStops[id];
    const kicker = hujianEn() ? 'Arabic reading' : '阿拉伯读法';
    return `
        <aside class="hujian-note">
            <p class="hujian-kicker">${kicker}</p>
            ${hujianNamesHtml(note)}
            ${hujianTextsHtml(note)}
            ${hujianVoiceHtml(note)}
        </aside>
    `;
}

function renderHujianForStation(id) {
    if (window.hujianEastId) {
        if (!window.hujianInsideEast) showEastIndia(window.hujianEastId);
        return;
    }
    document.body.classList.remove('hujian-east-on');
    const box = document.getElementById('hujianBox');
    const html = hujianStationHtml(id);
    if (!box) return;
    box.innerHTML = html;
    box.hidden = !html;
}

function hujianJumpButton(id, note, kind) {
    const on = kind === 'station'
        ? hujianCurrentStationId() === String(id) && !window.hujianEastId
        : window.hujianEastId === note.id;
    const attr = kind === 'station'
        ? `data-hujian-station="${id}"`
        : `data-hujian-east="${note.id}"`;
    const scriptLang = kind === 'station' ? 'ar' : 'bn';
    const dir = scriptLang === 'ar' ? ' dir="rtl"' : '';
    return `<button type="button" class="hujian-jump${on ? ' is-on' : ''}" ${attr}>
        <span class="a">${hujianEsc(note.ancient)}</span>
        <span class="s" lang="${scriptLang}"${dir}>${hujianEsc(note.scriptName)}</span>
    </button>`;
}

function renderHujianModal() {
    const box = document.getElementById('hujianBody');
    if (!box || typeof hujianArStops === 'undefined') return;
    const en = hujianEn();
    const group = (title, keys, kind) => {
        const buttons = keys.map((key) => {
            if (kind === 'station') return hujianJumpButton(key, hujianArStops[key], 'station');
            return hujianJumpButton(key.id, key, 'east');
        }).join('');
        return `<h6>${title}</h6><div class="hujian-jumps">${buttons}</div>`;
    };
    const west = ['9', '10', '11', '12', '13'].filter((id) => hujianArStops[id]);
    const back = ['26', '27'].filter((id) => hujianArStops[id]);
    box.innerHTML = `
        <p class="hujian-lead">阿文是后来的名字。玄奘到达时，这些城还不是伊斯兰城市。</p>
        <p class="hujian-lead" lang="en">The Arabic name belongs to a later century. In the 630s these cities were not yet Muslim.</p>
        ${group(en ? 'Westbound' : '西行', west, 'station')}
        ${group(en ? 'Homeward' : '东归', back, 'station')}
        <p class="hujian-lead">卷十这四国单列，不进入二十九站播放。奔那伐弹那之后，书中还经过迦摩缕波（今阿萨姆）；本页只取四国，不列迦摩缕波。</p>
        <p class="hujian-lead" lang="en">Scroll X keeps these four countries outside the twenty-nine-stop playback. The book also passes through Kamarupa, today’s Assam; this page keeps to the four.</p>
        ${group(en ? 'Eastern India' : '东印度', hujianEastStops, 'east')}
        ${hujianSourceHtml()}
    `;
}

function hideHujianModal() {
    const modalEl = document.getElementById('hujianModal');
    if (modalEl && window.bootstrap) {
        const inst = bootstrap.Modal.getInstance(modalEl) || bootstrap.Modal.getOrCreateInstance(modalEl);
        inst.hide();
    }
}

function openHujianStation(id) {
    hideHujianModal();
    window.hujianEastId = '';
    const index = typeof journeyData !== 'undefined'
        ? journeyData.findIndex((stop) => String(stop.id) === String(id))
        : -1;
    if (index < 0 || typeof navigateToLocation !== 'function') return;
    if (window.currentStepIndex === index) {
        clearHujianEast(true);
        renderHujianForStation(id);
    } else {
        navigateToLocation(index);
    }
    const box = document.getElementById('hujianBox');
    if (box) box.scrollIntoView({ block: 'nearest' });
}

function eastOrderHtml(currentId) {
    const chips = hujianEastStops.map((note) => {
        const on = note.id === currentId ? ' is-on' : '';
        return `<button type="button" class="hujian-step${on}" data-hujian-step="${note.id}">${hujianEsc(note.ancient)}</button>`;
    }).join('<span class="hujian-step-gap" aria-hidden="true">·</span>');
    return `<div class="hujian-order" aria-label="${hujianEn() ? 'Reading order' : '阅读顺序'}">${chips}</div>
        <p class="hujian-label">书中第一名和次名之间还有迦摩缕波（今阿萨姆），本页不列。</p>
        <p class="hujian-label" lang="en">The book puts Kamarupa, today’s Assam, between the first and second names. This page does not list it.</p>`;
}

function eastCardHtml(note) {
    const kicker = hujianEn() ? 'Bengali reading' : '孟加拉读法';
    const back = hujianEn() ? 'Back to the twenty-nine stops' : '回到二十九站';
    return `
        <aside class="hujian-note">
            <p class="hujian-kicker">${kicker}</p>
            ${eastOrderHtml(note.id)}
            ${hujianNamesHtml(note)}
            ${note.todayBn ? `<p class="hujian-label" lang="bn">${hujianEsc(note.todayBn)}</p>` : ''}
            ${hujianTextsHtml(note)}
            ${hujianVoiceHtml(note)}
            <button type="button" class="hujian-back">${back}</button>
        </aside>
    `;
}

function markActiveEastPin() {
    document.querySelectorAll('.hujian-east-pin').forEach((el) => {
        el.classList.toggle('is-on', el.dataset.eastId === window.hujianEastId);
    });
}

function showEastIndia(id) {
    const note = (hujianEastStops || []).find((item) => item.id === id);
    if (!note || window.hujianInsideEast) return;
    window.hujianInsideEast = true;
    window.hujianEastId = id;
    hideHujianModal();
    document.body.classList.add('hujian-east-on');
    if (typeof openSidePanel === 'function') openSidePanel();

    const set = (elId, text) => {
        const el = document.getElementById(elId);
        if (el) el.textContent = text || '';
    };
    set('desktopPhase', hujianEn() ? 'Eastern India · Records, scroll X' : '东印度 · 《西域记》卷十');
    set('desktopLocationTitle', note.ancient);
    set('desktopLocationSubtitle', hujianEn() && note.todayEn ? note.todayEn : (note.head || note.today));
    const duizhao = document.getElementById('desktopDuizhao');
    if (duizhao) {
        duizhao.textContent = note.scriptName;
        duizhao.setAttribute('lang', 'bn');
    }
    const enLine = document.getElementById('desktopEnLine');
    if (enLine) {
        const other = hujianEn() ? (note.head || note.today || '') : (note.todayEn || '');
        enLine.textContent = other;
        enLine.style.display = other ? 'block' : 'none';
        enLine.lang = hujianEn() ? 'zh-CN' : 'en';
    }

    const html = eastCardHtml(note);
    const box = document.getElementById('hujianBox');
    if (box) {
        box.hidden = false;
        box.innerHTML = html;
    }
    const mobile = document.getElementById('mobileStationDetails');
    if (mobile && window.innerWidth < 1024) mobile.innerHTML = html;

    markActiveEastPin();
    if (typeof map !== 'undefined' && map && map.flyTo) map.flyTo(note.coords, 7);
    window.hujianInsideEast = false;
}

function clearHujianEast(refill) {
    window.hujianEastId = '';
    document.body.classList.remove('hujian-east-on');
    markActiveEastPin();
    if (!refill) return;
    const index = window.currentStepIndex || 0;
    const location = typeof journeyData !== 'undefined' ? journeyData[index] : null;
    if (location && typeof fillGujiPanel === 'function') fillGujiPanel(location);
    if (location && window.innerWidth < 1024 && typeof updateMobileDetails === 'function') {
        const tFunc = typeof t === 'function' ? t : (key) => key;
        const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
        updateMobileDetails(location, enhanced, tFunc, hujianLang() === 'vi');
    }
}

function mountHujianMarkers() {
    if (typeof map === 'undefined' || !map || typeof L === 'undefined' || !hujianEastStops) return;
    if (window.hujianEastLayer) map.removeLayer(window.hujianEastLayer);
    const layer = L.layerGroup();
    hujianEastStops.forEach((note) => {
        const icon = L.divIcon({
            className: 'hujian-east-pin',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
        const marker = L.marker(note.coords, { icon, title: note.ancient, eastId: note.id });
        marker.bindTooltip(note.ancient, { direction: 'top', className: 'location-label-hover', offset: [0, -8] });
        marker.on('click', () => showEastIndia(note.id));
        marker.addTo(layer);
        if (note.radius) {
            const range = L.circle(note.coords, {
                radius: note.radius,
                color: '#8a5a12',
                weight: 1.5,
                fillColor: '#8a5a12',
                fillOpacity: 0.12,
                className: 'hujian-east-range'
            });
            range.on('click', () => showEastIndia(note.id));
            range.bindTooltip(note.ancient, { direction: 'top', className: 'location-label-hover' });
            range.addTo(layer);
        }
    });
    layer.addTo(map);
    window.hujianEastLayer = layer;
    layer.eachLayer((marker) => {
        const el = marker.getElement();
        if (el) el.dataset.eastId = marker.options.eastId;
    });
    markActiveEastPin();
}

function initHujian() {
    renderHujianModal();
    const body = document.getElementById('hujianBody');
    if (body && !body.dataset.bound) {
        body.dataset.bound = '1';
        body.addEventListener('click', (event) => {
            const stationBtn = event.target.closest('[data-hujian-station]');
            if (stationBtn) {
                openHujianStation(stationBtn.getAttribute('data-hujian-station'));
                return;
            }
            const eastBtn = event.target.closest('[data-hujian-east]');
            if (eastBtn) showEastIndia(eastBtn.getAttribute('data-hujian-east'));
        });
    }
    const modal = document.getElementById('hujianModal');
    if (modal && !modal.dataset.bound) {
        modal.dataset.bound = '1';
        modal.addEventListener('show.bs.modal', renderHujianModal);
    }
    if (!window.hujianClicksBound) {
        window.hujianClicksBound = true;
        document.addEventListener('click', (event) => {
            if (event.target.closest('#hujianBody')) return;
            const step = event.target.closest('[data-hujian-step]');
            if (step) {
                showEastIndia(step.getAttribute('data-hujian-step'));
                return;
            }
            if (event.target.closest('.hujian-back')) clearHujianEast(true);
        });
    }
    const first = typeof journeyData !== 'undefined' ? journeyData[window.currentStepIndex || 0] : null;
    if (first && !window.hujianEastId) renderHujianForStation(first.id);
}

document.addEventListener('DOMContentLoaded', initHujian);
