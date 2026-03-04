import TarifsHeader from "../components/tarifs/TarifsHeader";
import Functionalities from "../components/tarifs/Functionalities";
import FAQ from "../components/faq/FAQ";
import PricingTable from "../components/tarifs/PricingTable";
import { realMannequinsData, aiMannequinsData } from "../data/priceData";

export default function Tarifs() {
    return (
        <div className="bg-linear-to-b from-slate-50 to-white">
            <div className="min-h-screen py-8 sm:py-12 md:py-15 px-2 sm:px-4">
                <div className="max-w-7xl mx-auto">
                    <TarifsHeader />

                    <PricingTable
                        title="Mannequins réels"
                        subtitle="Services professionnels avec mannequins humains"
                        icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        data={realMannequinsData}
                        tableHeaders={["Élément", "Détail", "Prix"]}
                    />

                    <PricingTable
                        title="Mannequins irréels"
                        subtitle="Solutions créées par intelligence artificielle"
                        icon="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        data={aiMannequinsData}
                        tableHeaders={["Offre / Option", "Contenu", "Prix"]}
                    />
                </div>
            </div>

            <Functionalities />
            <FAQ />
        </div>
    );
}
