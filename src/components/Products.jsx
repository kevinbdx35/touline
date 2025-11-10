const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Touline Classique',
      description: 'La touline traditionnelle en coton tressé. Idéale comme porte-clés ou décoration marine.',
      price: '15€',
      colors: ['Bleu marine', 'Rouge', 'Blanc', 'Naturel'],
      image: 'img/20251110_194201-removebg-preview.png'
    },
    {
      id: 2,
      name: 'Touline Premium',
      description: 'Touline en corde de qualité supérieure avec finitions soignées et nœud marin authentique.',
      price: '25€',
      colors: ['Bleu roi', 'Bordeaux', 'Vert sapin'],
      image: 'img/20251110_194301-removebg-preview.png'
    },
    {
      id: 3,
      name: 'Touline Personnalisée',
      description: 'Créez votre touline unique avec vos couleurs et motifs préférés.',
      price: 'Sur devis',
      colors: ['Personnalisable'],
      image: 'img/20251110_194407-removebg-preview.png'
    },
    {
      id: 4,
      name: 'Mini Touline',
      description: 'Version miniature parfaite pour bijoux de sac ou porte-clés discret.',
      price: '12€',
      colors: ['Toutes couleurs'],
      image: 'img/20251110_194501-removebg-preview.png'
    },
    {
      id: 5,
      name: 'Touline Décoration',
      description: 'Grande touline décorative pour intérieur marin ou décoration murale.',
      price: '40€',
      colors: ['Écru', 'Bleu océan', 'Gris perle'],
      image: 'img/20251110_194133-removebg-preview.png'
    },
    {
      id: 6,
      name: 'Set Toulines',
      description: 'Coffret de 3 toulines assorties. Parfait pour un cadeau marin.',
      price: '35€',
      colors: ['Assortiment mer', 'Assortiment terre'],
      image: 'img/20251110_194453-removebg-preview.png'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-6xl">📸</div><p class="text-sm text-gray-600 mt-2">Image à venir</p>';
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 min-h-[60px]">
                  {product.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Couleurs disponibles:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 text-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
