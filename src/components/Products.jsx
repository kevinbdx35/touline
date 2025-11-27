import { useState } from 'react';

const ProductCard = ({ category }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Main Image */}
      <div className="relative h-96 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <img
            src={category.images[activeImageIndex]}
            alt={`${category.name} ${activeImageIndex + 1}`}
            className="max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
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
        <p className="text-gray-600 leading-relaxed">
          {category.description}
        </p>

        {/* Thumbnail Carousel */}
        <div className="pt-4">
          <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
            Exemples de couleurs possibles
          </p>
          <div className="flex flex-wrap gap-2">
            {category.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  activeImageIndex === index
                    ? 'border-blue-500 ring-2 ring-blue-200 scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`${category.name} miniature ${index + 1}`}
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-white p-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {activeImageIndex === index && (
                  <div className="absolute inset-0 bg-blue-500/10"></div>
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
  const categories = [
    {
      id: 1,
      name: 'Toulines Monocolor',
      description: 'Toulines élégantes en une seule couleur, parfaites pour un style épuré et raffiné. Disponibles en plusieurs teintes.',
      price: '15€',
      images: [
        'img/monocolor.png',
        'img/monocolor13.png',
        'img/monocolor14.png',
        'img/monocolor15.png',
        'img/monocolor16.png',
        'img/monocolor17.png'
      ]
    },
    {
      id: 2,
      name: 'Toulines Bicolor',
      description: 'Toulines bicolores avec un contraste harmonieux de deux couleurs. Large choix de combinaisons disponibles.',
      price: '18€',
      images: [
        'img/bicolor3.png',
        'img/bicolor5.png',
        'img/bicolor6.png',
        'img/bicolor7.png',
        'img/bicolor10.png',
        'img/bicolor11.png',
        'img/bicolor12.png',
        'img/bicolor19.png'
      ]
    },
    {
      id: 3,
      name: 'Toulines Tricolor',
      description: 'Toulines tricolores aux couleurs vives et harmonieuses. Un style unique et dynamique pour se démarquer.',
      price: '22€',
      images: [
        'img/tricolor.png',
        'img/tricolor1.png',
        'img/tricolor4.png',
        'img/tricolor5.png',
        'img/tricolor18.png'
      ]
    },
    {
      id: 4,
      name: 'Toulines Middle',
      description: 'Toulines de taille moyenne, parfaites pour une décoration plus présente tout en restant élégantes.',
      price: '25€',
      images: [
        'img/middle1.png'
      ]
    },
    {
      id: 5,
      name: 'Toulines Big',
      description: 'Grandes toulines décoratives et fonctionnelles. Parfaites comme butoir de porte ou comme élément de décoration imposant.',
      price: '35€',
      images: [
        'img/big2.png',
        'img/big3.png'
      ]
    }
  ];

  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Créations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection de toulines artisanales, chacune confectionnée avec soin et passion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
