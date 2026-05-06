import { Helmet } from "react-helmet-async";

const privacySections = [
  {
    title: "1. Introduction",
    body: [
      "La présente politique de confidentialité a pour objectif d’informer les utilisateurs du site Luxaris sur la manière dont leurs données personnelles sont collectées, utilisées et protégées.",
    ],
  },
  {
    title: "2. Responsable du traitement",
    body: [
      "Le responsable du traitement des données est : Luxaris – Agence de mannequins réels et virtuels.",
      "Localisation : Aix-en-Provence, France",
      "Email : luxaris.agency@gmail.com",
    ],
  },
  {
    title: "3. Données collectées",
    list: [
      "Nom et prénom",
      "Adresse email",
      "Numéro de téléphone (le cas échéant)",
      "Informations liées à votre demande (brief, projet, collaboration…)",
      "Données de navigation (adresse IP, cookies, type de navigateur…)",
    ],
  },
  {
    title: "4. Finalité de la collecte",
    list: [
      "Répondre à vos demandes et prises de contact",
      "Gérer les projets et collaborations",
      "Améliorer l’expérience utilisateur",
      "Assurer la sécurité du site",
    ],
  },
  {
    title: "5. Base légale",
    list: [
      "Votre consentement",
      "L’exécution de mesures précontractuelles ou contractuelles",
      "L’intérêt légitime de Luxaris",
    ],
  },
  {
    title: "6. Durée de conservation",
    list: [
      "Pendant la durée nécessaire au traitement de votre demande",
      "Jusqu’à 3 ans après le dernier contact à des fins commerciales",
    ],
  },
  {
    title: "7. Partage des données",
    body: ["Les données personnelles ne sont jamais vendues. Elles peuvent être partagées uniquement avec :"],
    list: [
      "Des prestataires techniques (hébergement, outils digitaux…)",
      "Les autorités compétentes en cas d’obligation légale",
    ],
  },
  {
    title: "8. Sécurité",
    body: [
      "Luxaris met en œuvre des mesures techniques et organisationnelles adaptées afin de garantir la sécurité et la confidentialité de vos données.",
    ],
  },
  {
    title: "9. Vos droits",
    body: ["Conformément au RGPD, vous disposez des droits suivants :"],
    list: [
      "Droit d’accès",
      "Droit de rectification",
      "Droit de suppression",
      "Droit d’opposition",
      "Droit à la portabilité",
    ],
    footer: "Vous pouvez exercer vos droits à tout moment en contactant : luxaris.agency@gmail.com",
  },
  {
    title: "10. Cookies",
    body: ["Le site Luxaris utilise des cookies afin de :"],
    list: ["Améliorer votre navigation", "Mesurer l’audience"],
    footer: "Vous pouvez modifier vos préférences via les paramètres de votre navigateur.",
  },
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité Luxaris</title>
        <meta
          name="description"
          content="Politique de confidentialité de Luxaris, agence de mannequins réels et virtuels."
        />
      </Helmet>

      <main className="mx-auto max-w-4xl px-5 pt-28 pb-16 text-slate-700 sm:px-6 md:pt-36">
        <h1 className="mb-3 text-3xl font-bold text-[#4A001A] sm:text-4xl">
          Politique de Confidentialité de Luxaris
        </h1>
        <p className="mb-10 text-sm font-semibold text-slate-500">
          Dernière mise à jour : 6 mai 2026
        </p>

        <div className="space-y-9 leading-relaxed">
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xl font-semibold text-[#4A001A]">{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mb-3">{paragraph}</p>
              ))}
              {section.list && (
                <ul className="list-disc space-y-1 pl-6">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p className="mt-3">{section.footer}</p>}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
