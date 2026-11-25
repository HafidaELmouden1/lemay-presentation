// Transcription de la vidéo « version commentée », chapitrée et relue.
// Texte établi à partir de l'enregistrement, puis corrigé à la main :
// termes techniques, ponctuation, coupes de paragraphes. Aucune phrase ajoutée.

export const TRANSCRIPT = {
  meta: {
    title: "La présentation, dite à voix haute",
    subtitle: "Transcription intégrale de la vidéo · entretien Lemay Consulting / Optimo CRM",
    speaker: "Hafida El-Mouden",
    recordedAt: "24 novembre 2026",
    duration: "24 min 19 s",
    language: "français",
    method: "Transcription du son de l’enregistrement, relue et corrigée phrase par phrase : orthographe des termes techniques, ponctuation, coupes de paragraphes. Les hésitations et les reprises ont été retirées ; aucune phrase n’a été ajoutée au propos.",
    page: "https://hafidaelmouden1.github.io/lemay-presentation/#/s/18",
    video: "https://files.catbox.moe/lkt9e4.mp4",
    about: "Document établi pour l’analyse du dossier. Les marques et les données citées sont fictives : le compte GoHighLevel utilisé est un Developer Sandbox, alimenté par des formulaires de démonstration.",
  },
  chapters: [
    {
      n: 1,
      title: "Ouverture",
      start: "00:09",
      end: "00:39",
      paragraphs: [
        { ts: "00:09", text: "Bonjour Monsieur Philippe, j’espère que vous allez bien. Merci pour votre retour et pour l’opportunité de vous présenter plus concrètement mon travail. Je vais donc montrer deux architectures représentatives de mon travail, puis un exemple de résolution de problème, ma manière de prendre une fonctionnalité de bout en bout, et enfin ma façon de monter rapidement en compétence sur GoHighLevel." },
      ],
    },
    {
      n: 2,
      title: "LeadGuard AI : de la demande à l’opportunité",
      start: "00:39",
      end: "01:29",
      paragraphs: [
        { ts: "00:39", text: "Alors, je commence par mon application personnelle, LeadGuard AI : de la demande à l’opportunité exploitable. C’est un proof of concept personnel autour de l’entrée du lead — un prospect qui remplit un formulaire. Mon objectif n’est pas de répondre à sa place, mais de qualifier la demande, de repérer ce qu’il manque et de recommander la prochaine action. Trois choses à retenir : qualifier la demande, détecter ce qui manque, recommander l’action suivante." },
        { ts: "01:05", text: "Par exemple, les demandes sont parfois incomplètes : il manque des informations sur l’intervention, sur le chantier, etc. Soit il faut aller visiter, soit il faut demander la pièce manquante — et c’est là qu’intervient la recommandation." },
      ],
    },
    {
      n: 3,
      title: "L’architecture et le parcours complet",
      start: "01:29",
      end: "03:59",
      paragraphs: [
        { ts: "01:29", text: "Je passe rapidement à l’architecture et au flux complet de LeadGuard AI. Ce qui se passe : le prospect remplit son formulaire, on le reçoit sur GoHighLevel, on crée un contact et l’opportunité." },
        { ts: "02:10", text: "Ensuite n8n, l’orchestrateur : il reçoit les webhooks, il les normalise, il valide, il appelle l’étape suivante et il écrit dans le CRM. Il trace, il journalise — c’est un routeur, il ne décide pas. Puis on passe à notre application, l’API LeadGuard : elle analyse s’il y a des doublons, elle contrôle les informations, elle appelle le modèle, elle valide aussi le JSON, elle applique les règles journalisées — les règles, pardon, déjà décidées — et elle journalise chaque étape." },
        { ts: "02:54", text: "Et pour les specs : après l’analyse, on a l’opportunité dans GoHighLevel, mais avant, on a les specs. Les specs, c’est l’élément qui transforme un besoin en chantier exploitable, et il est déjà décidé et noté dans notre base." },
        { ts: "03:10", text: "Je présente maintenant le cheminement d’un flux complet, en neuf étapes : le formulaire crée le contact et l’opportunité en étape AI Qualification ; le webhook part vers n8n, qui normalise et valide la demande ; LeadGuard analyse, puis applique les règles — sur des rénovations commerciales à Montréal, par exemple, dans les tests ; puis la synchronisation côté CRM, où l’opportunité passe en Site Visit To Schedule pour planifier l’intervention. Et avant l’action commerciale, avant de valider le devis, il faut toujours le contrôle d’un agent commercial." },
      ],
    },
    {
      n: 4,
      title: "Les trois workflows n8n",
      start: "03:59",
      end: "06:16",
      paragraphs: [
        { ts: "03:59", text: "Trois workflows, trois responsabilités. Ce sont les workflows n8n, et ils sont déjà déployés. Attendez, je dois vous le montrer rapidement." },
        { ts: "04:53", text: "Voilà, on a deux workflows : un gardien de qualité et un pour la construction. Je vous explique. Le premier, le chemin d’entrée : il transforme une soumission en décision. On reçoit, on normalise les champs du formulaire, puis on valide le contact et le consentement, on structure, on appelle LeadGuard, on attend la route, et on écrit les champs, les tags, l’étape, etc." },
        { ts: "05:34", text: "Le second, l’automatisation de contrôle : il détecte les traitements bloqués en qualification, les tâches de visite qui manquent, les problèmes de synchronisation, et il regroupe les anomalies pour les journaliser." },
        { ts: "05:58", text: "Et le troisième, le webhook des opérations, le hand-off : il transfère les dossiers gagnés vers les opérations — l’opportunité transférée appelle l’API de gestion de projet, récupère l’identifiant du projet créé, l’écrit dans GoHighLevel et laisse une note de transfert." },
      ],
    },
    {
      n: 5,
      title: "Le contrôle humain",
      start: "06:16",
      end: "07:15",
      paragraphs: [
        { ts: "06:16", text: "Passons au contrôle humain : quand la confiance est haute, on laisse filer ; quand ça compte, on contrôle. Un exemple : une demande complète et qualifiée part d’un côté, une demande incomplète part de l’autre — par exemple un service ou un budget manquant." },
        { ts: "06:57", text: "Le rôle est de revenir vers l’humain avec la raison, et de créer une trace écrite. L’IA accélère la décision, elle ne la prend pas, elle ne prend pas le contrôle." },
      ],
    },
    {
      n: 6,
      title: "QuoteFlow AI : le cycle commercial",
      start: "07:15",
      end: "08:39",
      paragraphs: [
        { ts: "07:15", text: "Je passe à mon deuxième projet : QuoteFlow AI, avec la dernière version d’Odoo pour la gestion de l’ERP. Alors on a un lead, on le considère comme une opportunité, puis on planifie une visite technique. De la visite technique, on prépare un devis. Le devis final doit être signé avant d’engager les interventions réelles et les travaux sur le chantier. On le signe par un lien de signature électronique, puis on passe au paiement, aussi par un lien Stripe." },
        { ts: "08:26", text: "Ensuite on a un contrat : à la fin, on reçoit le contrat après le paiement, signé avec le client, et on passe aux opérations. Je vous l’explique plus précisément." },
      ],
    },
    {
      n: 7,
      title: "L’architecture QuoteFlow : canaux, orchestration, Odoo",
      start: "08:39",
      end: "11:41",
      paragraphs: [
        { ts: "08:39", text: "Les leads, on les reçoit soit par mail, soit par formulaire, soit par téléphone. L’important, ce sont les formulaires du site web et les appels clients qu’on reçoit. Chacun a son workflow, et on a une autre application : QuoteFlow." },
        { ts: "09:13", text: "En général, les formulaires arrivent par le site. À chaque formulaire envoyé, on les collecte et on les envoie à notre serveur. On a pas mal de sites — plus de deux cents sites. Donc à chaque fois, on collecte le formulaire et on l’envoie par le webhook." },
        { ts: "09:45", text: "Pour les appels, on les reçoit dans un serveur qui traite et gère les appels : c’est FreePBX, connecté par des webhooks. Après, on arrive à un orchestrateur qui reçoit tous les leads et qui voit à quel webhook envoyer chaque lead — formulaire, téléphone — pour savoir par quel chemin il arrive. C’est n8n." },
        { ts: "10:37", text: "n8n, comme je l’ai dit, est un orchestrateur : il reçoit, il trouve le bon traitement, il gère les cas d’échec et il journalise. Il ne décide pas. Ensuite, notre projet FastAPI — QuoteFlow — structure l’extraction et a un fallback GLM : quel que soit le fournisseur qui ne répond pas, on a des règles déterministes." },
        { ts: "11:13", text: "Son rôle est de produire des données propres et de ne jamais traiter les devis directement. Après, on arrive dans Odoo." },
        { ts: "11:26", text: "On prépare les devis avec l’IA, dans Odoo, avec les règles déjà conservées et les précédents conservés dans la base." },
      ],
    },
    {
      n: 8,
      title: "Du devis signé au chantier",
      start: "11:41",
      end: "14:34",
      paragraphs: [
        { ts: "11:41", text: "Mais il y a toujours un contrôle humain. Avant de générer le devis, l’agent le vérifie, le contrôle, puis le confirme. Comment on crée le devis ? Depuis ce que le CRM reçoit : soit un formulaire, soit un appel téléphonique, soit un email. Il analyse le compte, le formulaire ou l’audio de l’appel, il extrait les informations commerciales, puis il les intègre avec les règles et la base de prix qu’on a." },
        { ts: "12:21", text: "Il génère le devis, puis il y a le contrôle, puis on envoie le devis par mail — par la boîte mail du site, parce que chaque site a sa propre boîte mail. On a plusieurs sites, chaque site est considéré comme une marque. Donc chaque marque a ses informations : sa boîte mail, son lien de signature électronique, son lien de paiement Stripe, tout est configuré." },
        { ts: "12:56", text: "On envoie le devis au client, il le signe, on reçoit le devis signé, on l’envoie avec le devis final signé et un lien de paiement. S’il a payé — le paiement Stripe, comme je l’ai dit — on part pour planifier les interventions réelles sur le chantier. Avant, tout est généré : tout le travail est global, dans Odoo." },
        { ts: "13:37", text: "Et on ne perd rien. Tous les commerciaux travaillent dans Odoo ; on ne perd rien parce qu’on a plusieurs sites, donc plusieurs groupes commerciaux et plusieurs marques, mais dans Odoo on peut gérer tout ça de manière globale et collaborative." },
      ],
    },
    {
      n: 9,
      title: "Visite technique et centre de messagerie",
      start: "14:34",
      end: "17:05",
      paragraphs: [
        { ts: "14:34", text: "Un schéma rapide : la demande, une qualification avec n8n, puis la visite technique — parfois on la fait pour voir les informations du chantier avant de préparer le devis final ou le contrat. On prend la visite technique, le rapport du technicien, soit des notes papier, soit un audio. On le transmet à notre application QuoteFlow, on extrait les données commerciales, puis on passe dans Odoo pour préparer le devis avec les informations liées à la marque précisée. Ensuite on l’envoie au client pour signature, on envoie aussi le lien de paiement, puis on a le contrat final, et on passe aux opérations pour planifier les interventions sur le chantier." },
        { ts: "15:20", text: "J’ai déjà expliqué comment les visites techniques et les informations du technicien sont transcrites dans QuoteFlow, pour avoir les informations commerciales et les détails réels du chantier, afin de construire le devis final réel ou le contrat final. Je passe du devis validé au contrat actif : le devis, la signature électronique avec un lien propre à chaque marque, puis le paiement par Stripe, avec un lien aussi propre à chaque marque — parce qu’on ne présente pas les sites comme une seule société : la société a plusieurs domaines de travail, et il ne faut pas que le client voie que c’est la même société." },
        { ts: "16:20", text: "Je passe rapidement, je n’ai pas beaucoup de temps. La partie des emails : comme je l’ai dit, on a plusieurs sites, chaque site a sa boîte mail. Quelle que soit la boîte mail, on la gère dans Odoo pour centraliser, et on a tous les éléments nécessaires dans Odoo, pour l’envoi des emails aussi. Quand un client envoie quelque chose par email, on le reçoit et on le traite — que ce soit une opportunité ou une demande — toujours avec l’IA." },
      ],
    },
    {
      n: 10,
      title: "Résolution de problème : FreeProxy",
      start: "17:05",
      end: "18:54",
      paragraphs: [
        { ts: "17:05", text: "Je passe à la troisième question : la résolution de problèmes techniques. Je prends l’exemple de FreeProxy, mon application de gestion et de génération de proxies mobiles." },
        { ts: "17:56", text: "Après certains scans, l’application indiquait qu’un proxy était actif, alors qu’il ne l’était pas — il était inaccessible. Je comparais l’état applicatif à l’état réel du serveur." },
        { ts: "18:24", text: "Les namespaces, les IP, la connectivité et le processus proxy. J’ai trouvé qu’après un changement de namespace, certaines règles pointaient encore vers l’ancienne IP. Au lieu de patcher le symptôme, j’ai mis en place une logique de réconciliation avec des health checks et des tests de dépendances. Même méthode : trouver la cause racine, puis corriger le mécanisme, pas seulement l’erreur visible." },
      ],
    },
    {
      n: 11,
      title: "Full ownership : SuperChantier",
      start: "18:54",
      end: "20:11",
      paragraphs: [
        { ts: "18:54", text: "Pour l’ownership, je prends un exemple de mes projets : SuperChantier. J’ai travaillé sur un parcours où un technicien crée une observation directement sur un plan, avec des photos, et peut continuer même sans connexion. J’ai pris en charge les besoins métier, les modèles Django, l’application, le stockage offline et la synchronisation." },
        { ts: "19:40", text: "J’ai également traité une application pour le stockage offline et la synchronisation vers l’application web. Pour moi, une fonctionnalité n’est pas terminée quand le code compile — c’est mon poste, pardon — mais quand le parcours utilisateur complet est fiable et maintenable." },
      ],
    },
    {
      n: 12,
      title: "Devenir opérationnelle sur GoHighLevel",
      start: "20:11",
      end: "22:53",
      paragraphs: [
        { ts: "20:11", text: "Je passe à la dernière question : comment je deviens rapidement opérationnelle sur GoHighLevel ? Je comprends que je n’ai pas une longue expérience de cette plateforme en particulier, mais j’ai déjà une expérience solide des CRM. J’ai commencé une implémentation réelle dans un Developer Sandbox : pipeline, custom fields, formulaire, workflow, n8n et intégration Python." },
        { ts: "20:50", text: "J’ai déjà dit que je maîtrise les CRM — c’est ma base — et que la configuration ne s’improvise pas. Donc pour un client, je commence toujours par l’existant : je vérifie ce qui existe avant de modifier, quel que soit le problème, puis j’avance de manière incrémentale et testable. À chaque étape, on teste ce qu’on a déjà fait. Je veux aussi vous montrer rapidement l’application — j’ai oublié de le faire dans la première partie." },
        { ts: "21:46", text: "Ce qui est intégré à cette application : GoHighLevel est déjà connecté — j’ai montré le switch —, n8n aussi, la base de données est présente, DeepSeek aussi : je n’ai pas mis ma clé en production, parce que je ne veux pas faire quelque chose de dangereux, mais je l’ai déjà testé en local. Et GLM est un second fournisseur, juste en secours, si DeepSeek ne répond pas. On peut faire une nouvelle demande depuis cette page — je l’ai testé — elle arrive tout de suite dans l’interface, on voit la demande, une nouvelle opportunité est créée." },
        { ts: "22:53", text: "Pour les webhooks aussi, ils sont déjà en production. Tout ça pour montrer que je peux interagir rapidement avec GoHighLevel. Pour résumer, mes points forts sont la compréhension des processus métier, l’intégration Python et n8n, l’automatisation, l’IA, quels que soient les langages, avec une attention particulière à la fiabilité et aux tests." },
      ],
    },
    {
      n: 13,
      title: "Conclusion",
      start: "23:37",
      end: "24:19",
      paragraphs: [
        { ts: "23:37", text: "La compréhension des CRM — j’ai une expérience solide — et je suis consciente que je dois encore approfondir certaines fonctionnalités avancées de GoHighLevel. Mais cette implémentation montre que je peux devenir rapidement opérationnelle, avec des automatisations propres et fiables. Merci pour votre temps et pour votre attention ; vous retrouvez tout cela dans les présentations et dans les mails." },
      ],
    },
  ],
}
