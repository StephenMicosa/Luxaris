import TarifsHeader from "../components/tarifs/TarifsHeader";
import Functionalities from "../components/tarifs/Functionalities";
import FAQ from "../components/faq/FAQ";
import { realMannequinsData, aiMannequinsData } from "../data/priceData";

// Helper component for rendering table rows
const PriceTableRow = ({ item, hoverColor = "rose-50" }) => {
    return (
        <tr className={`hover:bg-${hoverColor} transition-colors`}>
            <td className="px-6 py-5 font-bold text-[#4A001A]">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 bg-${item.dotColor} rounded-full`}></span>
                    {item.name}
                </div>
                {item.badge && (
                    <span className={`text-xs text-${item.badge.color}-600 font-semibold bg-${item.badge.color}-100 px-2 py-1 rounded-full mt-1 inline-block`}>
                        {item.badge.text}
                    </span>
                )}
            </td>
            <td className="px-6 py-5 text-slate-700">
                {item.details.length > 1 ? (
                    <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                {detail.icon === "clock" && (
                                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {detail.text}
                            </div>
                        ))}
                    </div>
                ) : (
                    item.details[0].text
                )}
            </td>
            <td className="px-6 py-5">
                {item.prices.length > 1 ? (
                    <div className="space-y-1">
                        {item.prices.map((price, idx) => (
                            <div key={idx} className={`text-lg font-bold text-${price.color}`}>
                                {price.amount}
                            </div>
                        ))}
                    </div>
                ) : item.prices[0].isVariable ? (
                    <span className={`text-lg font-bold text-${item.prices[0].color} bg-${item.prices[0].color.split('-')[0]}-50 px-3 py-1 rounded-lg`}>
                        {item.prices[0].amount}
                    </span>
                ) : (
                    <div className={`text-${item.prices[0].size || 'xl'} font-bold text-${item.prices[0].color}`}>
                        {item.prices[0].amount}
                    </div>
                )}
            </td>
        </tr>
    );
};

export default function Tarifs() {
    return (
        <div className="bg-linear-to-b from-slate-50 to-white">
            <div className="min-h-screen py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <TarifsHeader />

                    {/* Mannequins réels */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#4A001A] rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-[#4A001A]">Mannequins réels</h2>
                                <p className="text-slate-600 text-sm">Services professionnels avec mannequins humains</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-linear-to-r from-[#4A001A] to-rose-900">
                                        <tr>
                                            <th className="px-6 py-5 text-left font-bold text-white text-sm uppercase tracking-wider">Élément</th>
                                            <th className="px-6 py-5 text-left font-bold text-white text-sm uppercase tracking-wider">Détail</th>
                                            <th className="px-6 py-5 text-left font-bold text-white text-sm uppercase tracking-wider">Prix</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {realMannequinsData.map((item) => (
                                            <PriceTableRow key={item.id} item={item} hoverColor="rose-50" />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Mannequins irréels */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-[#4A001A] rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-[#4A001A]">Mannequins irréels</h2>
                                <p className="text-slate-600 text-sm">Solutions créées par intelligence artificielle</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-linear-to-r from-[#4A001A] to-rose-900">
                                        <tr>
                                            <th className="px-6 py-5 text-left font-bold text-white text-sm uppercase tracking-wider">Offre / Option</th>
                                            <th className="px-6 py-5 text-left font-bold text-white text-sm uppercase tracking-wider">Contenu</th>
                                            <th className="px-6 py-5 text-left font-bold text-white text-sm uppercase tracking-wider">Prix</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {aiMannequinsData.map((item) => (
                                            <PriceTableRow key={item.id} item={item} hoverColor="rose-50" />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
