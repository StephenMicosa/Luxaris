import { Users, HandCoins, Bot, FileText, Layers, Headphones, Sparkles } from 'lucide-react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const features = [
    {
        title: "Accès à des mannequins hybrides (IA & humains)",
        description: "Profils exclusifs, personnalisables selon l'identité et les besoins de votre marque.",
        icon: Users,
    },
    {
        title: "Direction artistique & accompagnement créatif",
        description: "Conseils stratégiques, moodboards et cohérence visuelle sur l'ensemble de vos campagnes.",
        icon: Sparkles,
    },
    {
        title: "Production visuelle optimisée",
        description: "Création rapide de visuels photo et vidéo, sans contraintes logistiques classiques.",
        icon: HandCoins,
    },
    {
        title: "Personnalisation avancée des modèles IA",
        description: "Ajustement des poses, expressions, styles, morphologies et univers créatifs.",
        icon: Bot,
    },
    {
        title: "Gestion simplifiée des droits d'utilisation",
        description: "Licences claires, usage multi-supports (web, social, print, ads).",
        icon: FileText,
    },
    {
        title: "Flexibilité & scalabilité",
        description: "Testez, adaptez et déployez vos campagnes à grande échelle, partout dans le monde.",
        icon: Layers,
    },
];

export default function Fonctionnalites() {
    const scrollRef = useScrollAnimation();
    return (
        <section className="py-15 animate-scroll" ref={scrollRef}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-sm font-semibold text-rose-950 mb-3 uppercase tracking-wide">Fonctionnalités</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Ce qui est inclus</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Libérez la puissance de nos fonctionnalités avancées pour propulser votre entreprise
                        vers de nouveaux sommets.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.title} className="h-full rounded-2xl text-center bg-transparent px-8 py-10 feature-card hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center h-12 w-15 bg-transparent text-rose-900 mb-5">
                                    <Icon className="h-10 w-10 border px-1 py-1 rounded-md bg-white border-white drop-shadow-lg" />
                                </div>
                                <h3 className="text-lg font-semibold text-rose-950 mb-2 leading-snug">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

