# Touline & Co - Site Vitrine

Site web vitrine pour Touline & Co, artisan créateur de toulines marines en Bretagne.

## 🎯 À propos

Touline & Co est une entreprise artisanale bretonne spécialisée dans la fabrication de toulines marines traditionnelles. Chaque touline est confectionnée entièrement à la main en respectant les techniques ancestrales de tressage maritime.

## 🛠️ Technologies

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite 7** - Build tool et dev server ultra-rapide
- **Tailwind CSS 4** - Framework CSS utility-first
- **ESLint** - Linter pour la qualité du code

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter le code
npm run lint
```

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Navbar.jsx      # Navigation principale
│   ├── Hero.jsx        # Section d'accueil
│   ├── Products.jsx    # Catalogue produits
│   ├── Craftsmanship.jsx # Section savoir-faire
│   ├── Contact.jsx     # Section contact
│   ├── Footer.jsx      # Pied de page
│   └── EmailLink.jsx   # Composant email protégé
├── data/               # Données de l'application
│   └── products.js     # Catalogue des toulines
├── utils/              # Fonctions utilitaires
│   └── scrollToSection.js # Navigation smooth scroll
├── App.jsx             # Composant racine
├── main.jsx           # Point d'entrée
└── index.css          # Styles globaux

public/
├── img/               # Images des produits
├── favicon.svg        # Icône du site
├── sitemap.xml        # Plan du site pour SEO
└── robots.txt         # Directives pour les crawlers
```

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation smooth scroll
- ✅ Galerie d'images avec prévisualisation
- ✅ Optimisation SEO (meta tags, Open Graph, sitemap)
- ✅ Accessibilité WCAG (ARIA labels, navigation clavier)
- ✅ Protection anti-spam pour l'email
- ✅ Images optimisées en WebP
- ✅ Lazy loading des images
- ✅ Animations et transitions fluides

## 🎨 Personnalisation

### Modifier les produits

Éditez le fichier `src/data/products.js` pour ajouter, modifier ou supprimer des produits :

```javascript
{
  id: 6,
  name: 'Nouveau produit',
  description: 'Description du produit',
  price: '20€',
  isNew: true,
  images: ['img/nouvelle-image.webp']
}
```

### Changer les couleurs

Le thème utilise Tailwind CSS. Les couleurs principales sont en bleu (`blue-600`, `blue-500`, etc.).
Modifiez les classes dans les composants ou configurez `tailwind.config.js`.

### Mettre à jour l'URL du site

Remplacez `https://votre-domaine.fr/` dans :
- `index.html` (meta tags Open Graph)
- `public/sitemap.xml`
- `public/robots.txt`

## 📧 Contact

Pour toute question : contact@touline-co.fr

## 📄 Licence

Tous droits réservés - Touline & Co

---

🇫🇷 Fabriqué avec passion en Bretagne
