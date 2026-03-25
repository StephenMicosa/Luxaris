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
- **React Helmet Async** ^3.0.0 - Gestion des meta tags SEO
- **Lucide React** ^0.563.0 - Iconographie
- **Terser** - Minification JavaScript
- **ESLint** ^9.39.1 - Linter de code

## 🚀 Optimisations Performance

### Code Splitting & Lazy Loading
- **Home page**: Chargement en priorité (critical path)
- **Autres pages**: Lazy-loaded à la navigation
- **PageLoader**: Spinner personnalisé pendant le chargement

### Optimisation Images

#### Composants fournis:

**LazyImage** - Composant d'image générique optimisé
```jsx
import LazyImage from '@/components/common/LazyImage';

<LazyImage 
  src="/image.jpg"
  alt="Description"
  webp={true}
  responsive={true}
  className="w-full"
/>
```

**OptimizedHeroImage** - Spécialisé pour images héro
```jsx
import OptimizedHeroImage from '@/components/common/OptimizedHeroImage';

<OptimizedHeroImage 
  src="/hero.jpg"
  alt="Hero banner"
  className="h-screen"
/>
```

#### Hooks disponibles:

**useIntersectionObserver** - Détection de visibilité
```jsx
import { useIntersectionObserver } from '@/components/common/LazyImage';

const { ref, isVisible } = useIntersectionObserver();
```

**usePageLifecycle** - Gestion du cycle de vie/bfcache
```jsx
import { usePageLifecycle } from '@/hooks/usePageLifecycle';

export default function MyPage() {
  usePageLifecycle();
  // ...
}
```

#### Optimisation des images existantes:

Les images sont pré-optimisées avec des variantes WebP et JPEG responsives (640px, 1024px, 1920px) stockées dans `src/assets/`. Les composants `LazyImage` et `OptimizedHeroImage` gèrent automatiquement:
- Chargement lazy avec IntersectionObserver
- Sélection WebP pour navigateurs modernes
- Fallback JPEG pour compatibilité
- Responsive srcSet (sm/md/lg breakpoints)

### Autres optimisations

#### Back-Forward Cache (bfcache)
- Hook `usePageLifecycle` intégré dans App
- En-têtes HTTP optimisés dans Vite
- Nettoyage automatique des ressources

#### SEO
- Meta tags sur toutes les pages (react-helmet-async)
- robots.txt et sitemap.xml configurés
- Preconnect hints pour fonts.googleapis.com

#### Build
- Minification Terser (drop_console, drop_debugger)
- Code splitting manuel (react, lucide-react, tailwind)
- Tree-shaking des dépendances inutilisées

#### Styles CSS
- Tailwind CSS en JIT mode
- Optimisations image CSS (aspect-ratio, lazy loading)
- Shimmer animation pour placeholders

## Développement

Pour le développement, utilisez la commande suivante pour démarrer un serveur local avec remplacement de module à chaud :

```bash
npm run dev
```

L'application sera disponible à l'adresse `http://localhost:5173` (ou le port disponible suivant).

### Debugging

**DevTools Chrome/Firefox:**
- DevTools → Sources pour breakpoints
- DevTools → Network pour voir les images lazy-loadées
- DevTools → Application → Cache Storage pour vérifier bfcache

**Lighthouse Audit:**
```bash
npm run dev
# Puis Ctrl+Shift+I → Lighthouse
```

### Gestion d'erreurs

#### ErrorBoundary
- Capture automatiquement les erreurs React
- Mode développement: affiche stack trace détaillé
- Mode production: message utilisateur friendly

#### 404 Page
- Route wildcard (`*`) vers page NotFound
- Navigation alternative vers pages principales
- Links vers FAQ et support

## Structure du projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer avec liens
│   │   └── ErrorBoundary.jsx   # Gestion erreurs React
│   ├── common/
│   │   ├── LazyImage.jsx       # Image lazy-loaded optimisée
│   │   ├── OptimizedHeroImage.jsx  # Image héro <picture>
│   │   └── PageLoader.jsx      # Spinner de chargement
│   ├── sections/
│   │   ├── Hero.jsx            # Section héro réutilisable
│   │   └── HeroSection.jsx     # Variante section héro
│   ├── home/               
│   │   ├── Hero.jsx            # Héro homepage
│   │   ├── Mannequins.jsx      # Grille mannequins
│   │   ├── MannequinGrid.jsx   # Sous-composant grille
│   │   ├── MannequinMenu.jsx   # Menu mannequins
│   │   ├── TestimonialCard.jsx # Carte avis
│   │   ├── Clients.jsx         # Section clients
│   │   └── Stars.jsx           # Composant étoiles
│   ├── about/
│   │   ├── TeamCard.jsx
│   │   └── TeamSection.jsx
│   ├── pricing/
│   │   ├── TarifsHeader.jsx
│   │   ├── Functionalities.jsx
│   │   ├── PricingCard.jsx
│   │   ├── PricingTable.jsx
│   │   └── PriceTableRow.jsx
│   ├── faq/
│   │   ├── FAQ.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── FAQHeader.jsx
│   │   ├── FAQTitle.jsx
│   │   └── searchFaq.jsx
│   ├── contact/
│   │   └── ContactForm.jsx
│   └── ai/
│       └── module_API.jsx      # API IA (inutilisé actuellement)
├── pages/                  # Pages principales (lazy-loaded)
├── hooks/                  # Custom hooks
├── context/                # Context API
├── data/                   # Données statiques
├── styles/                 # CSS personnalisé
├── assets/                 # Images et ressources
├── App.jsx                 # Composant racine
└── main.jsx                # Point d'entrée
```

## Licence

Sous licence MIT. Voir le fichier LICENSE pour plus de détails.
