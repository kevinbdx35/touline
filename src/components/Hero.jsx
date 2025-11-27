import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
          Touline & Co
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 sm:mb-4">
          L'art de la touline artisanale
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
          Des créations uniques tissées avec passion. Chaque touline est confectionnée à la main selon les traditions maritimes ancestrales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('produits')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Découvrir nos créations
          </button>
          <button
            onClick={() => scrollToSection('savoir-faire')}
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Notre savoir-faire
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-2">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Artisanal</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">Unique</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Pièces uniques</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">Tradition</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Savoir-faire</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
