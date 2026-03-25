import { Helmet } from "react-helmet-async";

export default function ContactFooter() {
  return (
    <>
      <Helmet>
        <title>Contactez Luxaris</title>
        <meta
          name="description"
          content="Contactez Luxaris pour toute demande d'information."
        />
      </Helmet>

      <main className="bg-white text-slate-900 min-h-screen">
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8 text-left">
            <h1 className="text-4xl font-bold text-center text-[#4A001A] mb-8">
              Contactez nous
            </h1>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-slate-600">Nom</label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full rounded-lg border px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input
                  type="email"
                  placeholder="email@exemple.com"
                  className="w-full rounded-lg border px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea
                  rows="6"
                  placeholder="Votre message..."
                  className="w-full rounded-lg border px-4 py-3"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#4A001A] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
