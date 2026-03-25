import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité Luxaris | Protection de Vos Données</title>
        <meta name="description" content="Politique de confidentialité complète de Luxaris. Découvrez comment nous protégeons, collectons et traitons vos données personnelles sur notre plateforme de mannequinat." />
        <meta name="keywords" content="politique confidentialité, Luxaris, protection données, mannequinat, RGPD, plateforme mannequins" />
        <meta name="author" content="Luxaris" />
        <meta property="og:title" content="Politique de Confidentialité Luxaris" />
        <meta property="og:description" content="Politique de confidentialité de Luxaris - Plateforme de mannequinat. Protection complète de vos données personnelles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxaris.com/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politique de Confidentialité Luxaris" />
        <meta name="twitter:description" content="Découvrez comment Luxaris protège vos données personnelles." />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <link rel="canonical" href="https://luxaris.com/privacy" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-6 py-16 text-slate-700 leading-relaxed">

        <h1 className="text-4xl font-bold text-[#5a0f23] mb-2">
          Politique de Confidentialité Luxaris
        </h1>

        <p className="text-lg text-slate-600 mb-2 font-semibold">
          Protection Complète de Vos Données Personnelles
        </p>

        <p className="text-sm text-slate-500 mb-8">
          Dernière mise à jour : 5 mars 2026
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded">
          <p className="text-sm text-amber-800">
            <strong>⚠️ Contenu temporaire :</strong> Cette page contient un contenu temporaire en attente de validation par nos équipes de direction et de conception. Le contenu définitif sera publié prochainement.
          </p>
          <p className="mb-6">
            <strong>Luxaris</strong> est une plateforme innovante dédiée au secteur du mannequinat et de la modélisation.
            Cette politique de confidentialité (« Luxaris », « Société », « nous », « notre » ou « nos »)
            décrit comment et pourquoi nous pouvons collecter, stocker, utiliser et/ou
            partager (« traiter ») vos informations lorsque vous utilisez nos services (« Services ») et notre plateforme de mannequinat.
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>
              Visitez notre site web à l’adresse{" "}
              <a
                href="https://luxaris.com"
                className="text-[#5a0f23] underline"
                target="_blank"
                rel="noreferrer"
              >
                https://luxaris.com
              </a>
            </li>
            <li>
              Créez et gérez un profil de mannequin ou d'agence
            </li>
            <li>
              Consultez nos portfolios et galeries de modèles
            </li>
            <li>
              Interagissez avec nous par email, formulaire de contact ou lors d'événements
            </li>
          </ul>

          <p className="mb-10">
            Cette politique vous aide à comprendre vos droits et vos choix en matière de vie privée.
            Si vous n'êtes pas d'accord avec nos politiques et pratiques, veuillez ne pas
            utiliser nos Services.
            <br />
            <br />
            Pour toute question :{" "}
            <a
              href="mailto:support@luxaris.com"
              className="text-[#5a0f23] underline"
            >
              support@luxaris.com
            </a>
          </p>

          <h2 className="text-xl font-semibold text-[#5a0f23] mb-4">
            RÉSUMÉ DES POINTS CLÉS
          </h2>

          <ul className="list-disc pl-6 mb-10 space-y-2">
            <li>
              <strong>Informations collectées :</strong> Données personnelles, données de profil,
              contenus médias (photos, vidéos), informations de contact et d'authentification.
            </li>
            <li>
              <strong>Finalité du traitement :</strong> Gérer votre profil, faciliter les connexions
              professionnelles, améliorer notre plateforme, assurer la sécurité.
            </li>
            <li>
              <strong>Partage des données :</strong> Uniquement avec votre consentement ou selon les
              dispositions légales.
            </li>
            <li>
              <strong>Vos droits :</strong> Accès, rectification, suppression de vos données
              (selon votre juridiction).
            </li>
            <li>
              <strong>Sécurité :</strong> Nous mettons en œuvre des mesures pour protéger vos données.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#5a0f23] mb-6 mt-8">
            Quelles Informations Collectons-nous sur Notre Plateforme ?
          </h2>

          <p className="mb-4 font-semibold text-base">
            En bref : Nous collectons les informations que vous nous fournissez et certaines données automatiquement lors de l'utilisation de Luxaris.
          </p>

          <h3 className="text-xl font-semibold text-[#5a0f23] mb-4 mt-6">Informations que vous nous fournissez :</h3>

          <ul className="list-disc pl-6 mb-8 space-y-1">
            <li>Nom complet et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Adresse physique et information de localisation</li>
            <li>Photographies et vidéos de portfolio</li>
            <li>Mesures et caractéristiques physiques (pour les mannequins)</li>
            <li>Expérience professionnelle et références</li>
            <li>Informations de paiement et données bancaires</li>
            <li>Identifiant de compte et mots de passe</li>
            <li>Préférences de communication et domaines d'intérêt</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#5a0f23] mb-4">
            Informations collectées automatiquement
          </h2>

          <p className="mb-6">
            Lors de votre utilisation de la plateforme, nous collectons automatiquement :
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-1">
            <li>Adresse IP et données de géolocalisation</li>
            <li>Type de navigateur et système d'exploitation</li>
            <li>Pages visitées et durée des sessions</li>
            <li>Interactions avec le contenu</li>
            <li>Cookies et technologies de suivi similaires</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#5a0f23] mb-6 mt-8">
            Comment Utilisons-nous Vos Données Personnelles ?
          </h2>

          <p className="mb-6">
            Luxaris utilise vos données personnelles pour les finalités suivantes :
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>Créer, maintenir et gérer votre compte</li>
            <li>Faciliter les connexions entre mannequins, agences et clients</li>
            <li>Afficher votre profil et portfolio sur la plateforme</li>
            <li>Traiter les candidatures et opportunités de casting</li>
            <li>Communiquer avec vous concernant votre compte et nos services</li>
            <li>Améliorer et personnaliser votre expérience utilisateur</li>
            <li>Assurer la sécurité et prévenir les fraudes</li>
            <li>Respecter nos obligations légales et réglementaires</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#5a0f23] mb-6 mt-8">
            Combien de Temps Conservons-nous Vos Données ?
          </h2>

          <p className="mb-6">
            Vos données sont conservées aussi longtemps que nécessaire pour fournir nos Services.
            Vous pouvez demander la suppression de votre compte à tout moment, ce qui entraînera
            la suppression de vos données personnelles.
          </p>

          <h2 className="text-2xl font-semibold text-[#5a0f23] mb-6 mt-8">
            Quels Sont Vos Droits Relatifs à la Confidentialité ?
          </h2>

          <p className="mb-6">
            Selon votre localisation, vous disposez de droits concernant vos données :
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
            <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
            <li><strong>Droit à l'oubli :</strong> Demander la suppression de vos données</li>
            <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition :</strong> Vous opposer à certains traitements</li>
          </ul>

          <p className="mb-10">
            Pour exercer ces droits, contactez-nous à :{" "}
            <a
              href="mailto:support@luxaris.com"
              className="text-[#5a0f23] underline font-semibold"
            >
              support@luxaris.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-[#5a0f23] mb-6 mt-8">
            Sécurité et Protection de Vos Données Personnelles
          </h2>

          <p className="mb-10">
            Nous mettons en place des mesures techniques et organisationnelles pour protéger
            vos données contre l'accès non autorisé, la perte ou la modification.
            Cependant, aucune transmission sur Internet n'est 100% sécurisée.
          </p>

          <h2 className="text-2xl font-semibold text-[#5a0f23] mb-6 mt-8">
            Nous Contacter Concernant Cette Politique de Confidentialité
          </h2>

          <p className="mb-4">
            Pour toute question concernant cette politique de confidentialité :
          </p>

          <p className="mb-10 p-4 bg-slate-50 rounded">
            <strong>Luxaris</strong><br />
            Email : <a href="mailto:support@luxaris.com" className="text-[#5a0f23] underline">support@luxaris.com</a><br />
            <span className="text-sm text-slate-600">Formulaire de contact : disponible sur notre site</span>
          </p>

          <div className="bg-slate-100 p-4 rounded text-sm text-slate-600">
            <p>
              <strong>Note :</strong> Cette page est sujette à modification. Une notification sera fournie
              en cas de changements significatifs de cette politique.
            </p>
          </div>
        </div>

      </main>
    </>
  );
}
