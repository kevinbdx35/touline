const LegalNotice = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations sur l'entreprise</h2>
          <div className="space-y-2">
            <p><strong>Raison sociale :</strong> Touline & Co</p>
            <p><strong>Forme juridique :</strong> [À COMPLÉTER - ex: Auto-entrepreneur, SARL, etc.]</p>
            <p><strong>Numéro SIRET :</strong> [À COMPLÉTER]</p>
            <p><strong>Adresse du siège social :</strong> [À COMPLÉTER - Adresse complète en Bretagne]</p>
            <p><strong>Téléphone :</strong> [À COMPLÉTER]</p>
            <p><strong>Email :</strong> contact@touline-co.fr</p>
            <p><strong>Directeur de la publication :</strong> [À COMPLÉTER - Nom du responsable]</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement du site</h2>
          <div className="space-y-2">
            <p><strong>Hébergeur :</strong> [À COMPLÉTER - ex: GitHub Pages, OVH, etc.]</p>
            <p><strong>Adresse de l'hébergeur :</strong> [À COMPLÉTER]</p>
            <p><strong>Téléphone de l'hébergeur :</strong> [À COMPLÉTER]</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble de ce site (structure, textes, images, graphismes, logos, vidéos, etc.)
            est la propriété exclusive de Touline & Co, sauf mentions particulières.
          </p>
          <p className="mb-4">
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
            des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
            sauf autorisation écrite préalable de Touline & Co.
          </p>
          <p>
            Les photos de produits représentent des créations artisanales uniques.
            Les couleurs et dimensions peuvent légèrement varier d'une pièce à l'autre.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données personnelles</h2>
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données
            vous concernant.
          </p>
          <p className="mb-4">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@touline-co.fr
          </p>
          <p>
            Les données collectées via notre formulaire de contact sont utilisées uniquement pour
            répondre à vos demandes et ne sont jamais transmises à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
          <p className="mb-4">
            Ce site n'utilise actuellement aucun cookie de tracking ou de publicité.
          </p>
          <p>
            [Si vous ajoutez Google Analytics ou autre : À COMPLÉTER avec la politique cookies]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
          <p className="mb-4">
            Touline & Co s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations
            diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou
            l'exhaustivité des informations mises à disposition.
          </p>
          <p>
            Touline & Co ne pourra être tenue responsable des dommages directs ou indirects
            résultant de l'utilisation de ce site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français.
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
