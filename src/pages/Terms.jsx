import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "1. Objet",
    body: ["Les présentes conditions régissent l’utilisation du site Luxaris et définissent les droits et obligations des utilisateurs."],
  },
  {
    title: "2. Accès au site",
    body: [
      "Le site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet.",
      "Luxaris se réserve le droit de modifier, suspendre ou interrompre le site à tout moment, sans préavis.",
    ],
  },
  {
    title: "3. Contenu du site",
    body: [
      "L’ensemble des contenus présents sur le site (textes, images, visuels, mannequins virtuels, créations) est protégé par le droit de la propriété intellectuelle.",
      "Toute reproduction, modification ou utilisation sans autorisation écrite est strictement interdite.",
    ],
  },
  {
    title: "4. Responsabilité",
    body: [
      "Luxaris s’efforce de fournir des informations fiables et à jour, mais ne garantit pas leur exactitude ou leur exhaustivité.",
      "L’utilisateur est seul responsable de l’utilisation qu’il fait du site.",
    ],
  },
  {
    title: "5. Projets et collaborations",
    body: [
      "Toute demande effectuée via le site ne constitue pas un engagement contractuel.",
      "Un devis ou contrat sera systématiquement établi avant toute collaboration.",
    ],
  },
  {
    title: "6. Mannequins réels et virtuels",
    body: [
      "Luxaris est une agence spécialisée dans les mannequins réels et virtuels.",
      "Dans une démarche éthique et de protection de l’image, les mannequins réels ne sont pas intégrés dans des contenus générés par intelligence artificielle. L’intégrité et l’identité des mannequins sont strictement respectées.",
    ],
  },
  {
    title: "7. Liens externes",
    body: ["Le site peut contenir des liens vers des sites externes. Luxaris ne saurait être tenu responsable de leur contenu."],
  },
  {
    title: "8. Modification des conditions",
    body: [
      "Luxaris se réserve le droit de modifier les présentes conditions à tout moment.",
      "Les utilisateurs sont invités à les consulter régulièrement.",
    ],
  },
  {
    title: "9. Droit applicable",
    body: [
      "Les présentes conditions sont régies par le droit français.",
      "En cas de litige, les tribunaux compétents seront ceux du ressort d’Aix-en-Provence.",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Conditions d’utilisation | Luxaris</title>
        <meta
          name="description"
          content="Conditions d’utilisation du site Luxaris."
        />
      </Helmet>

      <main className="mx-auto max-w-4xl px-5 pt-28 pb-16 text-slate-700 sm:px-6 md:pt-36">
        <h1 className="mb-3 text-3xl font-bold uppercase text-[#4A001A] sm:text-4xl">
          Conditions d’utilisation - Luxaris
        </h1>
        <p className="mb-10 text-sm font-semibold text-slate-500">
          Dernière mise à jour : 6 mai 2026
        </p>

        <div className="space-y-9 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xl font-semibold text-[#4A001A]">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mb-3">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
