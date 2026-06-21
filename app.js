// ============================================================
// THE BUREAU — Application Logic
// ============================================================

const STATE = {
  route: 'home',
  caseId: null,
  filters: { type: 'all', status: 'all', search: '' },
  selectedSuspect: {}, // per-case selected suspect name (pre-submit)
  dossier: { viewed: new Set(), verdicts: [] } // verdicts: {caseId, correct}
};

// ---------- Persistence (in-memory only, no localStorage per platform rules) ----------

// ============================================================
// CURSOR
// ============================================================
const cursorGlass = document.getElementById('cursorGlass');
const cursorDot = document.getElementById('cursorDot');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let glassX = mouseX, glassY = mouseY;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});
function animateCursor() {
  glassX += (mouseX - glassX) * 0.18;
  glassY += (mouseY - glassY) * 0.18;
  cursorGlass.style.left = glassX + 'px';
  cursorGlass.style.top = glassY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
document.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));

function bindHoverTargets() {
  document.querySelectorAll('a, button, .case-card, .cork-card, .suspect-card, .dome-face, input').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ============================================================
// PIXEL TRANSITION
// ============================================================
const pixelCanvas = document.getElementById('pixelTransition');
const pctx = pixelCanvas.getContext('2d');
function resizeCanvas() {
  pixelCanvas.width = window.innerWidth;
  pixelCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function pixelTransition(callback) {
  const w = pixelCanvas.width, h = pixelCanvas.height;
  const cols = 14, rows = 9;
  const cw = Math.ceil(w / cols), ch = Math.ceil(h / rows);
  const tiles = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      tiles.push({ x: x * cw, y: y * ch, delay: Math.random() * 220 });
    }
  }
  pixelCanvas.style.opacity = '1';
  let start = null;
  const inDuration = 420;

  function drawIn(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    pctx.clearRect(0, 0, w, h);
    pctx.fillStyle = '#0b0c0a';
    let allDone = true;
    tiles.forEach(t => {
      const localT = Math.max(0, Math.min(1, (elapsed - t.delay) / 260));
      if (localT < 1) allDone = false;
      if (localT > 0) {
        const s = easeOutCubic(localT);
        pctx.globalAlpha = 1;
        pctx.fillRect(t.x, t.y, cw * s, ch * s);
      }
    });
    pctx.globalAlpha = 1;
    if (!allDone || elapsed < inDuration) {
      requestAnimationFrame(drawIn);
    } else {
      // fully covered — run callback (DOM swap), then reveal
      callback();
      window.scrollTo(0, 0);
      start = null;
      requestAnimationFrame(drawOut);
    }
  }

  function drawOut(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    pctx.clearRect(0, 0, w, h);
    pctx.fillStyle = '#0b0c0a';
    let allDone = true;
    tiles.forEach(t => {
      const localT = Math.max(0, Math.min(1, (elapsed - t.delay) / 260));
      if (localT < 1) allDone = false;
      const s = 1 - easeOutCubic(localT);
      if (s > 0) pctx.fillRect(t.x, t.y, cw * s, ch * s);
    });
    if (!allDone) {
      requestAnimationFrame(drawOut);
    } else {
      pixelCanvas.style.opacity = '0';
      pctx.clearRect(0, 0, w, h);
    }
  }
  requestAnimationFrame(drawIn);
}
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

// ============================================================
// ROUTING
// ============================================================
function navigate(route, opts = {}) {
  if (route === STATE.route && route !== 'case-detail') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  pixelTransition(() => {
    STATE.route = route;
    if (opts.caseId) STATE.caseId = opts.caseId;
    renderRoute();
  });
}

function renderRoute() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  if (STATE.route === 'home') {
    document.getElementById('view-home').classList.add('active');
    setActiveNav('home');
  } else if (STATE.route === 'cases') {
    document.getElementById('view-cases').classList.add('active');
    setActiveNav('cases');
    renderCasesGrid();
  } else if (STATE.route === 'case-detail') {
    document.getElementById('view-detail').classList.add('active');
    setActiveNav('cases');
    renderCaseDetail(STATE.caseId);
  } else if (STATE.route === 'board') {
    document.getElementById('view-board').classList.add('active');
    setActiveNav('board');
    renderBoard();
  } else if (STATE.route === 'gallery') {
    document.getElementById('view-gallery').classList.add('active');
    setActiveNav('gallery');
    renderDomeGallery();
  } else if (STATE.route === 'dossier') {
    document.getElementById('view-dossier').classList.add('active');
    setActiveNav('dossier');
    renderDossier();
  }
  bindHoverTargets();
  closeMobileNav();
}

function setActiveNav(key) {
  document.querySelectorAll(`.nav-links a[data-nav="${key}"]`).forEach(a => a.classList.add('active'));
}

document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    e.preventDefault();
    navigate(navEl.dataset.nav);
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
function closeMobileNav() { navLinks.classList.remove('mobile-open'); }

// Hide nav on scroll down, show on scroll up
let lastScroll = 0;
const bureauNav = document.getElementById('bureauNav');
window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  if (cur > lastScroll && cur > 140) bureauNav.classList.add('nav-hidden');
  else bureauNav.classList.remove('nav-hidden');
  lastScroll = cur;

  const spotlight = document.getElementById('heroSpotlight');
  if (spotlight) spotlight.style.opacity = Math.max(0, 1 - cur / 600);
});

// ============================================================
// CASE TYPE ICONS / HELPERS
// ============================================================
function typeIcon(type) { return type === 'murder' ? '🔪' : '🔍'; }
function difficultyDots(diff) {
  const map = { easy: 1, moderate: 2, hard: 3 };
  const n = map[diff] || 1;
  let html = '';
  for (let i = 0; i < 3; i++) html += `<span class="diff-dot ${i < n ? 'filled' : ''}"></span>`;
  return html;
}

function caseCardHTML(c) {
  return `
  <article class="case-card" data-case-id="${c.id}" data-go-case="${c.id}">
    <div class="case-card-top">
      <span class="case-code">${c.code}</span>
      <span class="case-status-tag status-${c.status}">${c.status === 'closed' ? 'Closed' : 'Open File'}</span>
    </div>
    <div class="case-card-body">
      <div class="case-type-icon">${typeIcon(c.type)}</div>
      <h3 class="case-title">${c.title}</h3>
      <p class="case-teaser">${c.teaser}</p>
      <div class="case-meta-row">
        <span>${c.location.split(',')[0]}</span>
        <span class="case-diff">${difficultyDots(c.difficulty)}</span>
      </div>
    </div>
  </article>`;
}

document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-go-case]');
  if (card) {
    navigate('case-detail', { caseId: card.dataset.goCase });
  }
});

// ============================================================
// HOME VIEW: stat counters + featured
// ============================================================
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let cur = 0;
    const step = Math.max(1, Math.round(target / 40));
    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target; return; }
      el.textContent = cur;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

function renderFeatured() {
  const featured = [...CASES].slice(0, 3);
  document.getElementById('featuredRow').innerHTML = featured.map(caseCardHTML).join('');
}

// ============================================================
// CASES GRID VIEW
// ============================================================
function renderCasesGrid() {
  const grid = document.getElementById('casesGrid');
  let list = CASES.filter(c => {
    if (STATE.filters.type !== 'all' && c.type !== STATE.filters.type) return false;
    if (STATE.filters.status !== 'all' && c.status !== STATE.filters.status) return false;
    if (STATE.filters.search) {
      const s = STATE.filters.search.toLowerCase();
      const hay = `${c.code} ${c.title} ${c.location} ${c.victim}`.toLowerCase();
      if (!hay.includes(s)) return false;
    }
    return true;
  });
  if (list.length === 0) {
    grid.innerHTML = `<div class="case-card-empty">No files match that search. Try a different code, name, or location.</div>`;
  } else {
    grid.innerHTML = list.map(caseCardHTML).join('');
  }
  bindHoverTargets();
}

document.querySelectorAll('[data-filter-type]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    STATE.filters.type = btn.dataset.filterType;
    renderCasesGrid();
  });
});
document.querySelectorAll('[data-filter-status]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter-status]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    STATE.filters.status = btn.dataset.filterStatus;
    renderCasesGrid();
  });
});
document.getElementById('caseSearch').addEventListener('input', (e) => {
  STATE.filters.search = e.target.value;
  renderCasesGrid();
});

// ============================================================
// CASE DETAIL VIEW
// ============================================================
function renderCaseDetail(caseId) {
  const c = CASES.find(x => x.id === caseId);
  if (!c) { navigate('cases'); return; }
  STATE.dossier.viewed.add(c.id);

  const alreadySolved = STATE.dossier.verdicts.find(v => v.caseId === c.id);

  const html = `
    <div class="detail-hero">
      <div class="section-inner">
        <a href="#" class="detail-back" data-nav="cases">← Back to Archive</a>
        <div class="detail-top-row">
          <div>
            <span class="detail-code">${c.code} · ${typeIcon(c.type)} ${c.type === 'murder' ? 'HOMICIDE' : 'MISSING PERSON'}</span>
            <h1 class="detail-title">${c.title}</h1>
          </div>
          <span class="case-status-tag status-${c.status}" style="font-size:12px;padding:6px 14px;">${c.status === 'closed' ? 'Case Closed' : 'Case Open'}</span>
        </div>
        <div class="detail-meta-grid">
          <div class="detail-meta-item"><div class="detail-meta-label">Victim / Subject</div><div class="detail-meta-value">${c.victim}</div></div>
          <div class="detail-meta-item"><div class="detail-meta-label">Location</div><div class="detail-meta-value">${c.location}</div></div>
          <div class="detail-meta-item"><div class="detail-meta-label">Date Filed</div><div class="detail-meta-value">${c.date}</div></div>
          <div class="detail-meta-item"><div class="detail-meta-label">Difficulty</div><div class="detail-meta-value">${difficultyDots(c.difficulty)}</div></div>
        </div>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-section">
        <h2 class="detail-section-title">Bureau Briefing</h2>
        <div class="briefing-box">${c.briefing}</div>
      </div>

      ${CASE_COMICS[c.id] ? `
      <div class="detail-section">
        <h2 class="detail-section-title">Case Reconstruction</h2>
        <div class="comic-strip-wrap">${CASE_COMICS[c.id]}</div>
        <p class="comic-strip-caption">An illustrated reconstruction from the Bureau's case file — not photographic evidence.</p>
      </div>
      ` : ''}

      <div class="detail-section">
        <h2 class="detail-section-title">Scene of Record</h2>
        <div class="location-box">
          <div class="location-icon">📍</div>
          <div>
            <div class="location-text-name">${c.location}</div>
            <div class="location-text-date">Logged ${c.date}</div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h2 class="detail-section-title">Physical Evidence</h2>
        <div class="evidence-pin-board">
          ${c.evidence.map(ev => `
            <div class="evidence-card">
              <div class="evidence-pin"></div>
              <div class="evidence-name">${ev.name}</div>
              <div class="evidence-detail">${ev.detail}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="detail-section">
        <h2 class="detail-section-title">Persons of Interest</h2>
        <div class="suspects-grid" id="suspectsGrid">
          ${c.suspects.map(s => suspectCardHTML(c.id, s)).join('')}
        </div>
      </div>

      <div class="detail-section">
        <h2 class="detail-section-title">File Your Verdict</h2>
        <div class="verdict-box" id="verdictBox">
          ${alreadySolved ? renderSolutionBlock(c, alreadySolved.correct, alreadySolved.suspectName) : `
            <p class="verdict-prompt">Who is responsible? Select a suspect above, then submit your verdict to unseal the Bureau's findings.</p>
            <div class="verdict-selected-name" id="verdictSelectedName">No suspect selected</div>
            <button class="submit-verdict-btn" id="submitVerdictBtn" disabled>Submit Verdict</button>
          `}
        </div>
      </div>

      <div class="detail-section">
        <h2 class="detail-section-title">Related Files</h2>
        <div class="related-row">
          ${getRelatedCases(c).map(caseCardHTML).join('')}
        </div>
      </div>
    </div>
  `;
  document.getElementById('detailContent').innerHTML = html;

  if (!alreadySolved) bindSuspectSelection(c);
  bindHoverTargets();
}

function suspectCardHTML(caseId, s) {
  return `
    <div class="suspect-card" data-suspect-name="${s.name}">
      <div class="suspect-photo">${personSVG()}</div>
      <div class="suspect-name">${s.name}</div>
      <div class="suspect-role">${s.role}</div>
      <div class="suspect-field">
        <div class="suspect-field-label">Motive</div>
        <div class="suspect-field-text">${s.motive}</div>
      </div>
      <div class="suspect-field">
        <div class="suspect-field-label">Alibi</div>
        <div class="suspect-field-text">${s.alibi}</div>
      </div>
      <button class="accuse-btn" data-accuse="${s.name}">Accuse ${s.name.split(' ')[0]}</button>
    </div>`;
}

function personSVG() {
  return `<svg viewBox="0 0 40 40" width="32" height="32"><circle cx="20" cy="15" r="8" fill="currentColor"/><path d="M5 36c2-10 9-15 15-15s13 5 15 15" fill="currentColor"/></svg>`;
}

function bindSuspectSelection(c) {
  const grid = document.getElementById('suspectsGrid');
  grid.querySelectorAll('[data-accuse]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.dataset.accuse;
      STATE.selectedSuspect[c.id] = name;
      grid.querySelectorAll('.accuse-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('verdictSelectedName').textContent = name;
      const submitBtn = document.getElementById('submitVerdictBtn');
      submitBtn.disabled = false;
    });
  });

  const submitBtn = document.getElementById('submitVerdictBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const selectedName = STATE.selectedSuspect[c.id];
      if (!selectedName) return;
      const suspect = c.suspects.find(s => s.name === selectedName);
      const isOpenCase = c.status === 'open';
      const correct = !!(suspect && suspect.guilty);
      STATE.dossier.verdicts.push({ caseId: c.id, correct: isOpenCase ? null : correct, suspectName: selectedName });
      document.getElementById('verdictBox').innerHTML = renderSolutionBlock(c, correct, selectedName, isOpenCase);
      showToast(isOpenCase ? `Verdict logged: ${c.code} remains officially unsolved.` : (correct ? `Verdict logged: correct call on ${c.code}.` : `Verdict logged: the Bureau disagrees on ${c.code}.`));
    });
  }
}

function renderSolutionBlock(c, correct, accusedName, isOpenCase) {
  const verdictLine = isOpenCase
    ? `<span class="solution-verdict-line" style="color:var(--brass);border:1px solid var(--brass);">◐ UNCONFIRMED — This file is still open.</span>`
    : `<span class="solution-verdict-line ${correct ? 'verdict-correct' : 'verdict-wrong'}">${correct ? '✓ CORRECT — The Bureau concurs.' : '✕ INCORRECT — The Bureau\'s file says otherwise.'}</span>`;
  return `
    <p class="verdict-prompt">Your verdict on ${c.code} has been filed.</p>
    <div class="verdict-selected-name">${accusedName}</div>
    <div class="solution-reveal">
      ${verdictLine}
      <span class="solution-label">${isOpenCase ? "The Bureau's Notes" : "The Bureau's Solution"}</span>
      <p class="solution-text">${c.solution}</p>
      <span class="twist-label">Latest Development</span>
      <p class="twist-text">${c.twist}</p>
    </div>
  `;
}

function getRelatedCases(c) {
  return CASES.filter(x => x.id !== c.id && x.type === c.type).slice(0, 3);
}

// ============================================================
// EVIDENCE BOARD VIEW (global corkboard with connecting strings)
// ============================================================
function renderBoard() {
  const board = document.getElementById('corkboard');
  const closedCases = CASES.filter(c => c.status === 'closed');
  const openCases = CASES.filter(c => c.status === 'open');
  const ordered = [...closedCases, ...openCases];

  board.innerHTML = `<svg class="string-svg" id="stringSvg"></svg>` + ordered.map((c, i) => `
    <div class="cork-card" data-go-case="${c.id}" data-board-idx="${i}" style="--r:${(hashCode(c.id) % 7) - 3}deg">
      <div class="cork-pin"></div>
      <div class="cork-code">${c.code}</div>
      <div class="cork-title">${c.title}</div>
      <div class="cork-status ${c.status}">${c.status === 'closed' ? '● CLOSED' : '● OPEN'}</div>
    </div>
  `).join('');

  bindHoverTargets();
  requestAnimationFrame(() => drawStrings(ordered));
  window.addEventListener('resize', () => drawStrings(ordered), { once: true });
}

function drawStrings(ordered) {
  const svg = document.getElementById('stringSvg');
  const board = document.getElementById('corkboard');
  if (!svg || !board) return;
  const boardRect = board.getBoundingClientRect();
  svg.setAttribute('width', boardRect.width);
  svg.setAttribute('height', boardRect.height);
  svg.setAttribute('viewBox', `0 0 ${boardRect.width} ${boardRect.height}`);

  // Connect cases that share a location keyword or type, sparingly, for a "conspiracy wall" feel
  let lines = '';
  const cards = [...board.querySelectorAll('.cork-card')];
  const centers = cards.map(card => {
    const r = card.getBoundingClientRect();
    return { x: r.left - boardRect.left + r.width / 2, y: r.top - boardRect.top + r.height / 2 };
  });

  // connect each case to the next of the same type (simple chain, capped)
  const byType = {};
  ordered.forEach((c, i) => {
    byType[c.type] = byType[c.type] || [];
    byType[c.type].push(i);
  });
  Object.values(byType).forEach(group => {
    for (let i = 0; i < group.length - 1; i++) {
      if (Math.random() > 0.55) continue; // sparse, not every link — keeps it readable
      const a = centers[group[i]], b = centers[group[i + 1]];
      if (!a || !b) continue;
      const midX = (a.x + b.x) / 2 + (Math.random() * 60 - 30);
      const midY = (a.y + b.y) / 2 + (Math.random() * 60 - 30);
      lines += `<path d="M${a.x},${a.y} Q${midX},${midY} ${b.x},${b.y}" stroke="#8a1f1f" stroke-width="1.5" fill="none" opacity="0.55"/>`;
    }
  });
  svg.innerHTML = lines;
}

// ============================================================
// DOME GALLERY (3D suspect dome — drag to rotate)
// ============================================================
let domeRotY = 0, domeRotX = -8;
let domeDragging = false, domeLastX = 0, domeLastY = 0;
let domeVelX = 0.15;

function renderDomeGallery() {
  const allSuspects = [];
  CASES.forEach(c => {
    c.suspects.forEach(s => {
      allSuspects.push({ name: s.name, role: s.role, caseId: c.id, caseCode: c.code, caseTitle: c.title });
    });
  });

  const gallery = document.getElementById('domeGallery');
  const n = allSuspects.length;

  // Spread suspects across multiple stacked rings so cards have breathing
  // room (a single ring of 65 cards at a small radius causes severe overlap).
  const ringCount = 3;
  const perRing = Math.ceil(n / ringCount);
  const cardW = 130;
  const minGap = 50;
  const radius = Math.max(360, Math.round((perRing * (cardW + minGap)) / (2 * Math.PI)));
  const ringSpacingY = 200;
  const ringOffsetStart = -((ringCount - 1) * ringSpacingY) / 2;

  gallery.innerHTML = allSuspects.map((s, i) => {
    const ring = Math.floor(i / perRing);
    const idxInRing = i % perRing;
    const countInThisRing = Math.min(perRing, n - ring * perRing);
    const theta = (idxInRing / countInThisRing) * 360;
    const y = ringOffsetStart + ring * ringSpacingY;
    return `
    <div class="dome-face" data-go-case="${s.caseId}" data-theta="${theta}" data-radius="${radius}"
         style="transform: translateY(${y}px) rotateY(${theta}deg) translateZ(${radius}px);">
      <div class="dome-face-photo">${personSVG()}</div>
      <div class="dome-face-name">${s.name}</div>
      <div class="dome-face-case">${s.caseCode} — ${s.role}</div>
    </div>`;
  }).join('');

  applyDomeTransform();
  bindHoverTargets();
  bindDomeDrag();
}

function applyDomeTransform() {
  const gallery = document.getElementById('domeGallery');
  if (!gallery) return;
  gallery.style.transform = `translateZ(-100px) rotateX(${domeRotX}deg) rotateY(${domeRotY}deg)`;
}

function bindDomeDrag() {
  const wrap = document.querySelector('.dome-gallery-wrap');
  if (!wrap || wrap.dataset.bound) return;
  wrap.dataset.bound = 'true';

  wrap.addEventListener('mousedown', (e) => {
    domeDragging = true; domeLastX = e.clientX; domeLastY = e.clientY;
  });
  window.addEventListener('mouseup', () => domeDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!domeDragging) return;
    const dx = e.clientX - domeLastX;
    const dy = e.clientY - domeLastY;
    domeRotY += dx * 0.3;
    domeRotX = Math.max(-40, Math.min(20, domeRotX - dy * 0.2));
    domeVelX = dx * 0.02;
    domeLastX = e.clientX; domeLastY = e.clientY;
    applyDomeTransform();
  });
  // touch support
  wrap.addEventListener('touchstart', (e) => {
    domeDragging = true; domeLastX = e.touches[0].clientX; domeLastY = e.touches[0].clientY;
  }, { passive: true });
  wrap.addEventListener('touchend', () => domeDragging = false);
  wrap.addEventListener('touchmove', (e) => {
    if (!domeDragging) return;
    const dx = e.touches[0].clientX - domeLastX;
    const dy = e.touches[0].clientY - domeLastY;
    domeRotY += dx * 0.3;
    domeRotX = Math.max(-40, Math.min(20, domeRotX - dy * 0.2));
    domeVelX = dx * 0.02;
    domeLastX = e.touches[0].clientX; domeLastY = e.touches[0].clientY;
    applyDomeTransform();
  }, { passive: true });
}

function domeAutoRotate() {
  if (STATE.route === 'gallery' && !domeDragging) {
    domeRotY += domeVelX;
    domeVelX *= 0.985; // friction
    if (Math.abs(domeVelX) < 0.04) domeVelX = 0.04; // gentle perpetual drift
    applyDomeTransform();
  }
  requestAnimationFrame(domeAutoRotate);
}
domeAutoRotate();

// ============================================================
// DOSSIER VIEW
// ============================================================
function renderDossier() {
  document.getElementById('dossierViewed').textContent = STATE.dossier.viewed.size;
  document.getElementById('dossierVerdicts').textContent = STATE.dossier.verdicts.length;
  const correct = STATE.dossier.verdicts.filter(v => v.correct).length;
  const total = STATE.dossier.verdicts.length;
  document.getElementById('dossierAccuracy').textContent = total === 0 ? '—' : `${Math.round((correct / total) * 100)}%`;

  const log = document.getElementById('dossierLog');
  if (STATE.dossier.verdicts.length === 0) {
    log.innerHTML = `<li class="log-empty">No activity recorded yet. Open a file to begin.</li>`;
  } else {
    log.innerHTML = [...STATE.dossier.verdicts].reverse().map(v => {
      const c = CASES.find(x => x.id === v.caseId);
      return `<li class="${v.correct ? 'log-correct' : 'log-wrong'}">
        ${v.correct ? '✓' : '✕'} Filed verdict on <strong>${c ? c.code : v.caseId}</strong> — accused ${v.suspectName}. ${v.correct ? 'Correct.' : 'Bureau disagreed.'}
      </li>`;
    }).join('');
  }
}

// ============================================================
// TOASTS
// ============================================================
function showToast(msg) {
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  stack.appendChild(el);
  setTimeout(() => {
    el.classList.add('toast-out');
    setTimeout(() => el.remove(), 320);
  }, 3600);
}

// ============================================================
// INIT
// ============================================================
function init() {
  renderFeatured();
  animateCounters();
  bindHoverTargets();
  renderRoute();
}
init();
