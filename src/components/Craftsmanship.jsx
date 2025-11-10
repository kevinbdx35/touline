const Craftsmanship = () => {
  const steps = [
    {
      number: '01',
      title: 'Sélection des matériaux',
      description: 'Nous choisissons avec soin nos cordes et fils en privilégiant des matériaux naturels et durables.',
      icon: '🧵'
    },
    {
      number: '02',
      title: 'Préparation',
      description: 'Mesure et préparation des longueurs nécessaires selon le modèle de touline souhaité.',
      icon: '📏'
    },
    {
      number: '03',
      title: 'Tressage artisanal',
      description: 'Réalisation du nœud de touline selon les techniques maritimes traditionnelles, entièrement à la main.',
      icon: '✋'
    },
    {
      number: '04',
      title: 'Finitions',
      description: 'Ajustements finaux, serrage et coupe précise pour obtenir une touline parfaite.',
      icon: '✨'
    }
  ];

  return (
    <section id="savoir-faire" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Savoir-Faire
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La touline est un nœud marin traditionnel utilisé depuis des siècles par les marins.
            Aujourd'hui, nous perpétuons cet art ancestral pour créer des pièces uniques.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-6xl">{step.icon}</div>
              <div className="text-5xl font-bold text-blue-200 mb-2">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                L'histoire de la touline
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  La touline, aussi appelée "pomme de touline", est un nœud marin traditionnel qui servait
                  à lester l'extrémité d'une ligne pour faciliter son lancer d'un navire à un quai.
                </p>
                <p>
                  Aujourd'hui, nous transformons ce nœud fonctionnel en véritables objets d'art et accessoires
                  du quotidien, en conservant les techniques de tressage traditionnelles.
                </p>
                <p>
                  Chaque touline est unique, confectionnée entièrement à la main avec passion et expertise.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 text-center">
              <div className="text-8xl mb-4">⚓</div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Toulines créées</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Fait main</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl mb-3">🌿</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Écologique</h4>
            <p className="text-gray-600">Matériaux naturels et durables, production responsable</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl mb-3">❤️</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Passion</h4>
            <p className="text-gray-600">Chaque pièce est créée avec amour et dévouement</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Qualité</h4>
            <p className="text-gray-600">Savoir-faire artisanal et finitions impeccables</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
