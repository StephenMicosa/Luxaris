import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-linear-to-b from-slate-50 to-white flex items-center justify-center px-4">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-6">
                            <div className="text-6xl font-bold text-[#5a0f23] mb-4">⚠️</div>
                            <h1 className="text-4xl font-bold text-slate-900 mb-2">
                                Oups ! Une erreur est survenue
                            </h1>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Nous nous excusons pour l'inconvénient. Notre équipe a été notifiée et nous travaillons à la résolution du problème.
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                                <p className="text-sm font-mono text-red-800 wrap-break-word">
                                    <strong>Erreur:</strong> {this.state.error.toString()}
                                </p>
                                {this.state.errorInfo && (
                                    <details className="mt-3">
                                        <summary className="cursor-pointer text-red-700 font-semibold">
                                            Détails techniques
                                        </summary>
                                        <pre className="mt-2 text-xs text-red-700 overflow-auto bg-red-100 p-2 rounded">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    </details>
                                )}
                            </div>
                        )}

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="w-full bg-[#5a0f23] hover:bg-[#4a0f1f] text-white font-semibold py-3 rounded-lg transition"
                            >
                                Retour à l'accueil
                            </button>
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold py-3 rounded-lg transition"
                            >
                                Réessayer
                            </button>
                        </div>

                        <p className="text-sm text-slate-500 mt-6">
                            Si le problème persiste,
                            <a href="/contact" className="text-[#5a0f23] underline hover:font-semibold">
                                {' '}contactez-nous
                            </a>
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
