import { icon } from './icons.js'

import { VIDEO_URL } from './data.js'
import { head, node, arrowH, badge, a } from './slides-a.js'

/* ---------------------------------------------------------------- slide 09 */
export function slide09() {
  const flow = [
    ['clipboard-list', 'Visite technique', 'Sur site, avec le client'],
    ['mic', 'Technicien', 'Dictée, notes, photos'],
    ['scan-text', 'Transcription', 'Audio → texte'],
    ['sparkles', 'QuoteFlow AI', 'Extraction structurée'],
  ]
  const values = [
    ['Surface', '450 m²'],
    ['Zones', '3'],
    ['Visites initiales', '4'],
    ['Fréquence', 'Mensuelle'],
    ['Accès', 'Arrière'],
  ]

  return `
  ${head({
    kicker: 'Q2 · Visite technique',
    title: 'Transformer l’expertise terrain en données exploitables',
  })}

  <div class="grid g2 mt-3 grow" style="align-items:start">
    <div class="col">
      ${flow
        .map(
          ([ic, title, caption], index) => `
        <div class="anim" ${a(0.05 + index * 0.1)}>
          <div class="card pad-sm row" style="gap:0.8cqw">
            ${icon(ic, 'icon soft')}
            <div style="min-width:0">
              <p class="t-body truncate" style="font-weight:500">${title}</p>
              <p class="t-small muted truncate">${caption}</p>
            </div>
          </div>
          ${index < flow.length - 1 ? '<div class="arrow-v" style="height:1.15cqw">' + icon('arrow-down') + '</div>' : ''}
        </div>`,
        )
        .join('')}

      <div class="row anim" ${a(0.5)} style="gap:0.7cqw;margin-top:0.7cqw;background:var(--accent);border:1px solid var(--accent-deep);border-radius:0.8cqw;padding:0.7cqw 1cqw">
        <span class="t-small" style="font-weight:600;color:var(--accent-ink)">Données structurées → Odoo</span>
        ${icon('arrow-right', 'icon')}
      </div>
    </div>

    <div class="card pad anim" ${a(0.35)} style="display:flex;flex-direction:column">
      <div class="row between">
        <span class="t-label muted">Extrait de la visite</span>
        <span class="chip chip-accent">structured</span>
      </div>

      <div class="grow mt-2" style="display:flex;flex-direction:column;justify-content:space-around">
        ${values
          .map(
            ([label, value]) => `
          <div class="row between" style="border-bottom:1px solid var(--line);padding-bottom:0.55cqw">
            <div>
              <p class="stat-label">${label}</p>
              <p class="stat-value">${value}</p>
            </div>
            ${icon('check', 'icon icon-sm')}
          </div>`,
          )
          .join('')}
      </div>

      <div class="node-note mt-2">
        <strong>L’IA structure l’information technique.</strong> Odoo reste responsable des produits,
        des prix, des taxes et des règles commerciales.
      </div>
    </div>
  </div>`
}

/* ---------------------------------------------------------------- slide 10 */
export function slide10() {
  const cards = [
    ['file-check', '01', 'Devis', ['Catalogue produits Odoo', 'Liste de prix et taxes', 'Validation humaine']],
    ['pen-tool', '02', 'Signature', ['Lien sécurisé', 'Signature électronique', 'Contrat signé archivé']],
    ['banknote', '03', 'Paiement', ['Stripe par marque', 'Lien de paiement', 'Webhook de confirmation']],
  ]

  return `
  ${head({
    kicker: 'Q2 · Commercialisation',
    title: 'Du devis validé au contrat actif',
    right: `<p class="t-small muted" style="max-width:28cqw;text-align:right">
      Trois systèmes, trois responsabilités, un seul parcours.
    </p>`,
  })}

  <div class="grid mt-3" style="grid-template-columns:1fr auto 1fr auto 1fr;align-items:stretch;gap:0.6cqw">
    ${cards
      .map(
        ([ic, step, title, items], index) => `
      <div class="card pad anim" ${a(0.05 + index * 0.12)}>
        <div class="row between">
          ${icon(ic, 'icon soft')}
          <span class="mono t-label muted">${step}</span>
        </div>
        <p class="t-h2 mt-2">${title}</p>
        <ul style="list-style:none;margin:0.7cqw 0 0;padding:0">
          ${items
            .map(
              (item) =>
                `<li class="t-small soft row" style="gap:0.45cqw;padding:0.16cqw 0"><span class="muted">·</span>${item}</li>`,
            )
            .join('')}
        </ul>
      </div>
      ${index < cards.length - 1 ? `<div class="center row">${icon('arrow-right', 'icon muted')}</div>` : ''}`,
      )
      .join('')}
  </div>

  <div class="band-dark mt-2 anim" ${a(0.5)}>
    ${icon('badge-check', 'icon')}
    <span class="t-body" style="font-weight:600">Contrat actif</span>
    ${icon('arrow-right', 'icon muted')}
    <span class="t-small" style="color:rgba(255,255,255,0.78)">Planification des interventions · suivi · récurrences</span>
  </div>

  <div class="foot" style="align-items:center">
    <div class="row" style="gap:0.6cqw">
      ${icon('layers', 'icon icon-sm soft')}
      <span class="t-label muted">Principe multi-marque</span>
    </div>
    <div class="row" style="gap:0.5cqw">
      <span class="t-small" style="font-weight:500">marque commerciale</span>
      ${icon('arrow-right', 'icon icon-sm muted')}
      <span class="t-small">e-mail</span>
      ${icon('arrow-right', 'icon icon-sm muted')}
      <span class="t-small">documents</span>
      ${icon('arrow-right', 'icon icon-sm muted')}
      <span class="t-small">configuration Stripe</span>
    </div>
    <span class="t-small muted">Chaque marque garde son identité.</span>
  </div>`
}

/* ---------------------------------------------------------------- slide 11 */
export function slide11() {
  const providers = ['OVH', 'Titan', 'Hostinger']
  const features = [
    ['inbox', 'Entrants'],
    ['send', 'Envoyés'],
    ['users', 'Fils de discussion'],
    ['paperclip', 'Pièces jointes'],
    ['refresh-ccw', 'Erreurs de synchro'],
  ]

  return `
  ${head({
    kicker: 'Q2 · Communication',
    title: 'Un mail center pour toutes les marques',
    right: `<p class="t-small muted" style="max-width:26cqw;text-align:right">
      Slide courte : le point d’intégration, pas l’historique.
    </p>`,
  })}

  <div class="grid mt-3 grow" style="grid-template-columns:0.85fr auto 1fr;align-items:center;gap:1.4cqw">
    <div class="stack">
      ${providers
        .map(
          (provider, index) => `
        <div class="card pad-sm row anim" ${a(0.05 + index * 0.1)} style="gap:0.7cqw">
          ${icon('mail', 'icon soft')}
          <span class="t-body" style="font-weight:500">${provider}</span>
          <span class="t-small muted ml-auto" style="margin-left:auto">SMTP / IMAP</span>
        </div>`,
        )
        .join('')}
    </div>

    <div class="arrow-h" style="width:2.6cqw">${icon('arrow-right', 'icon-lg')}</div>

    <div class="card anim" ${a(0.3)} style="padding:1.5cqw 1.6cqw">
      <div class="row between">
        <span class="t-label muted">ITB Mail Center · Odoo 19</span>
        <span class="chip chip-accent">centralisé</span>
      </div>

      <div class="row wrap mt-2" style="gap:0.35cqw">
        ${features
          .map(([ic, label]) => `<span class="chip">${icon(ic, 'icon icon-sm')}${label}</span>`)
          .join('')}
      </div>

      <div class="grid g4 mt-2" style="border-top:1px solid var(--line);padding-top:0.9cqw">
        ${['Client', 'Lead', 'Devis', 'Contrat']
          .map(
            (target) =>
              `<div style="background:var(--paper-2);border-radius:0.5cqw;padding:0.5cqw;text-align:center">
                <span class="t-small" style="font-weight:500">${target}</span>
              </div>`,
          )
          .join('')}
      </div>
    </div>
  </div>

  <div class="foot">
    <p class="t-h2">Un historique commercial unique, même avec plusieurs fournisseurs d’e-mail.</p>
  </div>`
}

/* ---------------------------------------------------------------- slide 12 */
export function slide12() {
  const blocks = [
    ['alert-triangle', 'Symptôme', 'Proxy affiché actif, mais injoignable après un rescan du modem.'],
    ['file-search', 'Investigation', 'État en base vs namespace Linux vs forwarding réseau.'],
    ['target', 'Cause racine', 'Le modem a changé de namespace ; le forwarding pointait encore l’ancienne IP.'],
    ['check-circle', 'Correctif', 'Réconciliation d’état, health checks, réparation idempotente, verrou concurrence.'],
  ]

  return `
  ${head({
    kicker: 'Q3 · Résolution de problème',
    title: 'Q3 — Corriger la cause, pas le symptôme',
    right: `<div class="row" style="gap:0.6cqw">${icon('server', 'icon soft')}<span class="t-small muted">FreeProxy · proxies mobiles</span></div>`,
  })}

  <div class="grid g4 mt-3" style="align-items:stretch">
    ${blocks
      .map(
        ([ic, title, body], index) => `
      <div class="${index === 3 ? 'card' : 'card-flat'} pad anim" ${a(0.08 + index * 0.1)} style="${index === 3 ? 'border-color:var(--accent-deep);background:var(--surface)' : ''}">
        <div class="row between">
          ${icon(ic, 'icon soft')}
          <span class="mono t-label muted">${String(index + 1).padStart(2, '0')}</span>
        </div>
        <p class="t-h2 mt-2" style="font-size:clamp(0.86rem,1.3cqw,1.3rem)">${title}</p>
        <p class="t-small soft mt-1">${body}</p>
        ${index === 3 ? `<div class="row mt-2" style="gap:0.3cqw"><span class="chip chip-accent">tests de reprise</span></div>` : ''}
      </div>`,
      )
      .join('')}
  </div>

  <div class="row mt-3" style="gap:0.8cqw">
    <div class="card pad-sm row grow" style="gap:0.9cqw">
      <span class="chip">état attendu</span>
      ${icon('x', 'icon icon-sm muted')}
      <span class="chip">état réel</span>
      ${icon('arrow-right', 'icon icon-sm')}
      <span class="t-small" style="font-weight:600">réconciliation</span>
      <span class="t-small muted" style="margin-left:auto">Calculée à chaque cycle, jamais supposée.</span>
    </div>
  </div>

  <div class="foot">
    <p class="t-body soft">
      La correction agit sur le mécanisme : état réconcilié, santé vérifiée, réparation rejouable.
    </p>
    <p class="t-h2" style="max-width:38cqw;text-align:right">Corriger le mécanisme, pas l’erreur visible.</p>
  </div>`
}

/* ---------------------------------------------------------------- slide 13 */
export function slide13() {
  const chain = [
    'Besoin utilisateur',
    'Modèle de données',
    'API Django',
    'Application Flutter',
    'Stockage offline',
    'Synchronisation',
    'Rapports PDF',
    'Production',
  ]
  const edgeCases = ['doublons', 'uploads partiels', 'conflits de sync', 'photos hors ligne']

  return `
  ${head({
    kicker: 'Q4 · Full ownership',
    title: 'Q4 — Du besoin utilisateur à la production',
    right: `<div class="row" style="gap:0.6cqw">${icon('clipboard-check', 'icon soft')}<span class="t-small muted">SuperChantier</span></div>`,
  })}

  <div class="row mt-3 wrap" style="gap:0.5cqw;align-items:stretch">
    ${chain
      .map(
        (step, index) => `
      <div class="row anim" ${a(0.05 + index * 0.06)} style="gap:0.5cqw;align-items:stretch">
        <div class="tl-card" style="padding:0.7cqw 0.75cqw;${index >= 7 ? 'background:var(--night-2);color:var(--night-text);border-color:var(--night-line)' : ''}">
          <p class="mono t-label muted">${String(index + 1).padStart(2, '0')}</p>
          <p class="t-small" style="font-weight:500;margin-top:0.3cqw">${step}</p>
        </div>
        ${index < chain.length - 1 ? `<div class="arrow-h" style="width:1cqw">${icon('arrow-right')}</div>` : ''}
      </div>`,
      )
      .join('')}
  </div>

  <div class="grid g-60-40 mt-3 grow" style="align-items:stretch">
    <div class="card pad anim" ${a(0.5)}>
      <div class="row between">
        <span class="t-label muted">Exemple de fonctionnalité</span>
        <span class="chip">observation sur plan</span>
      </div>
      <div class="grid g2" style="gap:0.7cqw;margin-top:auto;margin-bottom:auto;padding:0.6cqw 0">
        ${[
          ['Position sur plan', 'point placé sur l’image'],
          ['Photos multiples', 'prise de vue directe'],
          ['Offline-first', 'continuité sans réseau'],
          ['Rapports PDF', 'observations intégrées'],
        ]
          .map(
            ([title, detail]) => `
          <div class="card-flat pad-sm">
            <p class="t-small" style="font-weight:600">${title}</p>
            <p class="t-small muted">${detail}</p>
          </div>`,
          )
          .join('')}
      </div>
    </div>

    <div class="card-flat pad anim" ${a(0.6)} style="display:flex;flex-direction:column">
      <span class="t-label muted">Cas limites traités</span>
      <div class="stack mt-2">
        ${edgeCases
          .map(
            (item) => `
          <div class="row" style="gap:0.5cqw">
            ${icon('check', 'icon icon-sm')}
            <span class="t-small soft">${item}</span>
          </div>`,
          )
          .join('')}
      </div>
      <p class="t-small muted" style="margin-top:auto;padding-top:1.2cqw">
        Une fonctionnalité est finie quand le parcours complet tient, pas quand le code compile.
      </p>
    </div>
  </div>

  <div class="foot">
    <p class="t-h2" style="max-width:70cqw">
      « Une fonctionnalité est terminée quand le parcours utilisateur complet est fiable. »
    </p>
  </div>`
}

/* ---------------------------------------------------------------- slide 14 */
export function slide14() {
  const built = ['Pipeline', 'Custom fields', 'Tags', 'Formulaire', 'Workflow', 'Webhook', 'n8n', 'FastAPI', 'Synchronisation IA']
  const learn = ['Comprendre', 'Configurer', 'Tester', 'Casser volontairement', 'Valider les cas limites', 'Documenter', 'Répéter']

  return `
  ${head({
    kicker: 'Q5 · GoHighLevel',
    title: 'Q5 — Devenir opérationnelle rapidement sur GoHighLevel',
    right: `<div class="row" style="gap:0.5cqw">${badge('REAL')}<span class="t-small muted">Developer Sandbox</span></div>`,
  })}

  <div class="grid g2 mt-2 grow" style="align-items:start">
    <div class="card pad anim" ${a(0.1)}>
      <div class="row between">
        <span class="t-label muted">Ce qui est déjà construit</span>
        <span class="t-small muted">implémentation en cours</span>
      </div>
      <div class="row wrap mt-2" style="gap:0.35cqw">
        ${built
          .map((item) => `<span class="chip">${icon('check', 'icon icon-sm')}${item}</span>`)
          .join('')}
      </div>
      <div class="node-note mt-auto" style="margin-top:1.2cqw">
        Un pipeline, un formulaire, un workflow, un webhook : les fondations d’un compte réel, dans un
        bac à sable, avec des marques fictives.
      </div>
    </div>

    <div class="card-flat pad anim" ${a(0.22)}>
      <span class="t-label muted">Comment j’apprends</span>
      <div class="mt-2" style="display:flex;flex-direction:column;gap:0.42cqw">
        ${learn
          .map(
            (step, index) => `
          <div class="row" style="gap:0.6cqw">
            <span class="num ${index === 0 ? 'num-accent' : ''}" style="width:1.75cqw;height:1.75cqw;font-size:0.72rem">${index + 1}</span>
            <span class="t-small soft">${step}</span>
          </div>`,
          )
          .join('')}
      </div>
    </div>
  </div>

  <div class="card pad-sm mt-2 anim" ${a(0.4)}>
    <div class="row wrap" style="gap:0.6cqw">
      <span class="t-label muted">Méthode client</span>
      ${['Cartographier l’existant', 'Tester en sandbox', 'Modifier par petits pas', 'Valider', 'Livrer']
        .map(
          (step, index, arr) =>
            `<span class="t-small" style="font-weight:500">${step}</span>${
              index < arr.length - 1 ? icon('arrow-right', 'icon icon-sm muted') : ''
            }`,
        )
        .join('')}
    </div>
  </div>

  <div class="foot">
    <p class="t-body soft" style="max-width:60cqw">
      Transparence : pas deux ans d’expérience professionnelle sur la plateforme. Mais les fondamentaux
      — CRM, API, webhooks, n8n, Python — sont déjà maîtrisés et appliqués.
    </p>
    <p class="t-h2" style="max-width:32cqw;text-align:right">Le socle est là, l’outil suit.</p>
  </div>`
}

/* ---------------------------------------------------------------- slide 15 */
export function slide15() {
  const values = [
    ['comprendre le métier', 'Comprendre le processus avant de l’automatiser.'],
    ['intégration', 'CRM + APIs + n8n + Python.'],
    ['IA sous contrôle', 'LLM + règles déterministes + validation humaine.'],
    ['qualité d’ingénierie', 'Tests, observabilité, fiabilité.'],
  ]

  return `
  <p class="kicker t-label">Conclusion</p>
  <h1 class="t-display mt-3 anim" ${a(0.05)}>
    CRM <span style="color:var(--accent)">·</span> Automation
    <span style="color:var(--accent)">·</span> AI<br />
    <span style="color:var(--accent)">Reliability</span>
  </h1>

  <div class="grid g4 mt-4">
    ${values
      .map(
        ([title, body], index) => `
      <div class="card pad anim" ${a(0.2 + index * 0.08)}>
        <p class="mono t-label muted">${String(index + 1).padStart(2, '0')}</p>
        <p class="t-body mt-2" style="font-weight:600;text-transform:uppercase;letter-spacing:0.06em;font-size:0.78rem">${title}</p>
        <p class="t-small soft mt-1">${body}</p>
      </div>`,
      )
      .join('')}
  </div>

  <div class="mt-auto" style="border-top:1px solid var(--line);padding-top:1.4cqw">
    <p class="t-h1" style="max-width:72cqw">
      La technologie doit simplifier les opérations, pas ajouter de la complexité.
    </p>
    <p class="t-lead mt-2">
      Prête à transformer des processus CRM en systèmes opérationnels fiables.
    </p>
  </div>`
}


/* ---------------------------------------------------------- slide 18 video */
export function slide18Video() {
  const items = [
    ['Le problème', 'Pourquoi le sujet : un CRM seul ne qualifie rien.'],
    ['Les deux architectures', 'LeadGuard AI et QuoteFlow AI, couche par couche.'],
    ['L’incident', 'Diagnostic, cause racine, correctif, tests.'],
    ['L’adaptation', 'GoHighLevel pris en main en trois semaines.'],
  ]

  return `
  ${head({
    kicker: 'Version commentée',
    title: 'La présentation, dite à voix haute',
    lead: 'Vingt-quatre minutes filmées : le deck commenté de bout en bout, du problème à l’adaptation.',
  })}

  <div class="grid mt-2 grow" style="grid-template-columns:1.62fr 1fr;gap:1.2cqw;align-items:stretch">
    <figure class="video-card anim" ${a(0.1)}>
      <video controls playsinline preload="metadata" poster="./assets/video/poster.jpg">
        <source src="./assets/video/demo-lite.mp4" type="video/mp4" />
        <source src="${VIDEO_URL}" type="video/mp4" />
      </video>
    </figure>

    <div class="col" style="justify-content:space-between;gap:1cqw">
      <div>
        <p class="t-label muted" style="margin:0">Ce qu’on y voit</p>
        <ul class="video-list">
          ${items
            .map(
              ([t, d]) => `
          <li>
            <span class="t-body" style="font-weight:600">${t}</span>
            <span class="t-small muted">${d}</span>
          </li>`,
            )
            .join('')}
        </ul>
      </div>

      <div class="col" style="gap:0.5cqw">
        <a class="video-link" href="${VIDEO_URL}" target="_blank" rel="noopener">
          ${icon('play', 'icon icon-sm')} Ouvrir la vidéo en plein écran
        </a>
        <a class="video-link" href="#/transcript">
          ${icon('file-text', 'icon icon-sm')} Lire la transcription écrite
        </a>
        <a class="video-link" href="#/transcript">
          ${icon('file-text', 'icon icon-sm')} Lire la transcription
        </a>
        <p class="t-small muted" style="margin:0">
          Durée 24 min · écran partagé et voix, enregistré sur le deck complet.
        </p>
      </div>
    </div>
  </div>`
}
