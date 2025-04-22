# Portfolio Personnel - Page Blanche

> **Note:** Ce projet est actuellement une "page blanche" intentionnelle, prête pour le développement progressif du portfolio.

## Structure du Projet

```
portfolio-website/
├── src/
│   ├── components/     # [VIDE] Futurs composants React
│   ├── sections/      # [VIDE] Futures sections du site
│   ├── assets/        # [VIDE] Futures ressources (images, fonts)
│   ├── App.tsx        # Composant racine (vide)
│   ├── main.tsx       # Point d'entrée
│   └── index.css      # Styles Tailwind de base
├── public/            # Fichiers statiques
└── config/            # Fichiers de configuration
```

## Technologies de Base

- **React 18** avec **TypeScript**
- **Tailwind CSS** pour le styling
- **Vite** comme bundler

## Configuration Minimale Requise

- Node.js ≥ 16.x
- npm ≥ 8.x

## Installation

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
```

## État Actuel

Le projet est intentionnellement vide et prêt pour le développement. Il contient :

✅ Structure de base des dossiers
✅ Configuration TypeScript
✅ Configuration Tailwind CSS
✅ Configuration Vite
✅ Configuration Git

## Prochaines Étapes

1. Développement des composants de base
2. Implémentation des sections principales
3. Ajout des animations et interactions
4. Intégration du contenu
5. Optimisation et déploiement

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée la version de production
- `npm run preview` - Prévisualise la version de production

## Git et Déploiement

```bash
# Commandes Git essentielles
git status
git add .
git commit -m "Description"
git push origin main

# Déploiement sur GitHub Pages
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

## Structure Prévue des Composants

```
components/
├── layout/          # [À VENIR] Composants de structure
├── sections/        # [À VENIR] Sections principales
└── ui/             # [À VENIR] Composants d'interface
```

---

> Ce README sera mis à jour au fur et à mesure du développement du portfolio. 