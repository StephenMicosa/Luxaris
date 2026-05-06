import { Helmet } from "react-helmet-async";
import ContactForm from "../components/contact/ContactForm";
export default function ContactFooter() {
  return (
    <>
      <Helmet>
        <title>Contactez Luxaris | Agence</title>
        <meta
          name="description"
          content="Contactez Luxaris pour toute demande d'information."
        />
      </Helmet>

      <main className="bg-slate-50 text-slate-900 min-h-screen">
        <section className="min-h-[80vh] flex items-center justify-center px-4 pt-10 pb-20 md:pt-10">
          
          <ContactForm />

        </section>
      </main>
    </>
  );
}