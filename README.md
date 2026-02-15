# Touline & Co - Site Vitrine

Site web vitrine pour Touline & Co, artisan créateur de toulines marines en Bretagne.

## À propos

Touline & Co est une entreprise artisanale bretonne spécialisée dans la fabrication de toulines marines traditionnelles. Chaque touline est confectionnée entièrement à la main en respectant les techniques ancestrales de tressage maritime.

## Technologies

- **Astro 5** - Framework web statique avec architecture islands
- **React 19** - Composants interactifs (ProductCard, EmailLink)
- **Tailwind CSS 4** - Framework CSS utility-first
- **@astrojs/sitemap** - Génération automatique du sitemap

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
src/
├── pages/                              # Pages routées automatiquement
│   ├── index.astro                     # Page d'accueil
│   ├── mentions-legales.astro          # Mentions légales
│   ├── cgv.astro                       # Conditions générales de vente
│   ├── politique-confidentialite.astro  # Politique de confidentialité
│   ├── livraison-retours.astro         # Livraison & retours
│   └── 404.astro                       # Page 404
├── layouts/
│   ├── Layout.astro                    # Layout principal (head, SEO, meta)
│   └── LegalLayout.astro              # Layout pages légales
├── components/
│   ├── Navbar.astro                    # Navigation (script inline vanilla)
│   ├── Hero.astro                      # Section d'accueil
│   ├── Products.astro                  # Section catalogue
│   ├── ProductCard.jsx                 # Carte produit — React island (client:visible)
│   ├── Craftsmanship.astro             # Section savoir-faire
│   ├── Contact.astro                   # Section contact
│   ├── EmailLink.jsx                   # Email protégé — React island (client:load)
│   └── Footer.astro                    # Pied de page
├── data/
│   └── products.js                     # Catalogue des 15 toulines
├── scripts/
│   └── scroll-animation.js            # IntersectionObserver vanilla
└── styles/
    └── global.css                      # Styles globaux + palette couleurs

public/
├── img/                                # Images produits (WebP)
├── favicon.svg                         # Icône du site
└── robots.txt                          # Directives crawlers
```

## Architecture

Le site utilise l'architecture **islands** d'Astro : la majorité du HTML est rendu statiquement au build, seuls les composants interactifs sont hydratés côté client en React :

| Composant | Type | Raison |
|-----------|------|--------|
| ProductCard | React `client:visible` | Galerie d'images interactive |
| EmailLink | React `client:load` | Construction email côté client (anti-spam) |
| Tous les autres | Astro (statique) | Aucune interactivité côté client |

## Palette de couleurs

Définie dans `src/styles/global.css` via `@theme` Tailwind CSS 4 :

| Nom | Hex | Utilisation |
|-----|-----|-------------|
| `primary` | `#0081A7` | Marque, navigation, liens |
| `secondary` | `#00AFB9` | Hover, accents turquoise |
| `cream` | `#FDFCDC` | Fonds clairs, sections |
| `peach` | `#FED9B7` | Accents doux, numéros d'étapes |
| `coral` | `#F07167` | CTA, badges, prix |

## Personnalisation

### Modifier les produits

Éditez `src/data/products.js` :

```javascript
{
  id: 16,
  name: 'Nouveau produit',
  description: 'Description du produit',
  price: '5€',
  isNew: true,
  images: ['img/nouvelle-image.webp']
}
```

Les images doivent être placées dans `public/img/` au format WebP.

### Changer les couleurs

Modifiez le bloc `@theme` dans `src/styles/global.css` :

```css
@theme {
  --color-primary: #0081A7;
  --color-secondary: #00AFB9;
  --color-cream: #FDFCDC;
  --color-peach: #FED9B7;
  --color-coral: #F07167;
}
```

### Mettre à jour le domaine

Remplacez `kevinbdx35.github.io` dans :
- `astro.config.mjs` (champ `site`)
- `src/layouts/Layout.astro` (variable `siteUrl`)
- `public/robots.txt` (URL du sitemap)

## Déploiement

Le site se déploie automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`. Le workflow est dans `.github/workflows/deploy.yml`.

## Licence

Tous droits réservés - Touline & Co
