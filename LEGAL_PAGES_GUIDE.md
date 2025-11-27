# Guide des Pages Légales - Touline & Co

## 📄 Pages créées

Quatre pages légales ont été créées dans le dossier `src/pages/` :

1. **LegalNotice.jsx** - Mentions légales
2. **TermsOfSale.jsx** - Conditions générales de vente (CGV)
3. **PrivacyPolicy.jsx** - Politique de confidentialité (RGPD)
4. **ShippingReturns.jsx** - Livraison & Retours

## ⚠️ Important : Informations à compléter

Toutes les pages contiennent des sections marquées **[À COMPLÉTER]** que vous devez renseigner avec vos vraies informations :

### Informations essentielles à ajouter :

- **Numéro SIRET** et forme juridique
- **Adresse complète** du siège social
- **Numéro de téléphone**
- **Informations hébergeur** (si GitHub Pages : voir ci-dessous)
- **Moyens de paiement** acceptés
- **Délais de fabrication** précis
- **Tarifs et modalités de livraison**
- **Coordonnées du médiateur** de la consommation

### Si vous utilisez GitHub Pages :

```
Hébergeur : GitHub, Inc.
Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
Site web : https://github.com
```

## 🔗 Comment rendre les pages accessibles ?

Actuellement, les pages légales sont créées mais **non accessibles depuis le site**. Voici 3 options :

### Option 1 : Modales (Simple, sans React Router)

Affichez les pages dans des fenêtres modales au clic sur les liens du footer.

**Avantages** :
- Pas besoin d'installer React Router
- Reste sur une application mono-page
- Rapide à implémenter

**Inconvénients** :
- Pas d'URL dédiée pour chaque page
- Impossible de partager un lien direct vers les CGV par exemple

### Option 2 : React Router (Recommandé pour le long terme)

Installez React Router pour avoir de vraies pages avec URLs distinctes.

```bash
npm install react-router-dom
```

**Avantages** :
- URLs propres (/mentions-legales, /cgv, etc.)
- Partage de liens possibles
- Meilleure expérience utilisateur
- SEO amélioré

**Inconvénients** :
- Nécessite une configuration

### Option 3 : Fichiers HTML statiques

Convertissez les composants en pages HTML statiques simples.

**Avantages** :
- Très simple
- Pas de JavaScript nécessaire

**Inconvénients** :
- Duplication du header/footer
- Perte de cohérence visuelle

## 📋 Checklist avant mise en ligne

- [ ] Compléter TOUTES les sections [À COMPLÉTER]
- [ ] Vérifier la conformité juridique avec un professionnel
- [ ] Ajouter vos vraies coordonnées (SIRET, adresse, téléphone)
- [ ] Définir les moyens de paiement acceptés
- [ ] Préciser les délais et tarifs de livraison
- [ ] Trouver et ajouter un médiateur de la consommation
- [ ] Rendre les pages accessibles (Option 1, 2 ou 3)
- [ ] Tester tous les liens du footer

## 🔒 Conformité RGPD

La page de Politique de Confidentialité est conforme au RGPD mais **doit être adaptée** si vous :
- Ajoutez Google Analytics ou autre outil de tracking
- Utilisez des cookies
- Transférez des données hors UE
- Sous-traitez à des prestataires tiers

## 📞 Ressources utiles

- **CNIL** : https://www.cnil.fr (Guide RGPD)
- **Médiateurs agréés** : https://www.economie.gouv.fr/mediation-conso
- **Service-public.fr** : Informations sur les obligations légales e-commerce

## ❓ Besoin d'aide ?

Ces pages sont des templates génériques. Pour une conformité totale :
1. Consultez un avocat spécialisé en droit du e-commerce
2. Utilisez un générateur de CGV professionnel
3. Contactez la CCI de votre région pour un accompagnement

---

**Note** : Ces documents sont fournis à titre informatif uniquement et ne constituent pas un conseil juridique.
