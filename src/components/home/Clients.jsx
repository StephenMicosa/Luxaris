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

  .floating-quote {
    contain: layout paint;
    will-change: transform;
    transform: rotate(var(--card-rotate));
    transition: transform 240ms ease;
  }

  .floating-quote:hover {
    transform: translate3d(0, -6px, 0) rotate(var(--card-rotate));
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in-scale,
    .testimonial-card {
      animation: none;
      opacity: 1;
    }

    .floating-quote {
      transition: none;
    }

    .floating-quote:hover {
      transform: rotate(var(--card-rotate));
    }
  }
`;

export default function Clients() {
  const scrollRef = useScrollAnimation();

  return (
    <>
      <style>{clientStyles}</style>
      <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top,#fff7fb_0%,#fbf4f7_35%,#f8f1ee_100%)] py-20 px-4 animate-scroll" ref={scrollRef}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-rose-200/35 blur-2xl" />
          <div className="absolute right-0 top-32 h-64 w-64 rounded-full bg-amber-200/25 blur-2xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/25 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center space-y-4 animate-fade-in-scale max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-rose-900/80">
              Voix de nos partenaires
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-rose-950 leading-tight">
              Des phrases qui flottent comme des idées, pas comme des avis
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-7">
              Une section plus éditoriale, plus légère, et beaucoup moins “page d’avis Google”.
            </p>
          </div>

          <div className="hidden md:block relative h-176 rounded-[2.5rem] border border-white/70 bg-white/40 p-6 shadow-[0_20px_55px_rgba(74,0,26,0.08)]">
            <div className="absolute inset-6 rounded-4xl border border-white/70 border-dashed bg-white/20" aria-hidden="true" />
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className="floating-quote absolute"
                style={{
                  top: item.top,
                  left: item.left,
                  width: item.width,
                  animationDelay: item.floatDelay,
                  zIndex: index % 2 === 0 ? 2 : 1,
                  ["--card-rotate"]: `${item.rotate}deg`,
                }}
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-col gap-4">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="rounded-full border border-rose-900/10 bg-white/80 px-6 py-3 text-sm font-semibold text-rose-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
              Voir plus de retours
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
