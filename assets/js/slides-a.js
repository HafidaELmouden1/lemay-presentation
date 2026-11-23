import { icon } from './icons.js'
import { SLIDES, TOTAL_SECONDS, formatClock, duration } from './data.js'

/* ------------------------------------------------------------------ helpers */
const a = (delay = 0) => `data-delay="${delay}"`
const node = ({ name, title, caption = '', badge = '', tone = '' }) => `
  <div class="node ${tone}">
    ${icon(name)}
    <div style="min-width:0;flex:1">
      <p class="node-title">${title}${badge ? `<span class="node-badge">${badge}</span>` : ''}</p>
      ${caption ? `<p class="node-caption">${caption}</p>` : ''}
    </div>
  </div>`

const zoneHead = (index, label) => `
  <div class="zone-head">
    <span class="t-label mono muted">${index}</span>
    <span class="t-label">${label}</span>
  </div>`

const arrowH = () => `<div class="arrow-h">${icon('arrow-right')}</div>`
const arrowV = () => `<div class="arrow-v" style="height:0.75cqw">${icon('arrow-down')}</div>`

const head = ({ kicker, title, lead = '', right = '' }) => `
  <div class="head-row">
    <div class="head">
      <p class="kicker t-label">${kicker}</p>
      <h1 class="t-h1">${title}</h1>
      ${lead ? `<p class="t-lead" style="max-width:62cqw">${lead}</p>` : ''}
    </div>
    ${right}
  </div>`

const badge = (kind) => {
  const cls = kind === 'REAL' ? 'status-real' : kind === 'MOCK' ? 'status-mock' : 'status-none'
  return `<span class="status ${cls}">${kind}</span>`
}

/* ---------------------------------------------------------------- slide 01 */
export function slide01() {
  const agenda = [
    ['01', 'GoHighLevel + n8n + AI', 'LeadGuard AI'],
    ['02', 'QuoteFlow AI + Odoo 19', 'Parcours commercial'],
    ['03', 'Résolution de problème', 'FreeProxy'],
    ['04', 'Full ownership', 'SuperChantier'],
    ['05', 'Adaptation rapide', 'GoHighLevel'],
  ]

  return `
  <p class="kicker t-label">Présentation d’entretien · CRM &amp; automatisation</p>

  <div class="grid g-60-40 mt-3 grow" style="align-items:stretch">
    <div class="col">
      <h1 class="t-display anim" ${a(0.05)} style="margin:0">
        CRM <span style="color:var(--accent)">·</span> Automation<br />
        AI Integration
      </h1>

      <div class="anim" ${a(0.12)} style="max-width:40cqw;margin-top:1.2cqw">
        <p class="t-lead">
          Entretien Lemay Consulting / Optimo CRM — rôle CRM, automatisation et intégration IA.
        </p>
      </div>

      <div class="anim mt-auto" ${a(0.2)}>
        <div class="row" style="gap:0.9cqw">
          <div style="width:4.4cqw;height:0.3cqw;border-radius:2px;background:var(--accent-deep)"></div>
          <span class="t-h2">Hafida El-Mouden</span>
        </div>
        <p class="t-lead mt-1" style="max-width:44cqw">
          Python <span class="muted">•</span> APIs <span class="muted">•</span> n8n
          <span class="muted">•</span> Odoo 19 <span class="muted">•</span> GoHighLevel
          <span class="muted">•</span> IA
        </p>
      </div>
    </div>

    <div class="card anim" ${a(0.2)} style="display:flex;flex-direction:column;padding:1.3cqw 1.4cqw;height:100%">
      <p class="t-label muted" style="margin:0">Au programme — ${formatClock(TOTAL_SECONDS)}</p>
      <ul style="list-style:none;margin:0.3cqw 0 0;padding:0;flex:1;display:flex;flex-direction:column;justify-content:space-around">
        ${agenda
          .map(
            ([n, label, detail]) => `
          <li class="row" style="gap:0.8cqw;border-bottom:1px solid var(--line);padding:0.5cqw 0">
            <span class="mono t-small muted">${n}</span>
            <span class="t-body grow truncate" style="font-weight:500">${label}</span>
            <span class="t-small muted truncate">${detail}</span>
            ${icon('arrow-right', 'icon icon-sm muted')}
          </li>`,
          )
          .join('')}
      </ul>
      <p class="t-small muted" style="margin:0.6cqw 0 0;border-top:1px solid var(--line);padding-top:0.6cqw">
        Deux architectures, un incident réel, une méthode.
      </p>
    </div>
  </div>

  <div class="foot">
    <span class="t-small">Proof of concept personnel · Developer Sandbox · données synthétiques</span>
    <span class="t-small mono">Hafida El-Mouden · 2026</span>
  </div>`
}

/* ---------------------------------------------------------------- slide 02 */
export function slide02() {
  const chain = [
    ['clipboard-list', 'Demande entrante', 'Formulaire GoHighLevel'],
    ['file-search', 'Qualification', 'Ce qui manque'],
    ['sparkles', 'Analyse IA', 'Extraction structurée'],
    ['send', 'Action CRM', 'Étape, tags, tâche'],
  ]
  const goals = [
    ['Qualifier la demande', 'Service, type de projet, ville, ampleur — sans relire chaque formulaire.'],
    ['Détecter ce qui manque', 'Une demande incomplète reste une demande, mais elle part en revue humaine.'],
    ['Recommander l’action suivante', 'Visite technique, préparation de devis ou revue — décidé par des règles.'],
  ]

  return `
  ${head({
    kicker: 'Question 1 — GoHighLevel + n8n + IA',
    title: 'LeadGuard AI — de la demande reçue à l’opportunité exploitable',
    lead: 'Un prospect remplit un formulaire. Le système qualifie, repère les manques et propose la prochaine action commerciale.',
  })}

  <div class="grid g4 mt-3">
    ${chain
      .map(
        ([ic, title, caption], index) => `
      <div class="card pad-sm row anim" ${a(0.1 + index * 0.08)} style="gap:0.8cqw">
        ${icon(ic, 'icon icon-lg soft')}
        <div style="min-width:0">
          <p class="t-body truncate" style="font-weight:500">${title}</p>
          <p class="t-small muted truncate">${caption}</p>
        </div>
      </div>`,
      )
      .join('')}
  </div>

  <div class="grid g3 mt-3">
    ${goals
      .map(
        ([title, body], index) => `
      <div class="card-flat pad anim" ${a(0.45 + index * 0.08)}>
        <div class="row" style="margin-bottom:0.7cqw">
          <span class="num num-accent">${index + 1}</span>
          <span class="t-body" style="font-weight:600">${title}</span>
        </div>
        <p class="t-small soft">${body}</p>
      </div>`,
      )
      .join('')}
  </div>

  <div class="foot" style="align-items:center">
    <div class="row" style="gap:0.8cqw">
      <span class="t-label muted">Cadre de la démo</span>
      ${badge('REAL')}
      <span class="t-small soft">HighLevel Developer Sandbox</span>
      <span class="t-small muted">·</span>
      <span class="t-small soft">marques fictives, contacts synthétiques</span>
    </div>
    <span class="t-small muted" style="font-style:italic">PoC personnel — pas une implémentation client</span>
  </div>`
}

/* ---------------------------------------------------------------- slide 03 */
export function slide03() {
  const arrow = `<svg viewBox="0 0 60 12" preserveAspectRatio="none"><path d="M0 6h52"/><path d="M46 1.5L52 6l-6 4.5"/></svg>`

  const nodes = [
    { lane: 'CRM', name: 'Formulaire', role: 'Le prospect décrit son projet', tag: 'entrée' },
    { lane: 'CRM', name: 'GoHighLevel', role: 'Crée le contact et l’opportunité', tag: 'source de vérité' },
    { lane: 'Orchestration', name: 'n8n', role: 'Normalise, valide, appelle, réécrit', tag: 'real' },
    { lane: 'Intelligence', name: 'LeadGuard API', role: 'Analyse, contrôle, journalise', tag: 'python · fastapi' },
    { lane: 'Décision', name: 'Règles', role: 'Choisit la route', tag: 'le seul décideur', accent: true },
    { lane: 'Actions', name: 'GoHighLevel', role: 'Tags, étape, note, tâche', tag: 'retour crm' },
  ]

  const lanes = [
    ['CRM', 2],
    ['Orchestration', 1],
    ['Intelligence', 2],
    ['Actions', 1],
  ]

  return `
  ${head({
    kicker: 'Q1 · Architecture',
    title: 'LeadGuard AI — le flux complet',
    lead: 'La demande entre par le CRM, traverse l’orchestration et l’intelligence, puis revient dans le CRM enrichie.',
  })}

  <div class="mt-3">
    <div class="lanes">
      ${lanes
        .map(
          ([label, span], index) => `
        ${index > 0 ? '<div class="lane-gap"></div>' : ''}
        <div class="lane" style="flex:${span}">${label}</div>`,
        )
        .join('')}
    </div>

    <div class="flow">
      ${nodes
        .map(
          (node, index) => `
        <div class="flow-node ${node.accent ? 'flow-node-accent' : ''} anim" ${a(0.05 + index * 0.07)}>
          <div class="flow-node-head">
            <span class="flow-node-name">${node.name}</span>
          </div>
          <p class="flow-node-role">${node.role}</p>
          <span class="flow-node-tag">${node.tag}</span>
        </div>
        ${index < nodes.length - 1 ? `<div class="flow-link">${arrow}</div>` : ''}`,
        )
        .join('')}
    </div>
  </div>

  <p class="t-label muted" style="margin-top:1.1cqw">La limite de chaque brique</p>
  <div class="grid g4" style="margin-top:0.5cqw">
    ${[
      ['globe', 'GoHighLevel', 'Collecte et conserve. Jamais de qualification.'],
      ['workflow', 'n8n', 'Orchestre et trace. Jamais de décision.'],
      ['sparkles', 'DeepSeek', 'Extrait les champs. Jamais la route.'],
      ['list-checks', 'Règles', 'Confiance, ville, service, consentement.'],
    ]
      .map(
        ([ic, title, body], index) => `
      <div class="card-flat pad-sm anim" ${a(0.5 + index * 0.05)}>
        <div class="row" style="gap:0.45cqw">
          ${icon(ic, 'icon icon-sm')}
          <span class="t-small" style="font-weight:700">${title}</span>
        </div>
        <p class="t-small muted" style="margin-top:0.25cqw">${body}</p>
      </div>`,
      )
      .join('')}
  </div>

  <div class="band-dark anim mt-2" ${a(0.6)}>
    ${icon('tags', 'icon')}
    <p class="t-body" style="margin:0">
      L’IA interprète · <span class="accent">les règles décident</span> · GoHighLevel reste le CRM
    </p>
  </div>`
}

/* ---------------------------------------------------------------- slide 04 */
export function slide04() {
  const steps = [
    'Formulaire soumis',
    'Contact + opportunité',
    'Étape AI Qualification',
    'Webhook vers n8n',
    'Normalisation / validation',
    'FastAPI + LLM',
    'Moteur de règles',
    'Synchronisation CRM',
    'Action commerciale',
  ]

  return `
  ${head({
    kicker: 'Q1 · Parcours',
    title: 'Un lead dans le workflow complet',
    right: `<p class="t-small muted" style="max-width:24cqw;text-align:right">
      Neuf étapes, deux systèmes, une seule décision tracée.
    </p>`,
  })}

  <div class="grid g-58-42 mt-3 grow" style="align-items:stretch">
    <div class="grid g3" style="align-content:center;gap:0.55cqw">
      ${steps
        .map(
          (step, index) => `
        <div class="card row" style="gap:0.55cqw;padding:0.75cqw 0.85cqw;align-self:start">
          <span class="num ${index === 7 ? 'num-accent' : ''}" style="width:1.85cqw;height:1.85cqw;font-size:0.72rem">${String(index + 1).padStart(2, '0')}</span>
          <span class="t-small" style="font-weight:500;line-height:1.25">${step}</span>
        </div>`,
        )
        .join('')}
    </div>

    <div class="card" style="display:flex;flex-direction:column;padding:1.1cqw 1.2cqw">
      <div class="row between">
        <span class="t-label muted">Analyse LeadGuard</span>
        <span class="chip chip-accent">route · site_visit</span>
      </div>

      <div class="grid g2" style="gap:0.7cqw;margin-top:0.9cqw">
        ${[
          ['Service', 'Rénovation commerciale'],
          ['Ville', 'Montréal'],
          ['Confiance', '0,96'],
          ['Action', 'Visite technique'],
        ]
          .map(
            ([label, value]) => `
          <div>
            <p class="stat-label">${label}</p>
            <p class="stat-value">${value}</p>
          </div>`,
          )
          .join('')}
      </div>

      <hr class="rule-h" style="margin:0.85cqw 0" />

      <div class="row" style="gap:0.45cqw">
        ${icon('building', 'icon icon-sm soft')}
        <span class="t-label muted">Résultat dans le CRM</span>
      </div>

      <div style="display:flex;flex-direction:column;gap:0.45cqw;margin-top:0.55cqw">
        <div class="row between">
          <span class="t-small muted">Étape</span>
          <span class="t-small" style="font-weight:500;text-align:right">Site Visit To Schedule</span>
        </div>
        <div class="row between" style="align-items:flex-start">
          <span class="t-small muted" style="flex:none">Tags</span>
          <span class="row wrap" style="gap:0.22cqw;justify-content:flex-end;min-width:0">
            <span class="chip" style="padding:0.08em 0.5em;font-size:0.62rem">ai-qualified</span>
            <span class="chip" style="padding:0.08em 0.5em;font-size:0.62rem">commercial</span>
            <span class="chip" style="padding:0.08em 0.5em;font-size:0.62rem">site-visit</span>
          </span>
        </div>
        <div class="row between" style="align-items:flex-start">
          <span class="t-small muted" style="flex:none">Tâche</span>
          <span class="t-small" style="font-weight:500;text-align:right">Planifier une visite</span>
        </div>
      </div>

      <div style="margin-top:auto">
        <p class="t-label muted" style="margin-bottom:0.35cqw">Règles appliquées</p>
        ${[
          'confiance ≥ 0,80',
          'ville couverte par la marque',
          'service reconnu · consentement présent',
        ]
          .map(
            (rule) => `
          <div class="row" style="gap:0.4cqw;padding:0.12cqw 0">
            ${icon('check', 'icon icon-sm')}
            <span class="t-small soft">${rule}</span>
          </div>`,
          )
          .join('')}
      </div>

      <div class="node-note" style="margin-top:0.8cqw">
        Données synthétiques de démonstration. Aucun message au prospect.
      </div>
    </div>
  </div>

  <p class="t-small muted row" style="gap:0.45cqw;margin-top:0.7cqw">
    ${icon('check-circle', 'icon icon-sm')}
    Chaque écriture CRM est idempotente : rejouer le même formulaire ne crée ni second contact, ni second devis.
  </p>`
}

/* ---------------------------------------------------------------- slide 05 */
export function slide05() {
  return `
  ${head({
    kicker: 'Q1 · Contrôle humain',
    title: 'Automatiser quand la confiance est haute. Faire relire quand ça compte.',
  })}

  <div class="grid g2 mt-3 grow" style="align-items:stretch">
    <div class="route anim" ${a(0.1)}>
      <div class="row between">
        <span class="t-label muted">Route automatique</span>
        <span class="chip chip-accent">site_visit</span>
      </div>
      <div class="row mt-2" style="align-items:baseline;gap:0.8cqw">
        <span class="mono big-number">0,96</span>
        <span class="t-body muted">confiance</span>
      </div>
      <p class="t-h2 mt-1">Demande qualifiée</p>
      <p class="t-small soft mt-1">
        Service reconnu, ville couverte, consentement présent, aucun signal de sécurité.
      </p>
      <div class="stack mt-auto" style="gap:0.5cqw;border-top:1px solid var(--line);padding-top:0.8cqw">
        <div class="row" style="gap:0.5cqw">
          ${icon('check-circle', 'icon icon-sm')}
          <span class="t-small">Étape <strong>Site Visit To Schedule</strong></span>
        </div>
        <div class="row" style="gap:0.5cqw">
          ${icon('check-circle', 'icon icon-sm')}
          <span class="t-small">Tags, note d’analyse, tâche commerciale</span>
        </div>
      </div>
    </div>

    <div class="route route-flat anim" ${a(0.22)}>
      <div class="row between">
        <span class="t-label muted">Route revue humaine</span>
        <span class="chip">human_review</span>
      </div>
      <div class="row mt-2" style="align-items:baseline;gap:0.8cqw">
        <span class="mono big-number soft">0,42</span>
        <span class="t-body muted">confiance</span>
      </div>
      <p class="t-h2 mt-1">Demande incomplète</p>
      <p class="t-small soft mt-1">« Je voudrais faire des travaux. Merci de me contacter. »</p>
      <div class="row wrap mt-1" style="gap:0.3cqw">
        <span class="chip">service manquant</span>
        <span class="chip">budget absent</span>
        <span class="chip">adresse absente</span>
      </div>
      <div class="stack mt-auto" style="gap:0.5cqw;border-top:1px solid var(--line-strong);padding-top:0.8cqw">
        <div class="row" style="gap:0.5cqw">
          ${icon('alert-triangle', 'icon icon-sm')}
          <span class="t-small">Étape <strong>Missing Information</strong></span>
        </div>
        <div class="row" style="gap:0.5cqw">
          ${icon('user-check', 'icon icon-sm')}
          <span class="t-small">Tâche interne : vérifier et compléter</span>
        </div>
      </div>
    </div>
  </div>

  <div class="band-dark mt-2 anim" ${a(0.35)}>
    <p class="t-body" style="margin:0">« L’IA accélère la décision sans retirer le contrôle humain. »</p>
  </div>`
}

/* ---------------------------------------------------------------- slide 06 */
export function slide06() {
  const lifecycle = ['Lead', 'Visite', 'Devis', 'Signature', 'Paiement', 'Contrat', 'Opérations']

  return `
  <div>
    <p class="kicker t-label">Question 2 — Odoo 19</p>
    <h1 class="t-display mt-2 anim" ${a(0.05)}>QuoteFlow AI <span class="muted">+</span> Odoo 19</h1>
    <p class="t-lead mt-2 anim" ${a(0.15)} style="max-width:58cqw">
      Un parcours commercial complet, pas un générateur de devis isolé.
    </p>
  </div>

  <div class="row mt-4" style="gap:0.55cqw;align-items:stretch">
    ${lifecycle
      .map(
        (step, index) => `
      <div class="row anim" ${a(0.25 + index * 0.06)} style="gap:0.55cqw;flex:1;align-items:stretch">
        <div class="tl-card" style="text-align:center;padding:0.9cqw 0.5cqw;${index >= 3 ? '' : 'background:var(--paper-2);border-color:var(--line-strong)'}">
          <p class="mono t-label muted">${String(index + 1).padStart(2, '0')}</p>
          <p class="t-small mt-1" style="font-weight:500;margin-top:0.3cqw">${step}</p>
        </div>
        ${index < lifecycle.length - 1 ? `<div class="arrow-h" style="width:1.2cqw">${icon('arrow-right')}</div>` : ''}
      </div>`,
      )
      .join('')}
  </div>

  <div class="foot" style="align-items:center">
    <p class="t-h2" style="max-width:52cqw">Odoo reste la source de vérité métier : produits, prix, taxes, contrat.</p>
    <div class="row" style="gap:0.6cqw">
      ${badge('REAL')}
      <span class="t-small muted">architecture Odoo 19 existante</span>
    </div>
  </div>`
}

/* ---------------------------------------------------------------- slide 07 */
export function slide07() {
  const down = `<svg viewBox="0 0 12 24"><path d="M6 0v18"/><path d="M1.5 14L6 19l4.5-5"/></svg>`

  const bands = [
    {
      label: 'Canaux',
      role: 'Collectent la demande',
      limit: 'ne qualifient pas',
      cards: [
        ['mail', 'E-mail', 'demande écrite'],
        ['boxes', 'Formulaire', 'site web'],
        ['phone', 'Téléphone', 'appel qualifié'],
        ['message-square', 'CRM', 'Odoo / autres'],
      ],
    },
    {
      label: 'Orchestration',
      role: 'n8n',
      limit: 'ne décide pas des prix',
      cards: [['workflow', 'n8n', 'reçoit · route · réessaie · journalise']],
    },
    {
      label: 'Intelligence',
      role: 'QuoteFlow AI',
      limit: 'ne fixe jamais un prix',
      cards: [
        ['cpu', 'FastAPI', 'service d’analyse'],
        ['sparkles', 'DeepSeek', 'GLM en fallback'],
        ['scan-text', 'Extraction', 'JSON validé'],
        ['list-checks', 'Règles métier', 'déterministes'],
      ],
    },
    {
      label: 'Odoo 19',
      role: 'Source de vérité métier',
      limit: 'ne qualifie pas la demande',
      highlight: true,
      cards: [
        ['users', 'Client', ''],
        ['clipboard-list', 'Visite', ''],
        ['file-text', 'Devis', 'prix · taxes'],
        ['file-check', 'Contrat', ''],
        ['mail', 'Mail center', ''],
      ],
    },
    {
      label: 'Services',
      role: 'Signature · paiement · e-mail',
      limit: 'ne stockent pas le dossier',
      cards: [
        ['server', 'SMTP / IMAP', 'OVH · Titan · Hostinger'],
        ['pen-tool', 'Signature', 'électronique'],
        ['banknote', 'Stripe', 'par marque'],
      ],
    },
  ]

  return `
  ${head({
    kicker: 'Q2 · Architecture',
    title: 'QuoteFlow AI — cinq couches, un flux',
    lead: 'Chaque couche reçoit, transforme et transmet. La colonne de droite dit ce qu’elle ne fait jamais.',
  })}

  <div class="mt-2">
    ${bands
      .map(
        (band, index) => `
      <div class="band-row anim" ${a(0.05 + index * 0.09)}>
        <div class="band-label">
          <p class="t-label">${band.label}</p>
          <p class="band-role">${band.role}</p>
        </div>
        <div class="grid" style="grid-template-columns:repeat(${band.cards.length},minmax(0,1fr));gap:0.4cqw;${
          band.highlight ? 'border:1px solid var(--accent-deep);border-radius:0.8cqw;padding:0.4cqw;background:var(--accent)' : ''
        }">
          ${band.cards
            .map(([ic, title, caption]) =>
              band.highlight
                ? `<div class="flow-node flow-node-accent" style="min-height:0;padding:0.55cqw 0.6cqw">
                     <div class="flow-node-head">${icon(ic, 'icon icon-sm')}<span class="flow-node-name" style="font-size:0.86rem">${title}</span></div>
                     ${caption ? `<p class="flow-node-role" style="font-size:0.68rem">${caption}</p>` : ''}
                   </div>`
                : node({ name: ic, title, caption }),
            )
            .join('')}
        </div>
        <p class="band-limit">${band.limit}</p>
      </div>
      ${index < bands.length - 1 ? `<div class="band-connector" style="margin-left:11cqw">${down}</div>` : ''}`,
      )
      .join('')}
  </div>`
}

/* ---------------------------------------------------------------- slide 08 */
export function slide08() {
  const steps = [
    ['01', 'Demande', 'Formulaire', 'tl-phase'],
    ['02', 'Qualification', 'Ville, service', 'tl-phase'],
    ['03', 'Visite technique', 'Sur site', 'tl-tech'],
    ['04', 'Rapport technicien', 'Notes, photos', 'tl-tech'],
    ['05', 'Extraction IA', 'Données structurées', 'tl-tech'],
    ['06', 'Devis brouillon', 'Catalogue Odoo', 'tl-phase'],
    ['07', 'Validation humaine', 'Prix, taxes', 'tl-phase'],
    ['08', 'Signature', 'Lien sécurisé', 'tl-contract'],
    ['09', 'Paiement Stripe', 'Par marque', 'tl-contract'],
    ['10', 'Contrat actif', 'Archivé', 'tl-contract'],
    ['11', 'Opérations', 'Interventions', 'tl-ops'],
  ]
  const phases = [
    ['ACQUISITION', 'var(--paper-2)'],
    ['TECHNIQUE', '#eef3e2'],
    ['COMMERCIAL', 'var(--surface)'],
    ['CONTRAT', '#e9efe9'],
    ['OPÉRATIONS', 'var(--night-2)'],
  ]

  return `
  ${head({ kicker: 'Q2 · Parcours', title: 'De la demande client au contrat actif' })}

  <div class="row wrap mt-2" style="gap:0.4cqw">
    ${phases
      .map(
        ([label, color], index) => `
      <span class="row" style="gap:0.35cqw">
        <span style="width:0.7cqw;height:0.7cqw;border-radius:2px;background:${
          index === 4 ? 'var(--accent)' : 'rgba(255,255,255,0.22)'
        };border:1px solid ${index === 4 ? 'var(--accent-deep)' : 'rgba(255,255,255,0.4)'}"></span>
        <span class="t-label muted">${label}</span>
      </span>`,
      )
      .join('')}
    <span class="t-small muted" style="margin-left:auto">Deux points de contrôle humain : 03 et 07</span>
  </div>

  <div class="timeline mt-3" style="align-items:stretch">
    ${steps
      .map(
        ([n, label, caption, cls], index) => `
      <div class="tl-item">
        <div class="tl-card ${cls}" style="padding:0.85cqw 0.7cqw;min-height:11cqw">
          <p class="mono t-label" style="opacity:0.55">${n}</p>
          <p class="t-small" style="font-weight:600;line-height:1.25;margin-top:0.45cqw">${label}</p>
          <p class="t-small" style="opacity:0.68;margin-top:0.2cqw;font-size:0.66rem">${caption}</p>
        </div>
        <div class="tl-bar ${index < 5 ? 'tl-bar-accent' : ''}"></div>
      </div>`,
      )
      .join('')}
  </div>

  <div class="foot" style="margin-top:auto">
    <p class="t-body soft" style="max-width:46cqw">
      Onze étapes, cinq phases, deux validations humaines — le reste est orchestré.
    </p>
    <p class="t-h2" style="max-width:38cqw;text-align:right">L’IA structure, l’humain valide, Odoo applique les règles.</p>
  </div>`
}

export const PART_ONE = { slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08 }
export { head, node, arrowH, arrowV, badge, a, zoneHead, duration, SLIDES }
