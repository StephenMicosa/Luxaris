import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const contactReasons = [
  "Casting",
  "Mannequin réel",
  "Mannequin virtuel",
  "Production visuelle",
  "Partenariat & Presse",
  "Autre demande",
];

export default function ContactForm() {
  const scrollRef = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Contactez Luxaris | Agence de Mannequins</title>
        <meta
          name="description"
          content="Contactez Luxaris pour un casting, une réservation ou un projet de production."
        />
      </Helmet>

      <div
        className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-2xl md:p-10 animate-scroll"
        ref={scrollRef}
      >
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-4xl font-bold text-[#4A001A]">
            Contactez-nous
          </h2>
          <p className="text-slate-500">
            Une question ? Un projet ? Notre équipe est là pour vous répondre.
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label className="ml-1 text-sm font-semibold text-slate-700">Nom complet</label>
            <input
              type="text"
              placeholder="Ex: Jean Dupont"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="ml-1 text-sm font-semibold text-slate-700">Email professionnel</label>
            <input
              type="email"
              placeholder="nom@exemple.fr"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="ml-1 text-sm font-semibold text-slate-700">Service</label>
            <select
              className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
              required
            >
              <option value="">Sélectionnez un service...</option>
              {contactReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="ml-1 text-sm font-semibold text-slate-700">Message</label>
            <textarea
              rows="5"
              placeholder="Détaillez votre demande ici..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#4A001A] py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#320012] hover:scale-[1.01]"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </>
  );
}
