import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const mannequinStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(35px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes elegantFlip {
    0%   { transform: rotateY(0deg); }
    20%  { transform: rotateY(0deg); }
    50%  { transform: rotateY(180deg); }
    70%  { transform: rotateY(180deg); }
    100% { transform: rotateY(360deg); }
  }

  .fade-card {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .flip-card {
    perspective: 1200px;
    width: 100%;
    max-width: 520px;
    height: 320px;
    margin: 0 auto;
    cursor: grab;
  }

  .flip-card:active {
    cursor: grabbing;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: elegantFlip 9s ease-in-out infinite;
  }

  .flip-card:hover .flip-card-inner {
    animation-play-state: paused;
  }

  .flip-face {
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .flip-face video,
  .flip-face img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .flip-back {
    transform: rotateY(180deg);
    background: linear-gradient(180deg, #4A001A, #6b0f1a);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }

  .flip-back-content h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .flip-back-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.9);
  }

  @media (max-width: 768px) {
    .flip-card {
      max-width: 100%;
      height: 260px;
    }

    .flip-back-content h4 {
      font-size: 1.4rem;
    }

    .flip-back-content p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

function CardBlock({ title, description, videoSrc, reverse = false, linkTo = "/contact" }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
    >
      <div className="text-center lg:text-left">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4A001A] mb-3">
          NOS SOLUTIONS
        </p>

        <h3 className="text-3xl md:text-4xl font-bold text-[#4A001A] mb-5">
          {title}
        </h3>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          {description}
        </p>

        <div className="mt-8">
          <Link
            to={linkTo}
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-[#4A001A] text-white font-semibold shadow hover:opacity-90 transition"
          >
            Accéder
          </Link>
        </div>
      </div>

      <div className="flip-card select-none">
        <div className="flip-card-inner">
          <div className="flip-face bg-white">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="flip-face flip-back">
            <div className="flip-back-content">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Mannequins() {
  const scrollRef = useScrollAnimation();

  return (
    <>
      <style>{mannequinStyles}</style>

      <section
        className="w-full bg-white py-20 px-4 animate-scroll"
        ref={scrollRef}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-card">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A001A] mb-3">
              NOS MANNEQUINS
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#4A001A] mb-5">
              Deux approches pour répondre aux besoins des marques
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Luxaris propose des mannequins réels et des mannequins IA pour
              accompagner les marques dans leurs campagnes, leurs shootings et
              leurs productions visuelles.
            </p>
          </div>

          <div className="space-y-24">
            <CardBlock
              title="Mannequin réel"
              description="Des profils humains pour les shootings, campagnes, castings et contenus où l’authenticité, la présence réelle et l’expression naturelle sont essentielles."
              videoSrc="../assets/video/mannequin-reel.mp4"
              linkTo="/contact"
            />

            <CardBlock
              title="Mannequin IA"
              description="Des mannequins générés avec l’intelligence artificielle pour produire rapidement des visuels premium, cohérents, innovants et adaptables aux besoins créatifs."
              videoSrc="../assets/video/mannequin-ia.mp4"
              reverse
              linkTo="/ai-models"
            />
          </div>
        </div>
      </section>
    </>
  );
}
