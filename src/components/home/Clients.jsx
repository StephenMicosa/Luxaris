import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const clientStyles = `
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fade-in-scale {
    animation: fadeInScale 0.6s ease-out forwards;
  }
  
  .testimonial-card {
    animation: fadeInScale 0.6s ease-out forwards;
    opacity: 0;
  }
  
  .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
  .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
  .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
  .testimonial-card:nth-child(4) { animation-delay: 0.4s; }
  .testimonial-card:nth-child(5) { animation-delay: 0.5s; }
  .testimonial-card:nth-child(6) { animation-delay: 0.6s; }
`;

export default function Clients() {
  const scrollRef = useScrollAnimation();

  return (
    <>
      <style>{clientStyles}</style>
      <section className="w-full bg-[#fbf8fb] py-16 px-4 animate-scroll" ref={scrollRef}>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="text-center space-y-3 animate-fade-in-scale">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-900">
              Nos marques / collaborations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-950 leading-tight">
              Découvrez les retours de nos <br className="hidden md:block" /> collaborations
            </h2>
          </div>

          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>

          <div className="md:hidden max-h-130 overflow-y-auto snap-y snap-mandatory pr-1 flex flex-col gap-4">
            {testimonials.map((item) => (
              <div key={item.name} className="snap-start">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-5 py-2 rounded-full bg-rose-950 text-white font-semibold text-sm shadow hover:bg-rose-900 transition">
              Voir plus
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
