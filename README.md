# Luxaris

Une application web moderne construite avec React, Vite et Tailwind CSS.

## Installation

### Prérequis

- **Node.js** (v16 ou supérieure recommandé)
- **npm** gestionnaire de paquets

### Étapes

1. **Clonez le dépôt**
   ```bash
   git clone https://github.com/PhntmVoid/Luxaris.git
   cd Luxaris
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   ```
   Ou si vous utilisez yarn :
   ```bash
   yarn install
   ```
   npm install @google/generative-ai
   ```
3. **Démarrez le serveur de développement**
   ```bash
   npm run dev
   ```
   Ou avec yarn :
   ```bash
   yarn dev
   ```

4. **Construire pour la production**
   ```bash
   npm run build
   ```
   Ou avec yarn :
   ```bash
   yarn build
   ```

## Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire l'application pour la production
- `npm run lint` - Exécuter ESLint pour vérifier la qualité du code
- `npm run preview` - Prévisualiser la version de production localement

## Structure du projet

```
src/
├── components/       # Composants React réutilisables
├── pages/           # Composants de pages
├── assets/          # Ressources statiques
├── App.jsx          # Composant racine
├── App.css          # Styles globaux
├── main.jsx         # Point d'entrée de l'application
└── index.css        # CSS global
```

## Technologies

- **React** ^19.2.0 - Bibliothèque UI
- **Vite** ^7.2.4 - Outil de build et serveur de développement
- **Tailwind CSS** ^4.1.18 - Framework CSS utilitaire
- **React Router** ^7.12.0 - Routage côté client
- **ESLint** ^9.39.1 - Linter de code

## Développement

Pour le développement, utilisez la commande suivante pour démarrer un serveur local avec remplacement de module à chaud :

```bash
npm run dev
```

L'application sera disponible à l'adresse `http://localhost:5173` (ou le port disponible suivant).

## Licence

Sous licence MIT. Voir le fichier LICENSE pour plus de détails.
