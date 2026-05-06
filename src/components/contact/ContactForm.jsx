import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const contactReasons = [
  "Casting / Devenir Mannequin",
  "Réservation Mannequin pour un projet",
  "Partenariat & Presse",
  "Autre demande"
];

export default function ContactFooter() {
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

      <main className="bg-slate-50 text-slate-900 min-h-screen">
        <section className="min-h-[90vh] flex items-center justify-center px-4 pt-28 pb-20 md:pt-36">
          <div 
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-left animate-scroll"
            ref={scrollRef}
          >
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-[#4A001A] mb-3">
                Contactez-nous
              </h1>
              <p className="text-slate-500">
                Une question ? Un projet ? Notre équipe est là pour vous répondre.
              </p>
            </div>

            <form className="space-y-6">
              {/* Nom Complet */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Nom complet</label>
                <input
                  type="text"
                  placeholder="Ex: Jean Dupont"
                  className="w-full rounded-xl border-slate-200 border px-4 py-3 focus:ring-2 focus:ring-[#4A001A] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email professionnel</label>
                <input
                  type="email"
                  placeholder="nom@exemple.fr"
                  className="w-full rounded-xl border-slate-200 border px-4 py-3 focus:ring-2 focus:ring-[#4A001A] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Objet du contact (C'est ce qui manquait !) */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Pourquoi nous contactez-vous ?</label>
                <select 
                  className="w-full rounded-xl border-slate-200 border px-4 py-3 focus:ring-2 focus:ring-[#4A001A] focus:border-transparent outline-none transition bg-white cursor-pointer"
                  required
                >
                  <option value="">Sélectionnez un motif...</option>
                  {contactReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Détaillez votre demande ici..."
                  className="w-full rounded-xl border-slate-200 border px-4 py-3 focus:ring-2 focus:ring-[#4A001A] focus:border-transparent outline-none transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A001A] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#320012] transform hover:scale-[1.01] transition-all duration-200 shadow-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}