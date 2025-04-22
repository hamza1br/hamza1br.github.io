# Portfolio Personnel

## Structure du Projet

```
portfolio-website/
├── src/
│   ├── components/       # Composants réutilisables
│   ├── sections/        # Sections principales du site
│   ├── styles/         # Fichiers CSS et styles
│   ├── assets/         # Images, fonts et autres ressources
│   ├── App.tsx         # Composant principal
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux et Tailwind
├── public/             # Fichiers statiques
├── package.json        # Dépendances et scripts
└── tailwind.config.js  # Configuration Tailwind CSS
```

## Technologies Utilisées

### Base du Projet
- **Node.js** : v16.x ou supérieur
- **npm** : v8.x ou supérieur
- **TypeScript** : Superset typé de JavaScript
- **React** : v18.2.0 - Bibliothèque UI
- **Vite** : Outil de build moderne et rapide

### Styles et Design
- **Tailwind CSS** : Framework CSS utilitaire
- **PostCSS** : Outil de transformation CSS
- **Autoprefixer** : Gestion automatique des préfixes CSS

## Configuration Initiale

1. **Vérification de l'environnement** :
```bash
node -v  # Doit être v16.x ou supérieur
npm -v   # Doit être v8.x ou supérieur
```

2. **Installation des dépendances** :
```bash
npm install
```

3. **Lancement du serveur de développement** :
```bash
npm run dev
```

## Connexion avec GitHub

1. **Initialisation du dépôt** :
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Connexion au dépôt distant** :
```bash
git remote add origin https://github.com/hamza1br/hamza1br.github.io.git
git branch -M main
git push -u origin main
```

3. **Configuration de GitHub Pages** :
- Aller dans Settings > Pages
- Source : branch 'main'
- Dossier : '/root'

## Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée la version de production
- `npm run preview` : Prévisualise la version de production

## Commandes Git Utiles

```bash
# Vérifier l'état des fichiers
git status

# Ajouter des modifications
git add .

# Créer un commit
git commit -m "Description des changements"

# Pousser les changements
git push origin main

# Récupérer les changements
git pull origin main
```

## Structure des Composants

Les composants seront organisés comme suit :

```
components/
├── layout/          # Composants de mise en page
│   ├── Header
│   ├── Footer
│   └── Navigation
├── sections/        # Sections principales
│   ├── Hero
│   ├── About
│   ├── Projects
│   └── Contact
└── ui/             # Composants UI réutilisables
    ├── Button
    ├── Card
    └── Input
```

## Conventions de Code

- Utilisation des composants fonctionnels React avec TypeScript
- Nommage en PascalCase pour les composants
- Nommage en camelCase pour les fonctions et variables
- Utilisation des classes Tailwind pour le style
- Documentation des props avec TypeScript interfaces

## Déploiement

Le site sera déployé sur GitHub Pages à l'adresse : https://hamza1br.github.io

Pour déployer :
```bash
npm run build
git add dist -f
git commit -m "Deploy website"
git subtree push --prefix dist origin gh-pages
``` 