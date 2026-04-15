import { Helmet } from 'react-helmet-async';
import SearchFAQ from "../components/faq/searchFaq";
import FAQAccordion from "../components/faq/FAQAccordion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQTitle from "../components/faq/FAQTitle"
import FAQHeader from "../components/faq/FAQHeader"

export default function FAQPage() {
    const scrollRef = useScrollAnimation();

    return (
        <>
            <Helmet>
                <title>FAQ Luxaris | Questions Fréquemment Posées sur le Mannequinat</title>
                <meta name="description" content="Centre d'aide Luxaris. Trouvez les réponses à toutes vos questions sur nos services de mannequinat, nos tarifs et nos solutions créatives." />
                <meta name="keywords" content="FAQ Luxaris, questions mannequinat, support mannequins, aide plateforme, centre d'aide" />
                <meta property="og:title" content="FAQ - Luxaris" />
                <meta property="og:description" content="Trouvez les réponses à vos questions concernant les services de Luxaris." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://luxaris.com/faq" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://luxaris.com/faq" />
            </Helmet>

            <div className="min-h-screen bg-white">
                {/* Section héros */}
                <section
                    ref={scrollRef}
                    className="animate-scroll px-4 py-16 md:py-24 flex items-center"
                >
                    <div className="max-w-4xl mx-auto w-full space-y-6">
                        <div className="text-center space-y-2 md:space-y-4">
                            <FAQTitle />
                            <h1 className="text-3xl md:text-5xl font-bold text-[#4A001A] leading-tight">
                                Centre d&apos;aide
                            </h1>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                Trouvez les réponses à vos questions et découvrez comment Luxaris peut transformer vos campagnes.
                            </p>
                        </div>
                        <SearchFAQ />

                    </div>
                </section>

                {/* Section de recherche et FAQ */}
                <section className="px-4 py-12 md:py-16 bg-slate-50">
                    <div className="max-w-3xl mx-auto w-full space-y-12">
                        <FAQHeader />
                        <FAQAccordion />
                    </div>
                </section>

            </div>
        </>
    );
}
