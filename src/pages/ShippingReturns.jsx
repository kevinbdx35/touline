const ShippingReturns = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Livraison & Retours</h1>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📦 Livraison</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Zones de livraison</h3>
          <p className="mb-4">
            Nous livrons actuellement en France métropolitaine.
            [À MODIFIER si vous livrez également en Corse, DOM-TOM, Europe, etc.]
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Délais de livraison</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <ul className="space-y-2">
              <li><strong>Produits en stock :</strong> Expédition sous 2-3 jours ouvrés</li>
              <li><strong>Commandes personnalisées :</strong> [À COMPLÉTER - ex: 1 à 2 semaines selon complexité]</li>
              <li><strong>Délai de transport :</strong> [À COMPLÉTER - ex: 2-3 jours ouvrés avec Colissimo]</li>
            </ul>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            <em>
              Les délais sont donnés à titre indicatif et peuvent varier en période de forte activité.
              Nous vous informerons par email de toute modification.
            </em>
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Frais de livraison</h3>
          <p className="mb-4">
            [À COMPLÉTER - Exemples :]
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Lettre suivie (produits légers) : [X]€</li>
            <li>Colissimo (France métropolitaine) : [X]€</li>
            <li>Colissimo suivi (France métropolitaine) : [X]€</li>
            <li>Livraison gratuite à partir de [X]€ d'achat</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Suivi de commande</h3>
          <p className="mb-4">
            Dès l'expédition de votre commande, vous recevrez un email avec le numéro de suivi
            vous permettant de suivre votre colis en temps réel.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Réception du colis</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-amber-900 mb-2">⚠️ Important</p>
            <p className="text-amber-900">
              Si votre colis présente des traces d'ouverture ou de choc, nous vous recommandons de :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-amber-900">
              <li>Refuser le colis OU accepter avec réserves écrites sur le bon de livraison</li>
              <li>Prendre des photos du colis endommagé</li>
              <li>Nous contacter immédiatement à : contact@touline-co.fr</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Retours et échanges</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Droit de rétractation</h3>
          <p className="mb-4">
            Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours
            à compter de la réception de votre commande pour exercer votre droit de rétractation,
            <strong> sauf pour les produits personnalisés ou fabriqués sur mesure</strong>.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Conditions de retour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
              <li>Le produit doit être retourné dans son état d'origine</li>
              <li>Non utilisé et non endommagé</li>
              <li>Dans son emballage d'origine si possible</li>
              <li>Accompagné de la facture</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Procédure de retour</h3>
          <ol className="list-decimal list-inside space-y-3 ml-4 mb-4">
            <li>
              <strong>Contactez-nous</strong> par email à contact@touline-co.fr en indiquant
              votre numéro de commande et le motif du retour
            </li>
            <li>
              <strong>Attendez notre confirmation</strong> avant d'expédier votre retour
            </li>
            <li>
              <strong>Renvoyez le produit</strong> à l'adresse que nous vous communiquerons
              <br />
              <span className="text-sm text-gray-600">
                ⚠️ Les frais de retour sont à votre charge sauf en cas de produit défectueux
              </span>
            </li>
            <li>
              <strong>Remboursement</strong> : Une fois le produit reçu et vérifié, nous procéderons
              au remboursement sous 14 jours par le même moyen de paiement utilisé lors de la commande
            </li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Produits défectueux</h3>
          <p className="mb-4">
            En cas de défaut de fabrication, contactez-nous dans les <strong>48 heures</strong>
            suivant la réception avec des photos du défaut.
          </p>
          <p className="mb-4">
            Nous nous engageons à :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Remplacer le produit défectueux gratuitement, OU</li>
            <li>Procéder au remboursement intégral (produit + frais de port)</li>
          </ul>
          <p className="text-sm text-gray-600">
            Les frais de retour d'un produit défectueux sont pris en charge par Touline & Co.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Échanges</h3>
          <p className="mb-4">
            Nous n'effectuons pas d'échanges directs. Pour recevoir un produit différent :
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Demandez un retour du produit initial (voir procédure ci-dessus)</li>
            <li>Passez une nouvelle commande pour le produit souhaité</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ Questions fréquentes</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je modifier mon adresse de livraison après validation de la commande ?
              </h3>
              <p className="text-gray-700">
                Oui, si votre commande n'a pas encore été expédiée. Contactez-nous au plus vite
                à contact@touline-co.fr en précisant votre numéro de commande et la nouvelle adresse.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Je n'ai pas reçu mon colis, que faire ?
              </h3>
              <p className="text-gray-700">
                Vérifiez d'abord auprès de votre facteur ou voisins. Si le colis reste introuvable,
                contactez-nous avec votre numéro de commande. Nous effectuerons une recherche auprès
                du transporteur.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Les couleurs correspondent-elles exactement aux photos ?
              </h3>
              <p className="text-gray-700">
                Nos photos sont les plus fidèles possibles. Toutefois, en raison du caractère artisanal
                de nos produits et des variations d'écrans, de légères différences peuvent apparaître.
                C'est ce qui rend chaque touline unique !
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Nous contacter</h2>
          <p className="mb-4">
            Pour toute question concernant votre livraison ou un retour :
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="mb-2"><strong>Email :</strong> contact@touline-co.fr</p>
            <p className="mb-2"><strong>Téléphone :</strong> [À COMPLÉTER]</p>
            <p><strong>Délai de réponse :</strong> Sous 48h ouvrées</p>
          </div>
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

export default ShippingReturns;
