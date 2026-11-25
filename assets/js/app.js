/**
 * Deck runtime: routing, presentation chrome, speaker panel, rehearsal timer.
 * No framework, no build step — every mode is a plain render of the same data.
 */
import { SLIDES, NOTES, TOTAL_SECONDS, CUE_TIMES, formatClock, duration } from './data.js'
import { TRANSCRIPT } from './transcript.js'
import { renderStage, renderSlide } from './slides.js'
import { iconSvg } from './icons.js'

const LAST = SLIDES.length
const root = document.getElementById('app')
const body = document.body

const state = {
  index: 1,
  mode: 'presentation', // presentation | speaker | rehearse | print
  startedAt: null,
  slideStartedAt: null,
  helpOpen: false,
  hudTimer: null,
  ticker: null,
}

let channel = null
try {
  channel = new BroadcastChannel('lemay-deck')
} catch {
  channel = null
}

/* ------------------------------------------------------------------- state */
function clamp(n) {
  return Math.min(LAST, Math.max(1, n))
}

function meta(id = state.index) {
  return SLIDES[id - 1]
}

function goTo(index, { broadcast = true, keepTimer = false } = {}) {
  const next = clamp(index)
  if (next === state.index && state.startedAt) return
  state.index = next
  if (!keepTimer) state.slideStartedAt = Date.now()
  if (broadcast && channel) channel.postMessage({ type: 'goto', index: next })
  syncHash()
  render()
}

function next() {
  goTo(state.index + 1)
}

function prev() {
  goTo(state.index - 1)
}

function syncHash() {
  const target =
    state.mode === 'presentation'
      ? `#/s/${state.index}`
      : state.mode === 'speaker'
        ? `#/speaker/${state.index}`
        : state.mode === 'rehearse'
          ? `#/rehearse/${state.index}`
          : '#/print'
  if (location.hash !== target) history.replaceState(null, '', target)
}

/* ------------------------------------------------------------------ routing */
function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, '') || location.pathname.replace(/^\/+/, '')
  const parts = raw.split('/').filter(Boolean)
  let mode = 'presentation'
  if (['speaker', 'rehearse', 'print', 'notes', 'transcript'].includes(parts[0])) mode = parts[0]
  const index = Number(parts[1] ?? parts[0])
  return { mode: mode === 'print' || mode === 'notes' ? mode : mode, index: Number.isFinite(index) && index > 0 ? index : 1 }
}

function setMode(mode, index = state.index) {
  state.mode = mode
  state.index = clamp(index)
  body.className = `mode-${mode}`
  if (mode !== 'print' && state.startedAt === null) {
    state.startedAt = Date.now()
    state.slideStartedAt = Date.now()
  }
  syncHash()
  render()
  startTicker()
}

/* ---------------------------------------------------------------- rendering */
function render() {
  if (state.mode === 'print') return renderPrint()
  if (state.mode === 'notes') return renderNotes()
  if (state.mode === 'transcript') return renderTranscript()
  if (state.mode === 'speaker') return renderSpeaker()
  if (state.mode === 'rehearse') return renderRehearsal()
  return renderPresentation()
}

function hud() {
  const slide = meta()
  const percent = (state.index / LAST) * 100
  return `
    <div class="hud" id="hud">
      <div class="hud-left">
        ${slide.section === slide.hud
          ? `<strong>${slide.section}</strong>`
          : `<strong>${slide.section}</strong><span>·</span><span>${slide.hud}</span>`}
      </div>
      <div class="progress"><span style="width:${percent}%"></span></div>
      <div class="counter">${String(state.index).padStart(2, '0')} / ${String(LAST).padStart(2, '0')}</div>
      <div class="controls" id="controls">
        <button type="button" data-act="prev" title="Précédent (←)">${iconSvg('chevron-left', 11)}</button>
        <button type="button" data-act="next" title="Suivant (→)">${iconSvg('chevron-right', 11)}</button>
        <button type="button" data-act="speaker" title="Mode orateur (S)">${iconSvg('monitor', 11)}</button>
        <button type="button" data-act="fullscreen" title="Plein écran (F)">${iconSvg('maximize', 11)}</button>
        <button type="button" data-act="help" title="Raccourcis (?)">${iconSvg('help', 11)}</button>
      </div>
    </div>
    ${helpOverlay()}`
}

function helpOverlay() {
  const rows = [
    ['Suivant', '→ · Espace · Page ↓'],
    ['Précédent', '← · Retour arrière · Page ↑'],
    ['Première / dernière', 'Début · Fin'],
    ['Plein écran', 'F'],
    ['Mode orateur', 'S'],
    ['Mode répétition', 'R'],
    ['Export PDF', 'P'],
    ['Masquer cette aide', 'Échap · ?'],
  ]
  return `
    <div class="help" id="help" data-open="${state.helpOpen}">
      <div class="help-card">
        <div class="row between">
          <p class="t-label muted" style="margin:0">Raccourcis clavier</p>
          <button type="button" class="chip" data-act="help" style="cursor:pointer">Échap</button>
        </div>
        <div class="help-grid">
          ${rows
            .map(
              ([label, keys]) =>
                `<div class="help-row"><span>${label}</span><kbd>${keys}</kbd></div>`,
            )
            .join('')}
        </div>
        <p class="t-small muted" style="margin:1cqw 0 0">
          Mode orateur : ouvrez-le dans une seconde fenêtre et glissez-la sur l’autre écran. La navigation
          reste synchronisée.
        </p>
      </div>
    </div>`
}

function renderPresentation() {
  root.className = 'app'
  root.innerHTML = `${renderStage(state.index)}${hud()}`
  bindControls()
  applyDelays()
  scheduleHudHide()
}

function renderRehearsal() {
  root.className = 'app'
  root.innerHTML = `${renderStage(state.index)}${overlay()}${hud()}`
  bindControls()
  applyDelays()
  scheduleHudHide()
  updateRehearsal()
}

function overlay() {
  return `
    <div class="rehearsal-overlay" id="overlay">
      <div class="ro-row"><span class="ro-label">Total</span><span id="ro-total">0:00 / ${formatClock(TOTAL_SECONDS)}</span></div>
      <div class="ro-row"><span class="ro-label">Slide</span><span id="ro-slide">0:00 / ${duration(meta().seconds)}</span></div>
      <div class="ro-row"><span class="ro-label">Repère</span><span id="ro-cue">0:00</span></div>
      <div class="ro-row"><span class="ro-label">Reste</span><span id="ro-left">${formatClock(TOTAL_SECONDS)}</span></div>
      <div id="ro-hint" class="ro-ok" style="margin-top:0.3cqw;font-size:0.9em">rythme tenu</div>
    </div>`
}

/* ------------------------------------------------------------------- timer */
function startTicker() {
  if (state.ticker) clearInterval(state.ticker)
  if (state.mode !== 'rehearse') return
  state.ticker = setInterval(updateRehearsal, 500)
}

function updateRehearsal() {
  if (state.mode !== 'rehearse') return
  const total = Math.floor((Date.now() - state.startedAt) / 1000)
  const slideElapsed = Math.floor((Date.now() - state.slideStartedAt) / 1000)
  const slide = meta()
  const cue = CUE_TIMES[state.index - 1] + slide.seconds
  const left = TOTAL_SECONDS - total

  const totalEl = document.getElementById('ro-total')
  if (!totalEl) return
  totalEl.textContent = `${formatClock(total)} / ${formatClock(TOTAL_SECONDS)}`
  document.getElementById('ro-slide').textContent = `${formatClock(slideElapsed)} / ${duration(slide.seconds)}`
  document.getElementById('ro-cue').textContent = `≤ ${formatClock(cue)}`
  document.getElementById('ro-left').textContent = left > 0 ? formatClock(left) : `+${formatClock(-left)}`

  const hint = document.getElementById('ro-hint')
  const drift = total - cue
  hint.className = 'ro-ok'
  hint.style.color = 'var(--accent)'

  if (total >= 580) {
    hint.textContent = 'STOP · concluez'
    hint.style.color = '#ff8f8f'
  } else if (total >= 540) {
    hint.textContent = 'accélérez'
    hint.style.color = '#f5d76e'
  } else if (drift > 20) {
    hint.textContent = 'en retard · abrégez'
    hint.style.color = '#f5d76e'
  } else if (slideElapsed > slide.seconds + 15) {
    hint.textContent = 'slide trop longue'
    hint.style.color = '#f5d76e'
  } else if (drift < -25) {
    hint.textContent = 'avance · respirez'
  } else {
    hint.textContent = 'rythme tenu'
  }
}

/* ------------------------------------------------------------- speaker mode */
function scalePreview() {
  const wrapper = document.querySelector('.speaker-preview')
  if (!wrapper) return
  const stage = wrapper.querySelector('.stage')
  if (!stage) return
  const width = wrapper.clientWidth
  if (!width) return
  const scale = width / 1920
  stage.style.transform = `scale(${scale})`
  wrapper.style.height = `${1080 * scale}px`
}

if (!window.__previewResizeBound) {
  window.addEventListener('resize', () => scalePreview())
  window.__previewResizeBound = true
}

function renderSpeaker() {
  const slide = meta()
  const note = NOTES[state.index]
  const previous = state.index > 1 ? NOTES[state.index - 1] : null
  const elapsed = state.startedAt ? Math.floor((Date.now() - state.startedAt) / 1000) : 0

  body.className = 'mode-speaker'
  root.className = ''
  root.innerHTML = `
    <div class="speaker-shell">
      <div class="speaker-top">
        <div class="row" style="gap:1rem">
          <span class="speaker-badge">Mode orateur</span>
          <span class="t-small muted">${slide.section}</span>
        </div>
        <div class="row" style="gap:1.4rem">
          <span class="speaker-clock">${String(state.index).padStart(2, '0')} / ${String(LAST).padStart(2, '0')}</span>
          <span class="speaker-clock muted">${formatClock(elapsed)}</span>
          <button type="button" class="chip" data-act="presentation" style="cursor:pointer">Vue présentation</button>
        </div>
      </div>

      <div class="speaker-grid">
        <div class="col" style="gap:1.1rem">
          <div class="speaker-preview">${renderStage(state.index, { preview: true })}</div>
          <div class="note-card">
            <p class="note-label">Timing</p>
            <div class="timing-row">
              <div class="timing-cell"><p class="stat-label">Objectif slide</p><p class="stat-value">${duration(slide.seconds)}</p></div>
              <div class="timing-cell"><p class="stat-label">Cumul cible</p><p class="stat-value">${formatClock(CUE_TIMES[state.index - 1] + slide.seconds)}</p></div>
              <div class="timing-cell"><p class="stat-label">Total deck</p><p class="stat-value">${formatClock(TOTAL_SECONDS)}</p></div>
            </div>
          </div>
        </div>

        <div class="notes">
          <div class="note-card">
            <p class="note-label">Objectif — ${note.guide}</p>
            <p class="speech">${note.speech}</p>
          </div>

          <div class="note-card">
            <p class="note-label">Phrase clé</p>
            <p class="key-line">« ${note.key} »</p>
          </div>

          <div class="note-card">
            <p class="note-label">Élément par élément — ce que vous dites</p>
            <ul class="detail-list">
              ${(note.details || [])
                .map(([label, say]) => `<li><strong>${label}</strong><span>${say}</span></li>`)
                .join('')}
            </ul>
          </div>

          <div class="note-card">
            <p class="note-label">À montrer</p>
            <ul class="note-list">${note.show.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>

          <div class="note-card">
            <p class="note-label">À éviter</p>
            <ul class="note-list">${note.avoid.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>

          <div class="note-card" style="border-color:var(--line-strong)">
            <p class="note-label">Transition</p>
            <div class="next-cue">${iconSvg('arrow-right', 16)}<span>${note.next}</span></div>
            ${previous ? `<p class="t-small muted" style="margin-top:0.6rem">Précédent : ${previous.key}</p>` : ''}
          </div>

          <div class="row" style="gap:0.6rem">
            <button type="button" class="chip" data-act="prev" style="cursor:pointer;padding:0.45em 1em">${iconSvg('chevron-left', 14)} Précédent</button>
            <button type="button" class="chip chip-accent" data-act="next" style="cursor:pointer;padding:0.45em 1em">Suivant ${iconSvg('chevron-right', 14)}</button>
          </div>
        </div>
      </div>
    </div>`
  bindControls()
  applyDelays()
  // deux frames : la première mesure le panneau, la seconde applique l'échelle
  requestAnimationFrame(() => {
    scalePreview()
    requestAnimationFrame(scalePreview)
  })
}


/* The print page size depends on the document, and @page cannot be scoped to a
 * selector — so the active mode injects the one rule it needs.
 */
function setPageRule(rule) {
  let style = document.getElementById('page-rule')
  if (!style) {
    style = document.createElement('style')
    style.id = 'page-rule'
    document.head.appendChild(style)
  }
  style.textContent = rule
}


/* --------------------------------------------------------- transcription doc --
   Version lecteur du document : même contenu que le PDF, mais consultable
   au clic depuis la slide vidéo. */
function renderTranscript() {
  body.className = 'mode-transcript'
  setPageRule('@page { size: A4; margin: 16mm 18mm 18mm; }')

  const { meta, chapters } = TRANSCRIPT

  const toc = chapters
    .map(
      (c) => `
      <li>
        <a href="#tr-${c.n}">
          <span class="tr-toc-n">${String(c.n).padStart(2, '0')}</span>
          <span class="tr-toc-label">${c.title}</span>
          <span class="tr-toc-ts">${c.start}</span>
        </a>
      </li>`,
    )
    .join('')

  const body_ = chapters
    .map(
      (c) => `
      <section class="tr-chapter" id="tr-${c.n}">
        <header>
          <h2>${String(c.n).padStart(2, '0')} — ${c.title}</h2>
          <span class="tr-range">${c.start} → ${c.end}</span>
        </header>
        ${c.paragraphs
          .map(
            (p) => `
        <div class="tr-para">
          <span class="tr-para-ts">${p.ts}</span>
          <p>${p.text}</p>
        </div>`,
          )
          .join('')}
      </section>`,
    )
    .join('')

  root.innerHTML = `
    <article class="tr-doc">
      <a class="tr-back" href="#/s/18">
        ${iconSvg('chevron-left', 'icon icon-sm')} Retour à la présentation
      </a>

      <header class="tr-cover">
        <p class="tr-kicker">Transcription de la vidéo</p>
        <h1>${meta.title}</h1>
        <p class="tr-sub">${meta.subtitle}</p>
        <dl class="tr-meta">
          <div><dt>Oratrice</dt><dd>${meta.speaker}</dd></div>
          <div><dt>Enregistré le</dt><dd>${meta.recordedAt}</dd></div>
          <div><dt>Durée</dt><dd>${meta.duration}</dd></div>
          <div><dt>Langue</dt><dd>${meta.language}</dd></div>
        </dl>
        <p class="tr-note">${meta.method}</p>
      </header>

      <nav class="tr-toc">
        <h2>Sommaire</h2>
        <ol>${toc}</ol>
      </nav>

      ${body_}

      <footer class="tr-foot">
        <p>
          Vidéo : <a href="${meta.page}">${meta.page}</a> ·
          fichier : <a href="${meta.video}">${meta.video}</a>
        </p>
        <p>${meta.about}</p>
      </footer>
    </article>

    <button class="tr-print" onclick="window.print()">Imprimer / PDF</button>`

  window.scrollTo(0, 0)
}

/* -------------------------------------------------------------- notes doc --
 * The full script as a document, not slides: this is what gets exported to PDF
 * so she can rehearse on paper. One block per slide, page-break aware.
 */
function renderNotes() {
  body.className = 'mode-notes'
  setPageRule('@page { size: A4; margin: 12mm 11mm 14mm; }')
  root.className = ''
  const rows = SLIDES.map((slide) => {
    const note = NOTES[slide.id]
    const cue = CUE_TIMES[slide.id - 1]
    return `
      <section class="nd-slide">
        <header class="nd-head">
          <span class="nd-num">${String(slide.id).padStart(2, '0')}</span>
          <div>
            <h2>${slide.title}</h2>
            <p class="nd-meta">${slide.section} · cible ${duration(slide.seconds)} · début à ${formatClock(cue)}</p>
          </div>
        </header>

        <p class="nd-guide">${note.guide}</p>
        <p class="nd-speech">${note.speech}</p>

        <div class="nd-cols">
          <div>
            <p class="nd-label">Phrase clé</p>
            <p class="nd-key">« ${note.key} »</p>
          </div>
          <div>
            <p class="nd-label">Transition</p>
            <p class="nd-next">${note.next}</p>
          </div>
        </div>

        <div class="nd-details">
          <p class="nd-label">Élément par élément</p>
          <ul>
            ${(note.details || [])
              .map(([label, say]) => `<li><strong>${label} — </strong>${say}</li>`)
              .join('')}
          </ul>
        </div>

        <div class="nd-cols">
          <div>
            <p class="nd-label">À montrer</p>
            <ul>${note.show.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div>
            <p class="nd-label">À éviter</p>
            <ul>${note.avoid.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        </div>
      </section>`
  }).join('')

  root.innerHTML = `
    <article class="notes-doc">
      <header class="nd-cover">
        <p class="nd-kicker">Notes d’orateur — à ne pas montrer</p>
        <h1>CRM · Automation · AI Integration</h1>
        <p class="nd-cover-sub">Hafida El-Mouden — entretien Lemay Consulting / Optimo CRM</p>
        <p class="nd-cover-meta">15 slides · objectif ${formatClock(TOTAL_SECONDS)} · marge jusqu’à 10:00</p>
      </header>
      ${rows}
    </article>`

  if (!location.search.includes('pdf=1')) window.setTimeout(() => window.print(), 500)
}

/* ------------------------------------------------------------------- print */
function renderPrint() {
  body.className = 'mode-print'
  setPageRule('@page { size: 338.66mm 190.5mm; margin: 0; }')
  root.className = ''
  root.innerHTML = `<div class="print-stack">${SLIDES.map((slide) => renderStage(slide.id)).join('')}</div>`
  if (!location.search.includes('pdf=1')) window.setTimeout(() => window.print(), 600)
}

/* -------------------------------------------------------------- HUD fading */
function applyDelays() {
  root.querySelectorAll('[data-delay]').forEach((el) => {
    el.style.animationDelay = `${el.dataset.delay}s`
  })
}

function scheduleHudHide() {
  const hudEl = document.getElementById('hud')
  if (!hudEl) return
  const show = () => {
    hudEl.classList.remove('hud-hidden')
    if (state.hudTimer) clearTimeout(state.hudTimer)
    state.hudTimer = setTimeout(() => hudEl.classList.add('hud-hidden'), 3600)
  }
  show()
  document.addEventListener('mousemove', show, { passive: true })
}

/* ----------------------------------------------------------------- controls */
function bindControls() {
  root.querySelectorAll('[data-act]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      act(button.dataset.act)
    })
  })
}

function act(name) {
  if (name === 'next') return next()
  if (name === 'prev') return prev()
  if (name === 'help') return toggleHelp()
  if (name === 'fullscreen') return toggleFullscreen()
  if (name === 'speaker') return openSpeaker()
  if (name === 'presentation') return setMode('presentation')
}

function toggleHelp() {
  state.helpOpen = !state.helpOpen
  const help = document.getElementById('help')
  if (help) help.dataset.open = String(state.helpOpen)
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen()
  else document.documentElement.requestFullscreen?.()
}

function openSpeaker() {
  window.open(`#/speaker/${state.index}`, 'lemay-speaker', 'width=1280,height=900')
}

/* ---------------------------------------------------------------- keyboard */
document.addEventListener('keydown', (event) => {
  const tag = (event.target?.tagName ?? '').toLowerCase()
  if (tag === 'input' || tag === 'textarea') return

  // Un document se lit : on laisse les flèches, l'espace et Page↓ au navigateur.
  if (state.mode === 'transcript') return

  switch (event.key) {
    case 'ArrowRight':
    case ' ':
    case 'PageDown':
      event.preventDefault()
      next()
      break
    case 'ArrowLeft':
    case 'Backspace':
    case 'PageUp':
      event.preventDefault()
      prev()
      break
    case 'Home':
      event.preventDefault()
      goTo(1)
      break
    case 'End':
      event.preventDefault()
      goTo(LAST)
      break
    case 'f':
    case 'F':
      event.preventDefault()
      toggleFullscreen()
      break
    case 's':
    case 'S':
      event.preventDefault()
      setMode('speaker')
      break
    case 'r':
    case 'R':
      event.preventDefault()
      state.startedAt = Date.now()
      state.slideStartedAt = Date.now()
      setMode('rehearse')
      break
    case 'p':
    case 'P':
      event.preventDefault()
      setMode('print')
      break
    case 'n':
    case 'N':
      event.preventDefault()
      setMode('notes')
      break
    case '?':
      event.preventDefault()
      toggleHelp()
      break
    case 'Escape':
      if (state.helpOpen) toggleHelp()
      else if (['speaker', 'rehearse', 'print'].includes(state.mode)) setMode('presentation')
      break
    default:
      break
  }
})

/* -------------------------------------------------------------- mouse/touch */
document.addEventListener('click', (event) => {
  const target = event.target
  if (target.closest('[data-act]') || target.closest('#hud')) return
  if (state.mode !== 'presentation' && state.mode !== 'rehearse') return
  if (event.clientX > window.innerWidth * 0.72) next()
  else if (event.clientX < window.innerWidth * 0.28) prev()
})

let touchStartX = 0
document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX
})
document.addEventListener('touchend', (event) => {
  const delta = event.changedTouches[0].clientX - touchStartX
  if (Math.abs(delta) < 60) return
  if (delta < 0) next()
  else prev()
})

window.addEventListener('hashchange', () => {
  const route = parseRoute()
  if (route.mode !== state.mode || route.index !== state.index) {
    state.mode = route.mode
    state.index = clamp(route.index)
    body.className = `mode-${route.mode}`
    render()
    startTicker()
  }
})

if (channel) {
  channel.onmessage = (event) => {
    if (event.data?.type === 'goto') {
      state.index = clamp(event.data.index)
      render()
    }
  }
}

/* -------------------------------------------------------------------- boot */
const route = parseRoute()
setMode(route.mode, route.index)
