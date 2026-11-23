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
  return `
  ${head({
    kicker: 'Q1 · Architecture',
    title: 'LeadGuard AI — System Architecture',
    lead: 'Quatre zones, une responsabilité par zone. Le flux va de gauche à droite, puis revient au CRM.',
  })}

  <div class="arch mt-3">
    <div class="zone anim" ${a(0.05)} style="width:20%">
      ${zoneHead('01', 'CRM · entrée')}
      <div class="zone-body">
        ${node({ name: 'globe', title: 'GoHighLevel', caption: 'Formulaire · Contact · Opportunité', badge: 'REAL' })}
        <p class="node-note"><strong>Source de vérité</strong> — le prospect, l’opportunité et l’historique vivent ici.</p>
      </div>
    </div>

    ${arrowH()}

    <div class="zone anim" ${a(0.15)} style="width:23%">
      ${zoneHead('02', 'Orchestration')}
      <div class="zone-body">
        ${node({ name: 'network', title: 'n8n — Webhook', caption: 'Réception, normalisation, validation', badge: 'REAL' })}
        ${node({ name: 'git-branch', title: 'n8n — routage', caption: 'Une branche par décision' })}
        ${node({ name: 'list-checks', title: 'n8n — CRM sync', caption: 'Écritures contrôlées, idempotentes' })}
      </div>
    </div>

    ${arrowH()}

    <div class="zone anim" ${a(0.25)} style="width:27%">
      ${zoneHead('03', 'Intelligence')}
      <div class="zone-body">
        ${node({ name: 'cpu', title: 'LeadGuard API', caption: 'Python · FastAPI · analyse et validation' })}
        ${node({ name: 'sparkles', title: 'DeepSeek', caption: 'Extraction structurée, JSON validé' })}
        ${node({ name: 'list-checks', title: 'Règles déterministes', caption: 'Confiance, ville, service, consentement', badge: 'décision', tone: 'node-accent' })}
      </div>
    </div>

    ${arrowH()}

    <div class="zone anim" ${a(0.35)} style="width:20%">
      ${zoneHead('04', 'Actions CRM')}
      <div class="zone-body">
        ${node({ name: 'database', title: 'GoHighLevel', caption: 'Retour dans le CRM', badge: 'REAL' })}
        <div class="row wrap" style="gap:0.3cqw">
          ${['champs IA', 'tags', 'étape', 'note', 'tâche']
            .map((tag) => `<span class="chip" style="padding:0.14em 0.55em">${tag}</span>`)
            .join('')}
        </div>
        <p class="node-note">Aucun message client n’est envoyé par cette automatisation.</p>
      </div>
    </div>
  </div>

  <div class="band-dark anim mt-auto" ${a(0.55)}>
    ${icon('tags', 'icon')}
    <p class="t-body" style="margin:0">
      L’IA interprète la demande. <span class="accent">Les règles déterministes décident.</span>
      GoHighLevel reste le CRM.
    </p>
    <span class="mono t-small" style="color:rgba(255,255,255,0.72);margin-left:auto">form → n8n → FastAPI → n8n → GHL</span>
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
  const bands = [
    {
      label: 'Canaux',
      hint: 'Entrée',
      cards: [
        ['mail', 'E-mail', 'Demandes clients'],
        ['boxes', 'Formulaire', 'Site web'],
        ['phone', 'Téléphone', 'Appel qualifié'],
        ['message-square', 'CRM', 'Odoo / autres'],
      ],
    },
    { label: 'Orchestration', hint: 'Transport', cards: [['workflow', 'n8n', 'Routage, reprise, journalisation']], wide: true },
    {
      label: 'Intelligence',
      hint: 'Analyse',
      cards: [
        ['cpu', 'QuoteFlow AI', 'Python · FastAPI'],
        ['sparkles', 'DeepSeek', 'GLM en fallback'],
        ['scan-text', 'Extraction structurée', 'JSON validé'],
        ['list-checks', 'Règles métier', 'Déterministes'],
      ],
      tone: 'node-accent',
    },
    {
      label: 'Odoo 19',
      hint: 'Source de vérité',
      cards: [
        ['boxes', 'CRM', ''],
        ['users', 'Client', ''],
        ['clipboard-list', 'Visite technique', ''],
        ['file-text', 'Devis', ''],
        ['file-check', 'Contrat', ''],
        ['mail', 'Mail center', ''],
      ],
      highlight: true,
    },
    {
      label: 'Services',
      hint: 'Externe',
      cards: [
        ['server', 'SMTP / IMAP', 'OVH · Titan · Hostinger'],
        ['pen-tool', 'Signature', 'Électronique'],
        ['banknote', 'Stripe', 'Par marque'],
      ],
    },
  ]

  return `
  ${head({
    kicker: 'Q2 · Architecture',
    title: 'QuoteFlow AI — architecture en couches',
    right: `<p class="t-small muted" style="max-width:28cqw;text-align:right">
      Chaque couche a une responsabilité unique. Aucune ne décide à la place d’Odoo.
    </p>`,
  })}

  <div class="stack mt-2 grow" style="justify-content:center;gap:1.05cqw">
    ${bands
      .map(
        (band, index) => `
      <div class="grid anim" ${a(0.05 + index * 0.09)} style="grid-template-columns:11cqw 1fr;align-items:center;gap:0.9cqw">
        <div style="text-align:right">
          <p class="t-label">${band.label}</p>
          <p class="t-small muted">${band.hint}</p>
        </div>
        <div class="grid" style="grid-template-columns:repeat(${band.cards.length},minmax(0,1fr));gap:0.45cqw;${
          band.highlight ? 'border:1px solid var(--line-strong);border-radius:0.9cqw;padding:0.5cqw;background:var(--surface)' : ''
        }">
          ${band.cards
            .map(([ic, title, caption]) =>
              node({
                name: ic,
                title,
                caption,
                tone: band.highlight ? 'node-accent' : band.tone === 'node-accent' ? '' : '',
              }),
            )
            .join('')}
        </div>
      </div>`,
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
