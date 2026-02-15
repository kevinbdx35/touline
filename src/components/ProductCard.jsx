import { useState, useEffect } from 'react';

const ProductCard = ({ category, isNew, index }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleImageChange((activeImageIndex + 1) % category.images.length);
      if (e.key === 'ArrowLeft') handleImageChange((activeImageIndex - 1 + category.images.length) % category.images.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, activeImageIndex]);

  const handleImageChange = (idx) => {
    setActiveImageIndex(idx);
    setImageLoading(true);
    setImageError(false);
    setFadeKey((k) => k + 1);
  };

  const isSurMesure = category.name.includes('Sur-Mesure');
  const hasMultipleImages = category.images.length > 1;

  // Derive material from product name
  const getMaterial = () => {
    if (category.name.includes('Cuir')) return 'Cuir';
    if (category.name.includes('Coton')) return 'Coton';
    return null;
  };
  const material = getMaterial();

  return (
    <>
      <div
        className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-on-scroll flex flex-col"
        data-animation="animate-slide-up"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {/* Image area */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-cream/50 overflow-hidden">
          {/* Skeleton */}
          {imageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 h-2/3 rounded-2xl bg-gray-100 animate-pulse" />
            </div>
          )}

          {/* Main image */}
          <div
            className="absolute inset-0 flex items-center justify-center p-8 cursor-zoom-in"
            onClick={() => !imageError && setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            aria-label={`Agrandir l'image de ${category.name}`}
            onKeyDown={(e) => { if (e.key === 'Enter') !imageError && setLightboxOpen(true); }}
          >
            {imageError ? (
              <div className="flex flex-col items-center text-gray-300 space-y-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
                <span className="text-sm">Photo bientot disponible</span>
              </div>
            ) : (
              <img
                key={fadeKey}
                src={category.images[activeImageIndex]}
                alt={`${category.name} - Exemple ${activeImageIndex + 1}`}
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
                className={`max-w-full max-h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 animate-[fadeIn_0.35s_ease] ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => { setImageLoading(false); setImageError(false); }}
                onError={() => { setImageError(true); setImageLoading(false); }}
              />
            )}
          </div>

          {/* Prev/Next arrows on hover */}
          {hasMultipleImages && !imageError && (
            <>
              <button
                onClick={() => handleImageChange((activeImageIndex - 1 + category.images.length) % category.images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Image précédente"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => handleImageChange((activeImageIndex + 1) % category.images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Image suivante"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

          {/* Dots indicator */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {category.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleImageChange(idx)}
                  aria-label={`Image ${idx + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    activeImageIndex === idx
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-coral text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Nouveau
              </span>
            )}
            {material && (
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {material}
              </span>
            )}
          </div>

          {/* Zoom icon on hover */}
          {!imageError && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
            {category.description}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <span className="text-2xl font-bold text-gray-900">{category.price}</span>
              {!isSurMesure && <span className="text-xs text-gray-400 ml-1">/ unité</span>}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {isSurMesure ? 'Devis' : 'Commander'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease]"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie de ${category.name}`}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition p-2"
            aria-label="Fermer"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handleImageChange((activeImageIndex - 1 + category.images.length) % category.images.length); }}
                className="absolute left-4 text-white/60 hover:text-white transition p-3 rounded-full hover:bg-white/10"
                aria-label="Image précédente"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleImageChange((activeImageIndex + 1) % category.images.length); }}
                className="absolute right-4 text-white/60 hover:text-white transition p-3 rounded-full hover:bg-white/10"
                aria-label="Image suivante"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

          <img
            key={`lb-${fadeKey}`}
            src={category.images[activeImageIndex]}
            alt={`${category.name} - Exemple ${activeImageIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain animate-[fadeIn_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          />

          {hasMultipleImages && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {category.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); handleImageChange(idx); }}
                  className={`rounded-full transition-all ${activeImageIndex === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductCard;
