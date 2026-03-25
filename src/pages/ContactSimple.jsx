import { Helmet } from "react-helmet-async";

export default function ContactSimple() {
  return (
    <>
      <Helmet>
        <title>Contactez-nous | Luxaris</title>
        <meta
          name="description"
          content="Contactez l’équipe Luxaris pour toute question, demande d’information ou collaboration."
        />
      </Helmet>

      <main className="bg-white text-slate-900 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-[#4A001A] uppercase mb-3">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#4A001A] mb-4">
              Contactez-nous
            </h1>
            <p className="text-slate-600">
              Une question, une demande ou une collaboration à proposer ?
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-slate-600 mb-2">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#4A001A]"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-slate-600 mb-2">Email</label>
              <input
                type="email"
                placeholder="email@exemple.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#4A001A]"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-slate-600 mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Votre message..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#4A001A] resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A001A] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
