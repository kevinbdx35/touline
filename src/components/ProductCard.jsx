import { useState } from 'react';

const ProductCard = ({ category, isNew, index }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveImageIndex(index);
    }
  };

  const getSizeLabel = () => {
    if (category.name.includes('Moyenne')) return { icon: '🔶', label: 'Taille moyenne' };
    if (category.name.includes('Grosse') || category.name.includes('Géante')) return { icon: '🔷', label: 'Grande taille' };
    return { icon: '🔹', label: 'Taille standard' };
  };

  const sizeInfo = getSizeLabel();

  return (
    <div
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 animate-on-scroll"
      data-animation="animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Main Image */}
      <div className="relative h-96 bg-gradient-to-br from-cream via-white to-peach/20 overflow-hidden">
        {/* Skeleton Loader */}
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg"></div>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center p-6">
          {imageError ? (
            <div className="flex flex-col items-center justify-center text-gray-400 space-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              <span className="text-sm font-medium">Photo bientot disponible</span>
            </div>
          ) : (
            <img
              src={category.images[activeImageIndex]}
              alt={`${category.name} - Exemple ${activeImageIndex + 1} - Touline artisanale faite main`}
              loading="lazy"
              width="400"
              height="400"
              decoding="async"
              className={`max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => { setImageLoading(false); setImageError(false); }}
              onError={() => { setImageError(true); setImageLoading(false); }}
            />
          )}
        </div>

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-coral to-coral-dark text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
            ✨ Nouveau
          </div>
        )}

        {/* Size Indicator */}
        {!category.name.includes('Sur-Mesure') && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium text-gray-700">
              {sizeInfo.icon} {sizeInfo.label}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {/* Title and Price */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            {category.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl sm:text-3xl font-bold text-coral whitespace-nowrap">
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
        <div className="pt-3 sm:pt-4">
          <p className="text-xs font-medium text-gray-500 mb-2 sm:mb-3 uppercase tracking-wide">
            Exemples de couleurs possibles
          </p>
          <div
            className="flex flex-wrap gap-1.5 sm:gap-2"
            role="group"
            aria-label="Galerie d'exemples de couleurs"
          >
            {category.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveImageIndex(idx);
                  setImageLoading(true);
                  setImageError(false);
                }}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                aria-label={`Voir l'exemple de couleur ${idx + 1} sur ${category.images.length}`}
                aria-pressed={activeImageIndex === idx}
                tabIndex={0}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                  activeImageIndex === idx
                    ? 'border-secondary ring-2 ring-peach scale-105'
                    : 'border-gray-200 hover:border-secondary hover:scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`${category.name} - Variante couleur ${idx + 1}`}
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-white p-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gray-100');
                  }}
                />
                {activeImageIndex === idx && (
                  <div className="absolute inset-0 bg-secondary/10" aria-hidden="true"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
