import { Search } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const searchStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .search-faq {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;

export default function SearchFAQ() {
    const [search, setSearch] = useState('');
    const scrollRef = useScrollAnimation();

    return (
        <>
            <style>{searchStyles}</style>
            <div className="w-full space-y-3 animate-scroll search-faq" ref={scrollRef}>
                <h2 className="text-base md:text-2xl font-semibold text-[#4A001A] text-center">
                    Comment pouvons-nous vous aider ?
                </h2>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border text-[#4A001A] border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4A001A] transition text-sm md:text-base"
                    />
                </div>
            </div>
        </>
    );
}
