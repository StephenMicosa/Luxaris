import TeamCard from "./TeamCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const teamStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
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
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .team-card {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
  }
`;

export default function TeamSection({ team }) {
    const scrollRef = useScrollAnimation();

    return (
        <>
            <style>{teamStyles}</style>
            <section className="py-20 px-6 animate-scroll" ref={scrollRef}>
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-xs font-semibold tracking-widest text-[#4A001A] uppercase animate-fade-in-up">
                        NOTRE ÉQUIPE
                    </p>

                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#4A001A] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Tout est une question de personnes
                    </h2>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((m, index) => (
                            <div
                                key={m.name}
                                className="team-card"
                                style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                            >
                                <TeamCard name={m.name} role={m.role} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
