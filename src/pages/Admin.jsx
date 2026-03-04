import { useState } from 'react';
import { Lock, LogOut, Menu, X, LayoutDashboard, Users, Settings, BarChart3, Palette, DollarSign } from 'lucide-react';

const adminPassword = 'luxaris2024';

const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'mannequins', label: 'Mannequins IA', icon: Users },
    { id: 'pricing', label: 'Forfaits', icon: DollarSign },
    { id: 'content', label: 'Contenu', icon: Palette },
    { id: 'analytics', label: 'Analytiques', icon: BarChart3 },
    { id: 'settings', label: 'Paramètres', icon: Settings },
];

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [currentSection, setCurrentSection] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === adminPassword) {
            setIsAuthenticated(true);
            setPassword('');
            setError('');
        } else {
            setError('Mot de passe incorrect');
            setPassword('');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        setError('');
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-[#4A001A] p-3 rounded-lg">
                                <Lock className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-center text-[#4A001A] mb-2">
                            Admin Luxaris
                        </h1>
                        <p className="text-center text-slate-600 mb-6">
                            Accédez à l'espace administrateur
                        </p>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Entrez votre mot de passe"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#4A001A] focus:border-transparent outline-none transition"
                                />
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[#4A001A] text-white py-2 rounded-lg font-semibold hover:bg-[#5a0029] transition duration-300"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 flex">
            {/* Sidebar Navigation */}
            <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} overflow-y-auto`}>
                <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-[#4A001A]">Luxaris</h2>
                    <p className="text-xs text-slate-500 mt-1">Admin Panel</p>
                </div>

                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setCurrentSection(item.id);
                                    setMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentSection === item.id
                                        ? 'bg-[#4A001A] text-white'
                                        : 'text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-200 mt-auto">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
                    >
                        <LogOut className="h-5 w-5" />
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
                    <div className="px-4 md:px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold text-[#4A001A]">Luxaris Admin</h1>
                                <p className="text-sm text-slate-600">
                                    {navItems.find(item => item.id === currentSection)?.label}
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 p-4 md:p-6 overflow-auto">
                    {currentSection === 'dashboard' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Tableau de bord</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#4A001A]">
                                    <p className="text-slate-600 text-sm">Mannequins IA</p>
                                    <p className="text-3xl font-bold text-[#4A001A] mt-2">42</p>
                                </div>
                                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-rose-600">
                                    <p className="text-slate-600 text-sm">Forfaits Actifs</p>
                                    <p className="text-3xl font-bold text-rose-600 mt-2">5</p>
                                </div>
                                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
                                    <p className="text-slate-600 text-sm">Utilisateurs</p>
                                    <p className="text-3xl font-bold text-blue-600 mt-2">234</p>
                                </div>
                                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
                                    <p className="text-slate-600 text-sm">Revenue</p>
                                    <p className="text-3xl font-bold text-green-600 mt-2">€12,4K</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentSection === 'mannequins' && (
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Gestion des Mannequins IA</h2>
                            <div className="bg-white rounded-lg shadow p-6">
                                <p className="text-slate-600">Section de gestion des mannequins IA en développement...</p>
                            </div>
                        </div>
                    )}

                    {currentSection === 'pricing' && (
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Gestion des Forfaits</h2>
                            <div className="bg-white rounded-lg shadow p-6">
                                <p className="text-slate-600">Section de gestion des forfaits en développement...</p>
                            </div>
                        </div>
                    )}

                    {currentSection === 'content' && (
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Gestion du Contenu</h2>
                            <div className="bg-white rounded-lg shadow p-6">
                                <p className="text-slate-600">Section de gestion du contenu en développement...</p>
                            </div>
                        </div>
                    )}

                    {currentSection === 'analytics' && (
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Analytiques</h2>
                            <div className="bg-white rounded-lg shadow p-6">
                                <p className="text-slate-600">Section des analytiques en développement...</p>
                            </div>
                        </div>
                    )}

                    {currentSection === 'settings' && (
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Paramètres</h2>
                            <div className="bg-white rounded-lg shadow p-6">
                                <p className="text-slate-600">Section des paramètres en développement...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
