import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Non Trouvée | 404 - Luxaris</title>
                <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil de Luxaris." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <main className="min-h-screen bg-linear-to-b from-slate-50 to-white flex items-center justify-center px-4 py-12">
                <div className="max-w-2xl w-full text-center">
                    {/* Code d'erreur */}
                    <div className="mb-8">
                        <div className="text-7xl md:text-8xl font-black text-[#5a0f23] opacity-10 mb-2">
                            404
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#5a0f23] mb-4">
                            Page non trouvée
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed">
                        Désolé, la page que vous recherchez n'existe pas. Elle a peut-être été supprimée ou l'URL est incorrecte.
                    </p>

                    <p className="text-slate-500 mb-12">
                        Découvrez nos autres pages ci-dessous ou retournez à l'accueil.
                    </p>

                    {/* Liens de navigation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        <Link
                            to="/"
                            className="block p-6 bg-white border-2 border-[#5a0f23] rounded-lg hover:bg-[#5a0f23] hover:text-white transition group"
                        >
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                                🏠 Accueil
                            </h3>
                            <p className="text-sm text-slate-600 group-hover:text-slate-100">
                                Retour à la page d'accueil
                            </p>
                        </Link>

                        <Link
                            to="/about"
                            className="block p-6 bg-white border-2 border-[#5a0f23] rounded-lg hover:bg-[#5a0f23] hover:text-white transition group"
                        >
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                                👥 À Propos
                            </h3>
                            <p className="text-sm text-slate-600 group-hover:text-slate-100">
                                Découvrez notre équipe et vision
                            </p>
                        </Link>

                        <Link
                            to="/pricing"
                            className="block p-6 bg-white border-2 border-[#5a0f23] rounded-lg hover:bg-[#5a0f23] hover:text-white transition group"
                        >
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                                💰 Tarifs
                            </h3>
                            <p className="text-sm text-slate-600 group-hover:text-slate-100">
                                Nos offres et prix transparents
                            </p>
                        </Link>

                        <Link
                            to="/contact"
                            className="block p-6 bg-white border-2 border-[#5a0f23] rounded-lg hover:bg-[#5a0f23] hover:text-white transition group"
                        >
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                                📧 Contact
                            </h3>
                            <p className="text-sm text-slate-600 group-hover:text-slate-100">
                                Nous contacter pour vos projets
                            </p>
                        </Link>
                    </div>

                    {/* Bouton CTA */}
                    <button
                        onClick={() => window.location.href = '/'}
                        className="inline-block bg-[#5a0f23] hover:bg-[#4a0f1f] text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg"
                    >
                        Aller à l'accueil
                    </button>

                    {/* Texte d'aide */}
                    <p className="text-sm text-slate-500 mt-8">
                        Besoin d'aide ?
                        <Link to="/faq" className="text-[#5a0f23] underline hover:font-semibold">
                            {' '}Consultez notre FAQ
                        </Link>
                        {' '}ou
                        <Link to="/contact" className="text-[#5a0f23] underline hover:font-semibold">
                            {' '}contactez-nous
                        </Link>
                    </p>
                </div>
            </main>
        </>
    );
}
