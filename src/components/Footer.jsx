const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Touline & Co</h3>
            <p className="text-gray-400">
              Artisan créateur de toulines marines depuis plus de 10 ans.
              Chaque pièce est unique et fabriquée à la main en Bretagne avec passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produits" className="text-gray-400 hover:text-white transition">
                  Produits
                </a>
              </li>
              <li>
                <a href="#savoir-faire" className="text-gray-400 hover:text-white transition">
                  Savoir-faire
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Livraison & Retours
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Touline & Co. Tous droits réservés. Fait avec passion ⚓
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
