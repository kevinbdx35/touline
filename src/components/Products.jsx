import { useState } from 'react';
import { categories } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductCard = ({ category, isNew, index }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [ref, isVisible] = useScrollAnimation();

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveImageIndex(index);
    }
  };

  const getSizeLabel = () => {
    if (category.name.includes('Big')) return { icon: '🔷', label: 'Grande taille' };
    if (category.name.includes('Middle')) return { icon: '🔶', label: 'Taille moyenne' };
    return { icon: '🔹', label: 'Taille standard' };
  };

  const sizeInfo = getSizeLabel();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 animate-on-scroll ${isVisible ? 'animate-slide-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Main Image */}
      <div className="relative h-96 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Skeleton Loader */}
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg"></div>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center p-6">
          <img
            src={category.images[activeImageIndex]}
            alt={`${category.name} - Exemple ${activeImageIndex + 1} - Touline artisanale faite main`}
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            className={`max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
            onError={(e) => {
              e.target.style.display = 'none';
              setImageLoading(false);
            }}
          />
        </div>

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
            ✨ Nouveau
          </div>
        )}

        {/* Size Indicator */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <span className="text-sm font-medium text-gray-700">
            {sizeInfo.icon} {sizeInfo.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Price */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
            {category.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <div className="text-3xl font-bold text-blue-600">
              {category.price}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              l'unité
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed flex items-center">
          {category.description}
        </p>

        {/* Thumbnail Carousel */}
        <div className="pt-4">
          <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
            Exemples de couleurs possibles
          </p>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Galerie d'exemples de couleurs"
          >
            {category.images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveImageIndex(index);
                  setImageLoading(true);
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-label={`Voir l'exemple de couleur ${index + 1} sur ${category.images.length}`}
                aria-pressed={activeImageIndex === index}
                tabIndex={0}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                  activeImageIndex === index
                    ? 'border-blue-500 ring-2 ring-blue-200 scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`${category.name} - Variante couleur ${index + 1}`}
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-white p-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {activeImageIndex === index && (
                  <div className="absolute inset-0 bg-blue-500/10" aria-hidden="true"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Créations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Découvrez notre collection de toulines artisanales, chacune confectionnée avec soin et passion
          </p>
          <div className="max-w-3xl mx-auto bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-green-900">
              <span className="font-semibold">✓ Stock permanent :</span> Toutes nos tailles sont disponibles en stock. Les couleurs peuvent varier selon nos arrivages,
              mais nous pouvons également fabriquer votre touline sur commande avec les couleurs de votre choix.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ProductCard key={category.id} category={category} isNew={category.isNew} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
