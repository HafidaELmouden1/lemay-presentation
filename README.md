# Présentation d'entretien — CRM · Automation · AI Integration

Présentation web pour l'entretien Lemay Consulting / Optimo CRM.
Elle couvre les cinq sujets demandés (architecture GoHighLevel + n8n + IA, QuoteFlow AI + Odoo 19,
résolution de problème, full ownership, adaptation à GoHighLevel) en **15 slides / 9 min 05**.

Trois modes, une seule source de contenu :

| Mode | URL | Pour qui |
| --- | --- | --- |
| Présentation | `/#/s/1` … `/#/s/15` | le recruteur, en partage d'écran |
| Orateur | `/#/speaker/1` … `/#/speaker/15` | vous : discours complet, phrase clé, à montrer, à éviter, transition |
| Répétition | `/#/rehearse/1` | vous : chronomètre total + par slide, repères et alertes |
| Export PDF | `/#/print` | impression papier / PDF de secours |

## Démarrer

```bash
npm run dev          # http://127.0.0.1:5174
```

Aucune installation : le deck est du HTML/CSS/ES modules, servi par un script Node de 40 lignes
(`scripts/serve.mjs`). `npm install` n'est pas nécessaire — il n'y a **zéro dépendance**.

## Construire et déployer

```bash
npm run build        # copie index.html + assets/ dans dist/, avec un tampon de build
npm run preview      # sert dist/ sur http://127.0.0.1:4173
```

Docker (nginx, image finale sans Node) :

```bash
docker build -t lemay-deck .
docker run --rm -p 8080:80 lemay-deck      # http://localhost:8080
```

Vercel / Netlify / GitHub Pages : `dist/` est purement statique. `vercel.json` est fourni
(`outputDirectory: dist`, réécriture SPA pour que `/speaker` fonctionne).
Voir `DEPLOYMENT.md` pour les détails, y compris un sous-chemin (`/presentation`).

## Commandes clavier

| Touche | Effet |
| --- | --- |
| `→` · `Espace` · `Page ↓` | slide suivante |
| `←` · `Retour arrière` · `Page ↑` | slide précédente |
| `Début` / `Fin` | première / dernière slide |
| `F` | plein écran |
| `S` | mode orateur (même fenêtre) |
| `R` | mode répétition (chronomètre remis à zéro) |
| `P` | vue impression → PDF |
| `?` | rappel des raccourcis |
| `Échap` | quitter un mode |

Clic droit de la souris : moitié droite = suivant, moitié gauche = précédent. Balayage tactile
sur tablette.

## Deux écrans

1. `S` pour le mode orateur sur l'écran principal, puis **glissez la fenêtre** sur le second écran.
2. Ou ouvrez `/#/speaker` dans une seconde fenêtre : la navigation reste synchronisée entre les
   deux (BroadcastChannel), l'URL suit la slide courante.

Le mode orateur ne montre que des notes : rien de la présentation n'y est dupliqué à l'écran partagé.

## Éditer le contenu

Tout le texte vit dans `assets/js/data.js` :

- `SLIDES` — section, libellé du HUD et **durée cible en secondes** de chaque slide ;
  `TOTAL_SECONDS` et les repères de temps (`CUE_TIMES`) sont recalculés automatiquement.
- `NOTES` — par slide : `guide`, `speech` (le discours exact), `key` (phrase clé), `show`
  (ce qu'il faut montrer), `avoid` (ce qu'il ne faut pas dire), `next` (transition).

Les slides elles-mêmes sont dans `assets/js/slides-a.js` (1 → 8) et `assets/js/slides-b.js`
(9 → 15) : une fonction par slide, du HTML lisible. Les briques réutilisables (`node`, `arrowH`,
`badge`, `head`) sont en haut de `slides-a.js`.

Changer une durée se fait donc à **un seul endroit** ; le mode orateur et le chronomètre suivent.

## Remplacer les captures d'écran

Les diagrammes sont dessinés en CSS : la présentation tient sans aucune image. Pour insérer de
vraies captures, déposez-les dans `assets/screenshots/` (copié par le build) puis ajoutez un
`<img>` dans la slide concernée, par exemple dans `slide03()` :

```html
<img src="./assets/screenshots/n8n-flow.png" alt="Workflow n8n" style="width:100%;border-radius:0.8cqw" />
```

Ne jamais publier : jetons, clés API, e-mails réels, numéros réels, noms de clients.

## Accessibilité et lisibilité

- Corps de texte ≥ 17 px à 1920×1080 (`clamp()` sur `cqw`), titres à l'échelle du cadre.
- Contraste : encre `#14150f` sur papier `#f7f5f0` ; le vert lime ne porte jamais une information
  seul (il double un libellé ou une icône).
- `prefers-reduced-motion` coupe toutes les animations d'entrée.
- Les couleurs de statut sont toujours accompagnées d'un texte (`REAL`, `MOCK`).

## Structure

```
index.html                 coquille, polices, feuilles de style
assets/css/base.css        jetons de design, typographie, cadre 16:9, HUD
assets/css/layouts.css     grilles, cartes, architecture, timeline, modes
assets/js/data.js          slides (durées) + notes orateur  ← à éditer
assets/js/app.js           routage, clavier, HUD, chronomètre, modes
assets/js/slides-a.js      slides 1 → 8 + briques partagées
assets/js/slides-b.js      slides 9 → 15
assets/js/slides.js        registre des slides
assets/js/icons.js         jeu d'icônes SVG inline (aucune dépendance)
scripts/serve.mjs          serveur statique local
scripts/build.mjs          build statique → dist/
Dockerfile · nginx.conf · vercel.json
```

## Ce que la présentation affirme — et ce qu'elle n'affirme pas

Le contenu respecte la réalité du travail :

- **REAL** : LeadGuard tourne dans un Developer Sandbox HighLevel ; n8n, FastAPI, les webhooks et
  les écritures CRM sont réels ; les workflows sont actifs.
- **MOCK / démo** : marques fictives (`ATLAS_BUILD`), contacts synthétiques, service de gestion de
  projets simulé.
- **Jamais affirmé** : deux ans d'expérience professionnelle GoHighLevel, ou un déploiement client.

Le mode orateur contient cette consigne en clair dans `avoid` pour la slide 14.
