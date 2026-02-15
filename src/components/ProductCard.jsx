import { useState, useEffect } from 'react';

const ProductCard = ({ category, isNew, index }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const handleImageChange = (idx) => {
    setActiveImageIndex(idx);
    setImageLoading(true);
    setImageError(false);
    setFadeKey((k) => k + 1);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleImageChange(idx);
    }
  };

  const getSizeLabel = () => {
    if (category.name.includes('Moyenne')) return { icon: '🔶', label: 'Taille moyenne' };
    if (category.name.includes('Grosse') || category.name.includes('Géante')) return { icon: '🔷', label: 'Grande taille' };
    return { icon: '🔹', label: 'Taille standard' };
  };

  const sizeInfo = getSizeLabel();
  const isSurMesure = category.name.includes('Sur-Mesure');

  return (
    <>
      <div
        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 animate-on-scroll flex flex-col"
        data-animation="animate-slide-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Main Image */}
        <div
          className="relative h-96 bg-gradient-to-br from-cream via-white to-peach/20 overflow-hidden cursor-zoom-in"
          onClick={() => !imageError && setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`Agrandir l'image de ${category.name}`}
          onKeyDown={(e) => { if (e.key === 'Enter') !imageError && setLightboxOpen(true); }}
        >
          {/* Skeleton Loader */}
          {imageLoading && !imageError && (
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
                key={fadeKey}
                src={category.images[activeImageIndex]}
                alt={`${category.name} - Exemple ${activeImageIndex + 1} - Touline artisanale faite main`}
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
                className={`max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-all duration-500 animate-[fadeIn_0.4s_ease-in-out] ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => { setImageLoading(false); setImageError(false); }}
                onError={() => { setImageError(true); setImageLoading(false); }}
              />
            )}
          </div>

          {/* Zoom hint */}
          {!imageError && (
            <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
              </svg>
              Agrandir
            </div>
          )}

          {/* New Badge */}
          {isNew && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-coral to-coral-dark text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
              Nouveau
            </div>
          )}

          {/* Size Indicator */}
          {!isSurMesure && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-gray-700">
                {sizeInfo.icon} {sizeInfo.label}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
          {/* Title and Price */}
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {category.name}
            </h3>
            <div className="text-right flex-shrink-0">
              <div className="text-2xl sm:text-3xl font-bold text-coral whitespace-nowrap">
                {category.price}
              </div>
              {!isSurMesure && (
                <div className="text-xs text-gray-500 mt-1">
                  l'unité
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
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
                  onClick={() => handleImageChange(idx)}
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

          {/* CTA Button */}
          <div className="pt-2 mt-auto">
            <a
              href="#contact"
              className="block w-full text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isSurMesure ? 'Demander un devis' : 'Commander'}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-in-out]"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie de ${category.name}`}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition p-2"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          {category.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageChange((activeImageIndex - 1 + category.images.length) % category.images.length);
                }}
                className="absolute left-4 text-white/80 hover:text-white transition p-2 bg-white/10 rounded-full hover:bg-white/20"
                aria-label="Image précédente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageChange((activeImageIndex + 1) % category.images.length);
                }}
                className="absolute right-4 text-white/80 hover:text-white transition p-2 bg-white/10 rounded-full hover:bg-white/20"
                aria-label="Image suivante"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Lightbox image */}
          <img
            key={`lb-${fadeKey}`}
            src={category.images[activeImageIndex]}
            alt={`${category.name} - Exemple ${activeImageIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl animate-[fadeIn_0.3s_ease-in-out]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {activeImageIndex + 1} / {category.images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
