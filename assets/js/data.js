/**
 * Presentation content. The slides and the speaker panel both read this file:
 * editing a speech or a timing never touches a layout.
 */

export const SLIDES = [
  { id: 1, title: 'Introduction', section: 'Intro', hud: 'Intro', seconds: 20 },
  { id: 2, title: 'LeadGuard AI — le problème métier', section: 'Q1 · LeadGuard AI', hud: 'Q1 · Problème', seconds: 30 },
  { id: 3, title: 'LeadGuard AI — architecture du système', section: 'Q1 · LeadGuard AI', hud: 'Q1 · Architecture', seconds: 65 },
  { id: 4, title: 'Un lead dans le workflow complet', section: 'Q1 · LeadGuard AI', hud: 'Q1 · Parcours', seconds: 35 },
  { id: 5, title: 'n8n — trois workflows, trois responsabilités', section: 'Q1 · LeadGuard AI', hud: 'Q1 · Workflows n8n', seconds: 45 },
  { id: 6, title: 'Contrôle humain', section: 'Q1 · LeadGuard AI', hud: 'Q1 · Contrôle humain', seconds: 30 },
  { id: 7, title: 'QuoteFlow AI + Odoo 19', section: 'Q2 · QuoteFlow AI + Odoo', hud: 'Q2 · Cycle', seconds: 22 },
  { id: 8, title: 'QuoteFlow AI — architecture en couches', section: 'Q2 · QuoteFlow AI + Odoo', hud: 'Q2 · Architecture', seconds: 58 },
  { id: 9, title: 'De la demande au contrat actif', section: 'Q2 · QuoteFlow AI + Odoo', hud: 'Q2 · Parcours', seconds: 35 },
  { id: 10, title: 'Visite technique et IA', section: 'Q2 · QuoteFlow AI + Odoo', hud: 'Q2 · Visite + IA', seconds: 30 },
  { id: 11, title: 'Devis, signature, paiement', section: 'Q2 · QuoteFlow AI + Odoo', hud: 'Q2 · Devis → contrat', seconds: 30 },
  { id: 12, title: 'Mail center multi-marque', section: 'Q2 · QuoteFlow AI + Odoo', hud: 'Q2 · Mail center', seconds: 18 },
  { id: 13, title: 'Corriger la cause, pas le symptôme', section: 'Q3 · Problème', hud: 'Q3 · Cause racine', seconds: 50 },
  { id: 14, title: 'Du besoin utilisateur à la production', section: 'Q4 · Ownership', hud: 'Q4 · Bout en bout', seconds: 50 },
  { id: 15, title: 'Devenir opérationnelle sur GoHighLevel', section: 'Q5 · GoHighLevel', hud: 'Q5 · Adaptation', seconds: 50 },
  { id: 16, title: 'Conclusion', section: 'Conclusion', hud: 'Conclusion', seconds: 25 },
]

export const TOTAL_SECONDS = SLIDES.reduce((total, slide) => total + slide.seconds, 0)

/** Second at which each slide should start. */
export const CUE_TIMES = SLIDES.map((_, index) =>
  SLIDES.slice(0, index).reduce((total, slide) => total + slide.seconds, 0),
)

export function formatClock(totalSeconds) {
  const clamped = Math.max(0, Math.round(totalSeconds))
  const minutes = Math.floor(clamped / 60)
  const seconds = clamped % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export function duration(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}

export const NOTES = {
  1: {
    guide: 'Cadrer en 20 secondes. Ne pas raconter le CV.',
    speech:
      "Bonjour Philippe, merci pour votre retour et pour l'opportunité de vous présenter plus concrètement mon travail. Je vais vous montrer deux architectures représentatives de mon travail, puis un exemple de résolution de problème, ma manière de prendre une fonctionnalité de bout en bout, et enfin ma façon de monter rapidement en compétence sur GoHighLevel.",
    key: 'Deux architectures, un incident réel, un parcours complet, une méthode.',
    show: ['Laisser le titre respirer deux secondes', 'Annoncer les cinq sujets d’un trait'],
    avoid: ['Ne pas détailler le parcours professionnel', 'Ne pas s’excuser sur GoHighLevel dès l’introduction'],
    next: '« Je commence par la première architecture : LeadGuard AI. »',
    details: [
      ['Le titre', '« CRM, automatisation, intégration IA : les trois sujets que vous m’avez demandés. »'],
      ['La ligne technique', '« Mon terrain quotidien : Python, APIs, n8n, Odoo 19, GoHighLevel. »'],
      ['L’agenda à droite', '« Cinq parties, dans votre ordre, et je tiens les neuf minutes. »'],
      ['Le bandeau du bas', '« Tout ce que je montre est un PoC personnel, en sandbox, avec des données synthétiques. »'],
    ]
  },
  2: {
    guide: 'Poser le problème métier avant la technique.',
    speech:
      "LeadGuard AI, c'est mon proof of concept personnel autour de l'entrée de leads dans la construction. Un prospect remplit un formulaire ; mon objectif n'est pas de répondre à sa place, mais de qualifier la demande, de repérer ce qui manque, et de recommander la prochaine action commerciale. Trois choses à retenir : qualifier la demande, détecter les informations manquantes, proposer l'action suivante. Tout tourne dans un Developer Sandbox HighLevel, avec des marques fictives et des données synthétiques.",
    key: 'Un PoC personnel, pas une implémentation client.',
    show: ['Le bandeau « Developer Sandbox · données synthétiques »', 'La chaîne Demande → Qualification → Analyse → Action'],
    avoid: ['Ne jamais dire « j’ai déployé ça chez un client »', 'Ne pas parler de DeepSeek ici, ça vient après'],
    next: '« Voici comment c’est construit. »',
    details: [
      ['La chaîne en quatre temps', '« Une demande entre par un formulaire, elle est qualifiée, analysée, puis transformée en action CRM — c’est le parcours que je vais dérouler. »'],
      ['Objectif 1 — qualifier', '« Qualifier sans relire chaque formulaire : service, type de projet, ville, ampleur. »'],
      ['Objectif 2 — détecter le manque', '« Repérer ce qui manque, parce qu’une demande incomplète n’est pas une demande à jeter : c’est une demande à compléter. »'],
      ['Objectif 3 — recommander', '« Et proposer la prochaine action : visite technique, préparation de devis, ou revue humaine. »'],
      ['Le bandeau REAL / sandbox', '« Le cadre est réel — Developer Sandbox, pipeline, workflow — mais la marque et les contacts sont fictifs. »'],
    ]
  },
  3: {
    guide: 'Slide la plus importante : nommer chaque brique, son rôle, sa limite.',
    speech:
      "Cette slide répond à une seule question : qui fait quoi. À gauche, GoHighLevel : il reçoit le formulaire, il crée le contact, il ouvre l'opportunité et il en garde l'historique. C'est la source de vérité, mais il ne qualifie rien. Ensuite n8n : il reçoit le webhook, il normalise les champs du formulaire, il vérifie la structure — au moins un contact, un consentement — il appelle mon service, puis il réécrit le résultat dans le CRM. n8n orchestre et trace, il ne décide pas. Au centre, LeadGuard, mon service Python : il vérifie que l'appel est recevable, il garantit l'idempotence pour qu'un rejeu ne crée pas de doublon, il appelle le modèle, il valide le JSON reçu, il applique les règles et il journalise chaque étape. DeepSeek ne fait qu'une chose : transformer une demande en champs exploitables. Et les règles — c'est le bloc rouge — sont la seule brique qui choisit la route : la confiance, la ville, le service, le consentement. Enfin le retour dans GoHighLevel : les champs IA, les tags, l'étape du pipeline, la note et la tâche. Aucun message ne part au client.",
    key: 'GoHighLevel collecte et conserve. n8n orchestre. LeadGuard analyse et contrôle. Les règles décident.',
    show: [
      'Suivre les quatre colonnes dans l’ordre, une phrase par brique',
      'S’arrêter sur le bloc rouge : c’est la seule décision',
    ],
    avoid: ['Ne pas expliquer le code des règles', 'Ne pas citer les fichiers ni les ports', 'Ne pas décrire plus de trois fois le rôle du LLM'],
    next: '« Voyons ce que ça donne sur un lead de la démo. »',
    details: [
      ['Colonne 1 — GoHighLevel', '« GoHighLevel collecte : il reçoit le formulaire, crée le contact, ouvre l’opportunité et garde l’historique. C’est la source de vérité — mais il ne qualifie rien, il ne note rien. »'],
      ['Colonne 2 — n8n, étapes 1 à 3', '« n8n reçoit le webhook, normalise les champs du formulaire, puis vérifie la structure : au moins un contact joignable et un consentement. »'],
      ['Colonne 2 — n8n, étapes 4 et 5', '« Il appelle ensuite mon service et attend la route, puis il réécrit le résultat dans le CRM. Il orchestre et il trace — il ne décide jamais. »'],
      ['Colonne 3 — FastAPI', '« LeadGuard, mon service Python : il vérifie que l’appel est recevable, il garantit l’idempotence — un rejeu ne crée pas de doublon —, il appelle le modèle, valide le JSON, applique les règles et journalise l’audit. »'],
      ['Colonne 3 — DeepSeek', '« DeepSeek ne fait qu’une chose : transformer un texte libre en champs exploitables. Il ne choisit pas la suite. »'],
      ['Colonne 3 — le bloc rouge', '« Les règles déterministes sont la seule brique qui choisit : confiance au-dessus de 0,80, ville couverte, service reconnu, consentement. Et jamais un prix. »'],
      ['Colonne 4 — le retour', '« Enfin le retour : champs IA, tags, étape du pipeline, note d’analyse et tâche commerciale. Aucun message ne part au client. »'],
    ]
  },
  4: {
    guide: 'Montrer le parcours, pas la théorie.',
    speech:
      "Concrètement, un lead traverse neuf étapes. Le formulaire crée le contact et l'opportunité en étape AI Qualification. Le webhook part vers n8n, qui normalise et valide la demande. LeadGuard analyse puis applique les règles. Sur ce cas : rénovation commerciale à Montréal, confiance 0,96, action recommandée : planifier une visite technique. Côté CRM, l'opportunité passe en Site Visit To Schedule, trois tags sont posés, et une tâche de visite est créée pour l'équipe commerciale.",
    key: 'Une demande entre, une action commerciale datée sort.',
    show: ['Lire le résultat encadré à droite, chiffres compris', 'Nommer les trois tags'],
    avoid: ['Ne pas dérouler les neuf étapes une par une', 'Ne pas traiter 0,96 comme une probabilité scientifique'],
    next: '« Tout n’est pas automatisable : voici où je m’arrête. »',
    details: [
      ['La grille des neuf étapes', '« Neuf étapes : le formulaire crée contact et opportunité en AI Qualification, le webhook part vers n8n, n8n normalise et valide, LeadGuard analyse, les règles décident, puis le CRM est synchronisé. »'],
      ['Service / ville', '« Sur ce cas : rénovation commerciale, 400 m², à Montréal. »'],
      ['Confiance et action', '« Le score atteint 0,96, l’action recommandée est une visite technique. »'],
      ['Le bloc CRM à droite', '« Côté CRM : l’opportunité passe en Site Visit To Schedule, trois tags sont posés, et une tâche est créée pour l’équipe commerciale. »'],
      ['Les règles appliquées', '« Et sous le résultat, les règles qui ont laissé passer ce lead — pour que la décision soit lisible, pas magique. »'],
      ['La ligne d’idempotence', '« Rejouer le même formulaire ne crée ni second contact, ni second devis : c’est la même clé d’événement. »'],
    ]
  },
  5: {
    guide: 'Nommer les trois workflows, leur déclencheur et leur sortie. C’est la preuve d’orchestration.',
    speech:
      "Le troisième point, c’est que n8n chez moi n’est pas un seul flux : ce sont trois workflows qui se relaient. Le premier, Construction Intake, est le chemin d’entrée : il reçoit le webhook du formulaire GoHighLevel, il normalise les champs, il valide la structure — contact, consentement —, il appelle LeadGuard et attend la route, puis il écrit le résultat dans le CRM : champs, tags, étape, note, tâche. Sa sortie, c’est une des quatre branches : qualifié, revue, sécurité ou échec. Le deuxième, Quality Guardian, est le contrôle : toutes les quinze minutes, il lit l’état réel des leads traités et il détecte ce que l’automatisation laisse traîner — un lead bloqué en qualification, une opportunité sans tâche, une visite sans suite, une désynchronisation — puis il regroupe les anomalies et journalise. Il ne parle jamais au client. Le troisième, Operations Handoff, est la sortie : quand une opportunité arrive en Operations Handoff, il appelle une API de gestion de projets, récupère l’identifiant du projet créé et l’écrit dans le CRM avec une note de transfert. Ce troisième est branché sur une API simulée : je le dis clairement, ce n’est pas encore un système client.",
    key: 'Un workflow fait entrer, un surveille, un transfère : une responsabilité par workflow.',
    show: [
      'Les trois cartes et leur déclencheur en haut de chaque carte',
      'Le badge REAL sur W1 et W2, MOCK sur W3',
    ],
    avoid: [
      'Ne pas prétendre que W3 tourne sur une vraie API de gestion de projets',
      'Ne pas décrire les nœuds n8n un par un',
    ],
    next: '« Et quand la confiance n’est pas suffisante ? »',
    details: [
      ['W1 — Construction Intake', '« Le chemin d’entrée : webhook du formulaire, normalisation, validation, appel de LeadGuard, puis écriture dans le CRM. »'],
      ['W1 — déclencheur', '« Il est déclenché par la soumission du formulaire GoHighLevel : c’est le seul point d’entrée du système. »'],
      ['W1 — sortie', '« Sa sortie, c’est une branche : qualifié, revue humaine, sécurité ou échec technique. »'],
      ['W2 — Quality Guardian', '« Le contrôle : toutes les quinze minutes, il lit l’état réel et détecte les blocages, les tâches manquantes, les visites sans suite, les désynchronisations. »'],
      ['W2 — sortie', '« Il produit un rapport d’incidents interne — jamais de message au client. »'],
      ['W3 — Operations Handoff', '« La sortie : à l’étape Operations Handoff, il crée le projet dans l’API de gestion, récupère l’identifiant et l’écrit dans le CRM. »'],
      ['W3 — statut', '« Cette API est simulée : c’est le seul maillon de la chaîne qui reste une maquette, et je l’assume. »'],
    ],
  },
  6: {
    guide: 'Le garde-fou. Court et net.',
    speech:
      "Ce qui m'intéresse, c'est de garder le contrôle humain. Deux routes. À gauche, une demande complète, une confiance haute : l'automatisation va au bout. À droite, une demande floue, où le service ou le budget manquent : la route est la revue humaine, avec la raison écrite noir sur blanc. L'IA accélère la décision, elle ne supprime pas le contrôle.",
    key: 'L’IA accélère la décision sans retirer le contrôle humain.',
    show: ['Les deux cartes côte à côte', 'La ligne « raison » côté revue humaine'],
    avoid: ['Ne pas ouvrir le débat sur les hallucinations', 'Ne pas promettre zéro erreur'],
    next: '« Deuxième architecture : QuoteFlow AI autour d’Odoo 19. »',
    details: [
      ['Carte de gauche — route automatique', '« À gauche, une demande complète : service reconnu, ville couverte, consentement, aucun signal de sécurité — l’automatisation va au bout. »'],
      ['Le score 0,96', '« À 0,96, la confiance est au-dessus du seuil, donc pas de revue. »'],
      ['Carte de droite — revue humaine', '« À droite, une demande floue : « je voudrais faire des travaux » — le service, le budget et l’adresse manquent ; le score tombe et la route est la revue humaine. »'],
      ['Les deux conséquences', '« Même pipeline, deux issues : Site Visit To Schedule d’un côté, Missing Information avec une tâche interne de l’autre. »'],
      ['La bande rouge', '« La phrase à retenir : l’IA accélère la décision, elle ne supprime pas le contrôle. »'],
    ]
  },
  7: {
    guide: 'Transition vers Odoo : le parcours avant l’outil.',
    speech:
      "Deuxième architecture : QuoteFlow AI, construit autour d'Odoo 19. Ce n'est pas un générateur de devis isolé, c'est un parcours commercial complet : lead, visite technique, devis, signature, paiement, contrat, puis opérations. Et Odoo reste la source de vérité métier.",
    key: 'Un parcours commercial complet, dont Odoo est le cœur.',
    show: ['La chaîne de sept étapes en une ligne'],
    avoid: ['Ne pas détailler Odoo ici, la slide suivante le fait'],
    next: '« Voici les couches du système. »',
    details: [
      ['Le titre', '« Deuxième architecture : QuoteFlow AI, autour d’Odoo 19. »'],
      ['La chaîne de sept étapes', '« Mais ce n’est pas un générateur de devis : c’est le parcours complet, du lead aux opérations — visite, devis, signature, paiement, contrat. »'],
      ['La phrase de pied', '« Odoo reste la source de vérité métier : produits, prix, taxes, contrat. »'],
    ]
  },
  8: {
    guide: 'Cinq couches : nommer le rôle et la limite de chacune, de haut en bas.',
    speech:
      "Même logique pour QuoteFlow, en cinq couches. En haut, les canaux : l'e-mail, le formulaire, le téléphone, le CRM — ils collectent la demande, ils ne la qualifient pas. n8n orchestre : il reçoit, il route vers le bon traitement, il réessaie en cas d'échec et il journalise ; il ne décide pas des prix. QuoteFlow AI, en Python et FastAPI, structure la demande avec DeepSeek — et un fallback GLM si le premier fournisseur ne répond pas — puis applique des règles déterministes. Son rôle est de transformer un texte libre en données propres, jamais de fixer un prix. En dessous, le bloc rouge : Odoo 19. C'est la source de vérité métier — le client, la visite technique, le devis avec le catalogue et les taxes, le contrat, le mail center. Odoo ne qualifie pas la demande, mais rien d'autre que lui ne calcule un prix. Enfin les services externes : SMTP et IMAP pour les courriels, la signature électronique, Stripe par marque — ils exécutent, ils ne stockent pas le dossier.",
    key: 'n8n orchestre, QuoteFlow structure, Odoo reste la source de vérité.',
    show: [
      'Descendre les couches de haut en bas, en nommant le rôle',
      'Lire à droite les limites : ce que la couche ne fait pas',
    ],
    avoid: ['Ne pas prétendre que tout est en production', 'Ne pas entrer dans la configuration Stripe', 'Ne pas lister les modules Odoo sans lien avec le parcours'],
    next: '« Le parcours, étape par étape. »',
    details: [
      ['Couche 1 — canaux', '« En haut, les canaux : e-mail, formulaire, téléphone, CRM. Ils collectent la demande, ils ne la qualifient pas. »'],
      ['Couche 2 — n8n', '« n8n orchestre : il reçoit, il route vers le bon traitement, il réessaie en cas d’échec et il journalise. Il ne décide pas des prix. »'],
      ['Couche 3 — QuoteFlow AI', '« QuoteFlow AI structure : DeepSeek pour l’extraction, un fallback GLM si le fournisseur ne répond pas, puis des règles déterministes. Son rôle est de produire des données propres — jamais un prix. »'],
      ['Couche 4 — Odoo, le bloc rouge', '« Puis Odoo 19, la source de vérité : le client, la visite technique, le devis avec catalogue et taxes, le contrat, le mail center. Odoo ne qualifie pas la demande, mais rien d’autre ne calcule un prix. »'],
      ['Couche 5 — services externes', '« Enfin l’externe : SMTP et IMAP pour les courriels, la signature électronique, Stripe par marque. Ils exécutent — ils ne stockent pas le dossier. »'],
      ['La colonne de droite', '« Chaque couche a donc une limite écrite : c’est ce qui évite les zones grises en production. »'],
    ]
  },
  9: {
    guide: 'Timeline en cinq phases.',
    speech:
      "Le même parcours, en onze étapes, regroupées en cinq phases : acquisition, technique, commercial, contrat, opérations. Le point important n'est pas le nombre d'étapes, c'est la séparation des responsabilités : l'IA structure l'information, l'humain valide, et Odoo applique les règles commerciales.",
    key: 'L’IA structure, l’humain valide, Odoo applique les règles.',
    show: ['Les cinq groupes', 'Les deux points de validation humaine (03 et 07)'],
    avoid: ['Ne pas lire les onze libellés', 'Ne pas décrire chaque écran'],
    next: '« Le moment le plus intéressant : la visite technique. »',
    details: [
      ['Les cinq phases', '« Onze étapes regroupées en cinq phases : acquisition, technique, commercial, contrat, opérations. »'],
      ['Les étapes 01 à 05', '« Acquisition puis technique : la demande, la qualification, la visite, le rapport du technicien, l’extraction IA. »'],
      ['Les étapes 06 et 07', '« Puis le devis brouillon et sa validation humaine — le moment où un humain engage le prix. »'],
      ['Les étapes 08 à 11', '« Enfin la signature, le paiement, le contrat actif et les opérations. »'],
      ['Le pied', '« Deux validations humaines seulement : la visite et le devis. Le reste est orchestré. »'],
    ]
  },
  10: {
    guide: 'L’expertise terrain devient de la donnée.',
    speech:
      "La visite technique, c'est le moment où l'expertise terrain devient de la donnée. Le technicien dicte, prend des notes et des photos ; la transcription et QuoteFlow AI en sortent des valeurs structurées : surface, nombre de zones, fréquence, accès. Ces valeurs alimentent directement le devis. Mais l'IA ne fixe jamais les prix : les produits, les taxes et les règles commerciales restent dans Odoo.",
    key: 'L’IA structure l’information technique. Odoo garde les prix.',
    show: ['Le flux vertical à gauche', 'Les cinq valeurs extraites à droite'],
    avoid: ['Ne pas promettre une extraction parfaite', 'Ne pas parler de modèle ni de prompt'],
    next: '« Et ensuite : devis, signature, paiement. »',
    details: [
      ['Le flux de gauche', '« Le technicien est sur site : il dicte, prend des notes et des photos ; la transcription passe dans QuoteFlow AI. »'],
      ['Le bloc rouge', '« La sortie, ce sont des données structurées, direction Odoo. »'],
      ['Les cinq valeurs', '« Surface, zones, visites initiales, fréquence, accès — ce sont des valeurs que le devis peut utiliser directement. »'],
      ['L’encadré du bas', '« Mais l’IA ne fixe jamais un prix : les produits, les taxes et les règles commerciales restent dans Odoo. »'],
    ]
  },
  11: {
    guide: 'Trois blocs reliés, puis le principe multi-marque.',
    speech:
      "Trois blocs reliés. Le devis est construit dans Odoo, avec le catalogue et la liste de prix, puis validé par un humain. La signature se fait par lien sécurisé. Le paiement passe par Stripe, avec un webhook de confirmation. On obtient un contrat actif, puis les interventions récurrentes. Et chaque marque garde son identité : le bon e-mail, les bons documents, la bonne configuration Stripe.",
    key: 'Une identité commerciale par marque, un seul système.',
    show: ['Les trois cartes et la flèche vers « contrat actif »', 'L’exemple marque → e-mail → documents → Stripe'],
    avoid: ['Ne pas entrer dans la configuration Stripe', 'Ne pas détailler le contrat juridique'],
    next: '« Un dernier point d’intégration : le mail center. »',
    details: [
      ['Carte 1 — devis', '« Le devis est construit dans Odoo : catalogue, liste de prix, taxes, puis validation humaine. »'],
      ['Carte 2 — signature', '« La signature passe par un lien sécurisé, et le contrat signé est archivé. »'],
      ['Carte 3 — paiement', '« Le paiement passe par Stripe, avec un webhook qui confirme l’encaissement. »'],
      ['La bande contrat actif', '« Résultat : un contrat actif, puis la planification des interventions et le suivi. »'],
      ['La ligne multi-marque', '« Et chaque marque garde son identité : le bon e-mail, les bons documents, la bonne configuration Stripe. »'],
    ]
  },
  12: {
    guide: 'Vingt secondes maximum. C’est un bonus, pas un sujet.',
    speech:
      "Le mail center centralise la communication commerciale : OVH, Titan ou Hostinger, tous en SMTP et IMAP, rattachés à Odoo. On garde ainsi un historique commercial unique par client, même quand plusieurs marques et plusieurs fournisseurs d'e-mail sont impliqués.",
    key: 'Un historique commercial unique, plusieurs fournisseurs.',
    show: ['Les trois fournisseurs qui convergent vers Odoo'],
    avoid: ['Ne pas raconter l’historique du projet', 'Ne pas dépasser trente secondes'],
    next: '« Passons à la résolution de problème. »',
    details: [
      ['Les trois fournisseurs', '« OVH, Titan, Hostinger : trois fournisseurs, trois configurations différentes. »'],
      ['Le protocole commun', '« Tous passent par SMTP et IMAP, et remontent dans le mail center d’Odoo. »'],
      ['La carte Odoo', '« On y retrouve les entrants, les envoyés, les fils, les pièces jointes, les erreurs de synchro — et le rattachement au client, au lead, au devis, au contrat. »'],
      ['La phrase de pied', '« Un historique commercial unique, même avec plusieurs fournisseurs et plusieurs marques. »'],
    ]
  },
  13: {
    guide: 'Symptôme → investigation → cause racine → correctif. 50 secondes.',
    speech:
      "Pour la résolution de problème, je peux prendre un exemple sur FreeProxy, une plateforme de proxies mobiles. Après certains rescans, l'application indiquait qu'un proxy était actif alors qu'il devenait inaccessible. J'ai comparé l'état applicatif avec l'état réel du serveur : IMEI, namespace Linux, IP, connectivité, processus proxy et forwarding. J'ai trouvé qu'après un changement de namespace, certaines règles pointaient encore vers l'ancienne IP. Au lieu de simplement patcher le symptôme, j'ai mis en place une logique de reconciliation avec health checks, idempotence et tests de reprise. Ma méthode est donc de trouver la cause racine puis de corriger le mécanisme, pas uniquement l'erreur visible.",
    key: 'Corriger le mécanisme, pas l’erreur visible.',
    show: ['Les quatre blocs dans l’ordre', 'La ligne « état attendu ≠ état réel → réconciliation »'],
    avoid: ['Ne pas expliquer iptables ligne par ligne', 'Ne pas minimiser l’incident'],
    next: '« Et la manière dont je prends une fonctionnalité de bout en bout. »',
    details: [
      ['Symptôme', '« Le symptôme : l’application affichait un proxy actif, alors qu’il était injoignable après un rescan du modem. »'],
      ['Investigation', '« J’ai comparé trois états : la base, le namespace Linux, et le forwarding réseau. »'],
      ['Cause racine', '« La cause : après un changement de namespace, certaines règles pointaient encore l’ancienne IP. »'],
      ['Correctif', '« Le correctif : réconciliation d’état, health checks, réparation idempotente et verrou de concurrence. »'],
      ['La ligne réconciliation', '« C’est ça, ma méthode : état attendu contre état réel, puis réconcilier — pas patcher le symptôme. »'],
    ]
  },
  14: {
    guide: 'Ownership : du besoin utilisateur à la production.',
    speech:
      "Pour le full ownership, je peux prendre SuperChantier. J'ai travaillé sur un parcours où un technicien crée une observation directement sur un plan, ajoute des photos, et peut continuer même sans connexion. J'ai pris en charge le besoin métier, le modèle Django, les APIs, l'application Flutter, le stockage offline et la synchronisation. J'ai également traité les doublons, les uploads partiels, et l'intégration automatique des observations dans les rapports PDF. Pour moi, une fonctionnalité n'est pas terminée quand le code fonctionne sur mon poste, mais quand le parcours utilisateur complet est fiable et maintenable.",
    key: 'Fini quand le parcours complet est fiable, pas quand le code compile.',
    show: ['La chaîne besoin → modèle → API → app → sync → PDF', 'La liste des cas limites traités'],
    avoid: ['Ne pas détailler Flutter', 'Ne pas oublier les cas limites : c’est le cœur du message'],
    next: '« Dernière question : GoHighLevel. »',
    details: [
      ['La chaîne complète', '« Besoin utilisateur, modèle de données, API Django, application Flutter, stockage offline, synchronisation, rapports PDF, production : j’ai tenu toute la chaîne. »'],
      ['L’exemple de fonctionnalité', '« Exemple : une observation posée directement sur un plan, avec photos, possible même sans réseau. »'],
      ['Les cas limites', '« Les doublons, les uploads partiels, les conflits de synchronisation, les photos prises hors ligne : c’est là que se joue la fiabilité. »'],
      ['La phrase de pied', '« Pour moi une fonctionnalité est finie quand le parcours complet tient — pas quand le code compile. »'],
    ]
  },
  15: {
    guide: 'Transparence d’abord, puis la preuve, puis la méthode.',
    speech:
      "Concernant GoHighLevel, je veux être transparente : je n'ai pas encore deux années d'expérience professionnelle sur la plateforme. Mais je ne suis plus dans une phase théorique. J'ai déjà commencé une implémentation réelle dans un Developer Sandbox avec pipeline, custom fields, formulaire, workflow, webhook, n8n et intégration Python. Comme je maîtrise déjà CRM, APIs, webhooks, automatisation, n8n et Python, les concepts sont familiers et je progresse rapidement sur les spécificités HighLevel. Ma méthode est de comprendre une fonctionnalité, la configurer, puis tester non seulement le happy path, mais aussi les erreurs, les doublons, les données manquantes et les permissions. Pour un client, je commence toujours par cartographier l'existant avant de modifier quoi que ce soit, puis j'avance de manière incrémentale et testée.",
    key: 'Transparence sur l’expérience, preuve sur les fondamentaux, méthode claire.',
    show: ['Colonne gauche : ce qui est déjà construit', 'Colonne droite : la méthode'],
    avoid: [
      'Ne pas prétendre connaître toutes les fonctions avancées',
      'Ne pas s’excuser plus d’une fois',
      'Ne pas promettre une maîtrise totale en deux semaines',
    ],
    next: '« Pour résumer. »',
    details: [
      ['Colonne gauche — déjà construit', '« Ce qui est déjà en place : pipeline, custom fields, tags, formulaire, workflow, webhook, n8n, FastAPI, synchronisation IA — je l’ai construit ces dernières semaines. »'],
      ['Colonne droite — méthode', '« Ma méthode : comprendre, configurer, tester, casser volontairement, valider les cas limites, documenter, répéter. »'],
      ['La bande méthode client', '« Chez un client je commence par cartographier l’existant, puis je modifie par petits pas, je valide, je livre. »'],
      ['Le pied — transparence', '« Je n’ai pas deux ans sur la plateforme, je le dis : mais le socle CRM, API, webhooks, n8n, Python, je l’ai déjà. »'],
    ]
  },
  16: {
    guide: 'Quatre cartes, une phrase, merci. 25 secondes.',
    speech:
      "Pour résumer, mes points forts sont la compréhension des processus métier, les intégrations API, n8n, Python et l'IA, avec une attention particulière à la fiabilité et aux tests. Je suis consciente que je dois encore approfondir certaines fonctions avancées de GoHighLevel, mais cette implémentation montre que je peux devenir rapidement opérationnelle et livrer des automatisations propres et fiables. Merci pour votre temps.",
    key: 'La technologie doit simplifier les opérations, pas ajouter de la complexité.',
    show: ['Laisser la phrase de clôture affichée pendant le remerciement'],
    avoid: ['Ne pas ajouter de sujet nouveau', 'Ne pas parler plus de trente secondes'],
    next: 'Fin — laisser la slide ouverte pour les questions.',
    details: [
      ['Les quatre cartes', '« Quatre points : compréhension du métier, intégration, IA sous contrôle, qualité d’ingénierie. »'],
      ['La phrase de clôture', '« La technologie doit simplifier les opérations, pas ajouter de la complexité. »'],
      ['La dernière ligne', '« Prête à transformer des processus CRM en systèmes opérationnels fiables. »'],
    ]
  },
}
