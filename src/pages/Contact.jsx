import { useScrollAnimation } from "../hooks/useScrollAnimation";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/contact/ContactForm";

const contactStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .contact-text {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .contact-text-desc {
    animation-delay: 0.2s;
  }
`;

export default function Contact() {
  const scrollRef = useScrollAnimation();

  return (
    <main className="bg-white text-slate-900">
      <style>{contactStyles}</style>
      <section className="min-h-[70vh] flex flex-col items-center justify-center py-15 px-4 text-center bg-slate-50 animate-scroll" ref={scrollRef}>
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A001A] mb-6 contact-text">
          Parlons-en
        </h1>
        <p className="max-w-2xl text-slate-600 mb-12 contact-text contact-text-desc">
          Rejoignez-nous pour explorer des solutions sur mesure, discuter des
          tendances du secteur et collaborer afin de trouver les meilleures
          stratégies pour votre réussite.
        </p>

        <ContactForm />
      </section>
    </main>
  );
}
