const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Touline & Co accorde une grande importance à la protection de vos données personnelles.
            Cette politique de confidentialité a pour objectif de vous informer sur la manière dont
            nous collectons, utilisons et protégeons vos données.
          </p>
          <p>
            Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD)
            et à la loi Informatique et Libertés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
          <div className="space-y-2">
            <p><strong>Raison sociale :</strong> Touline & Co</p>
            <p><strong>Adresse :</strong> [À COMPLÉTER - Adresse complète]</p>
            <p><strong>Email :</strong> touline_co@proton.me</p>
            <p><strong>Téléphone :</strong> [À COMPLÉTER]</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
          <p className="mb-4">
            Nous collectons uniquement les données nécessaires au traitement de vos demandes et commandes :
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Formulaire de contact</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Message</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Commandes</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Adresse de livraison</li>
            <li>Numéro de téléphone (si nécessaire pour la livraison)</li>
            <li>Détails de la commande</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Données de navigation</h3>
          <p>
            Nous ne collectons actuellement aucune donnée de navigation via des cookies ou traceurs.
            [À MODIFIER si vous ajoutez Google Analytics ou autre outil]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalités du traitement</h2>
          <p className="mb-4">
            Vos données personnelles sont collectées et traitées pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Répondre à vos demandes de contact</li>
            <li>Traiter et suivre vos commandes</li>
            <li>Gérer la livraison de vos produits</li>
            <li>Gérer les éventuels retours ou réclamations</li>
            <li>Respecter nos obligations légales et comptables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base légale du traitement</h2>
          <p className="mb-4">
            Le traitement de vos données repose sur :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Le contrat</strong> : pour l'exécution de votre commande</li>
            <li><strong>Votre consentement</strong> : pour répondre à vos demandes de contact</li>
            <li><strong>Les obligations légales</strong> : pour la conservation des données comptables et fiscales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
          <p className="mb-4">
            Vos données personnelles sont destinées exclusivement à :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Touline & Co (pour le traitement des commandes et des demandes)</li>
            <li>Nos prestataires de livraison (uniquement les informations nécessaires à la livraison)</li>
            <li>[À COMPLÉTER si vous utilisez d'autres prestataires]</li>
          </ul>
          <p>
            Nous ne vendons ni ne louons vos données personnelles à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Durée de conservation</h2>
          <p className="mb-4">
            Vos données sont conservées pendant les durées suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Demandes de contact</strong> : 3 ans à compter de notre dernier échange</li>
            <li><strong>Données de commande</strong> : 10 ans (obligations comptables et fiscales)</li>
            <li><strong>Données de livraison</strong> : durée nécessaire à la livraison puis archivage selon obligations légales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
          <p className="mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p className="mb-4">
            Pour exercer ces droits, vous pouvez nous contacter :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Par email : touline_co@proton.me</li>
            <li>Par courrier : [À COMPLÉTER - Adresse postale]</li>
          </ul>
          <p>
            Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sécurité des données</h2>
          <p className="mb-4">
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
            pour protéger vos données personnelles contre :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>L'accès non autorisé</li>
            <li>La perte ou l'altération</li>
            <li>La divulgation accidentelle</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
          <p className="mb-4">
            Notre site n'utilise actuellement aucun cookie de tracking, publicité ou analyse.
          </p>
          <p>
            [À COMPLÉTER si vous ajoutez Google Analytics, Facebook Pixel ou tout autre outil de tracking]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Transfert de données hors UE</h2>
          <p>
            Nous ne transférons aucune donnée personnelle en dehors de l'Union Européenne.
            [À MODIFIER si vous utilisez des services américains ou hors UE]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Réclamation</h2>
          <p className="mb-4">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
            auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
          </p>
          <div className="space-y-2">
            <p>CNIL - Service des plaintes</p>
            <p>3 Place de Fontenoy - TSA 80715</p>
            <p>75334 PARIS CEDEX 07</p>
            <p>Tél : 01 53 73 22 22</p>
            <p>Site web : <a href="https://www.cnil.fr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
            La version en vigueur est toujours celle accessible sur notre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
          <p className="mb-2">
            Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
          </p>
          <p className="mb-2"><strong>Email :</strong> touline_co@proton.me</p>
          <p>[À COMPLÉTER - Adresse postale et téléphone]</p>
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

export default PrivacyPolicy;
