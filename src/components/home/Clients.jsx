import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useState } from "react";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const INITIAL_VISIBLE = 6;
const VISIBLE_STEP = 3;

const fallbackRotations = [-6, 4, 7, -3, -8, -4, 5, -5, 6, -2];
const fallbackOffsets = [0, 12, -8, 10, -6, 14, -4, 8, -10, 6];

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

  @keyframes floatGentle {
    0%, 100% {
      transform: translate3d(0, var(--static-offset, 0px), 0) rotate(var(--card-rotate));
    }
    50% {
      transform: translate3d(0, calc(var(--static-offset, 0px) - 10px), 0) rotate(calc(var(--card-rotate) + 0.8deg));
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
    will-change: transform;
    overflow: visible;
    animation: floatGentle var(--float-duration, 9s) ease-in-out infinite;
    animation-delay: var(--float-delay, 0s);
    transition: transform 240ms ease;
  }

  .floating-quote:hover {
    transform: translate3d(0, calc(var(--static-offset, 0px) - 6px), 0) rotate(var(--card-rotate));
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in-scale,
    .testimonial-card {
      animation: none;
      opacity: 1;
    }

    .floating-quote {
      animation: none;
      transition: none;
      transform: translate3d(0, var(--static-offset, 0px), 0) rotate(var(--card-rotate));
    }

    .floating-quote:hover {
      transform: translate3d(0, var(--static-offset, 0px), 0) rotate(var(--card-rotate));
    }
  }
`;

export default function Clients() {
  const scrollRef = useScrollAnimation();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const canShowMore = visibleCount < testimonials.length;

  const handleShowMore = () => {
    setVisibleCount((current) => Math.min(current + VISIBLE_STEP, testimonials.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

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

          <div className="relative rounded-[2.5rem] border border-white/70 bg-white/40 p-5 md:p-6 shadow-[0_20px_55px_rgba(74,0,26,0.08)]">
            <div className="absolute inset-6 rounded-[2rem] border border-white/70 border-dashed bg-white/20" aria-hidden="true" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {visibleTestimonials.map((item, index) => {
                const rotate = item.rotate ?? fallbackRotations[index % fallbackRotations.length];
                const offset = fallbackOffsets[index % fallbackOffsets.length];

                return (
                  <div
                    key={item.name}
                    className="floating-quote mx-auto w-full max-w-[19rem]"
                    style={{
                      ["--card-rotate"]: `${rotate}deg`,
                      ["--float-delay"]: item.floatDelay ?? `${(index % 6) * 0.22}s`,
                      ["--float-duration"]: `${8.5 + (index % 3) * 1.1}s`,
                      ["--static-offset"]: `${offset}px`,
                    }}
                  >
                    <TestimonialCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            {canShowMore ? (
              <button
                type="button"
                onClick={handleShowMore}
                className="rounded-full border border-rose-900/10 bg-white/85 px-6 py-3 text-sm font-semibold text-rose-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Voir plus de retours
              </button>
            ) : (
              testimonials.length > INITIAL_VISIBLE && (
                <button
                  type="button"
                  onClick={handleShowLess}
                  className="rounded-full border border-rose-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-rose-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Voir moins
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
