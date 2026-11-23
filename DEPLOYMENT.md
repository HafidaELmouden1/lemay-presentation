# Déploiement

Le deck est **purement statique** : `index.html` + `assets/`. Aucun serveur applicatif, aucune base,
aucun secret. Choisissez la cible ; les quatre options ont été préparées.

## 1. Local (répétition)

```bash
npm run dev          # http://127.0.0.1:5174
npm run build        # dist/
npm run preview      # http://127.0.0.1:4173  (sert dist/)
```

## 2. Docker + nginx (le plus proche d'un sous-domaine)

```bash
docker build -t lemay-deck .
docker run -d --name lemay-deck -p 8080:80 --restart unless-stopped lemay-deck
```

- Image finale : `nginx:1.27-alpine`, ~50 Mo, sans Node.
- `nginx.conf` gère la réécriture SPA (`/speaker` → `index.html`), le cache des assets et trois
  en-têtes de sécurité (`nosniff`, `SAMEORIGIN`, `Referrer-Policy`).
- Vérification : `curl -sI http://localhost:8080/ | head -5`.

Mise derrière un domaine, avec HTTPS (Caddy fait le certificat tout seul) :

```caddy
presentation.itbagence.fr {
    reverse_proxy 127.0.0.1:8080
}
```

## 3. Vercel

```bash
npm run build
npx vercel deploy --prod dist
```

`vercel.json` est déjà réglé : `outputDirectory: dist`, `cleanUrls`, réécriture `/(.*)` → `/index.html`
(pour que `/speaker` et `/rehearse` répondent directement) et cache long sur `/assets`.

## 4. Netlify / GitHub Pages / tout serveur statique

- Publish directory : `dist`
- Build command : `npm run build` (ou rien, si vous committez `dist/`)
- Fallback SPA : rediriger les 404 vers `/index.html`
  (Netlify : `/* /index.html 200` dans `_redirects` ; GitHub Pages : copier `index.html`
  en `404.html`).

### Sous-chemin (`https://exemple.com/presentation`)

Les chemins sont relatifs (`./assets/...`) : le deck fonctionne dans un sous-dossier sans
configuration. Seules les URL profondes (`/presentation/speaker`) dépendent de la réécriture du
serveur ; en cas de doute, utilisez les ancres : `/#/speaker`.

## Vérifications avant l'entretien

```bash
npm run build
npm run preview
```

Puis, dans Chrome, en 1920×1080 :

- [ ] `/#/s/1` s'ouvre sur la slide d'introduction, HUD visible puis masqué après ~3 s.
- [ ] `→` avance, `←` recule, `Début`/`Fin` sautent aux extrémités.
- [ ] `F` passe en plein écran (le HUD reste discret).
- [ ] `S` ouvre le mode orateur : discours, phrase clé, à montrer / à éviter, transition.
- [ ] `R` lance le chronomètre ; à 9:00 il passe en jaune, à 9:40 en rouge.
- [ ] `P` prépare l'impression (15 pages, une par slide) → « Enregistrer en PDF ».
- [ ] Recharger la page sur `/#/s/7` rouvre la slide 7 (lien direct conservé).
- [ ] Réduire la fenêtre à 1366×768 : rien ne déborde, la typographie reste lisible.

## Ce qu'il ne faut pas faire

- Ne pas déployer `index.html` seul : `assets/` est indispensable.
- Ne pas modifier `dist/` à la main : il est régénéré par `npm run build`.
- Ne pas ajouter d'image réelle de client sans la masquer (e-mails, numéros, jetons).
