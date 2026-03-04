import { useState } from "react";
import TarifsHeader from "../components/tarifs/TarifsHeader";
import PricingCard from "../components/tarifs/PricingCard";
import Functionalities from "../components/tarifs/Functionalities";
import FAQTitle from "../components/faq/FAQTitle";
import FAQ from "../components/faq/FAQ";

export default function Tarifs() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="bg-slate-50">
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <TarifsHeader isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                        <PricingCard type="standard" />
                        <PricingCard type="custom" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <Functionalities />

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
}
