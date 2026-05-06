import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
// Assure-toi que le chemin vers ton hook d'email est le bon
import { sendEmail } from "../../hooks/emailService"; 

export const contactReasons = [
  "Casting",
  "Partenariat & Presse",
  "Autre demande",
];

export default function ContactForm() {
  const scrollRef = useScrollAnimation();
  const form = useRef();
  
  // États pour gérer l'envoi
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const response = await sendEmail(form, 'template_wb7gcnl');

    if (response.success) {
      setIsSent(true);
    } else {
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    }
    
    setIsSending(false);
  };

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
        {isSent ? (
          // VUE SUCCÈS
          <div className="text-center py-10">
            <div className="mb-4 text-5xl">✉️</div>
            <h2 className="mb-3 text-3xl font-bold text-[#4A001A]">
              Message envoyé !
            </h2>
            <p className="text-slate-500">
              Merci de nous avoir contactés.<br />
              Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>
        ) : (
          // VUE FORMULAIRE
          <>
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-4xl font-bold text-[#4A001A]">
                Contactez-nous
              </h2>
              <p className="text-slate-500">
                Une question ? Un projet ? Notre équipe est là pour vous répondre.
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label className="ml-1 text-sm font-semibold text-slate-700">Nom complet</label>
                <input
                  type="text"
                  name="user_name" // Variable EmailJS
                  placeholder="Ex: Jean Dupont"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="ml-1 text-sm font-semibold text-slate-700">Email professionnel</label>
                <input
                  type="email"
                  name="user_email" // Variable EmailJS
                  placeholder="nom@exemple.fr"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="ml-1 text-sm font-semibold text-slate-700">Service</label>
                <select
                  name="contact_service" // Variable EmailJS
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
                  name="message" // Variable EmailJS
                  rows="5"
                  placeholder="Détaillez votre demande ici..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#4A001A]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full rounded-xl py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 ${
                  isSending 
                    ? 'bg-[#8c4858] cursor-not-allowed' 
                    : 'bg-[#4A001A] hover:bg-[#320012] hover:scale-[1.01]'
                }`}
              >
                {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}