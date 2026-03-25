import { Suspense } from 'react';

export default function PageLoader() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="text-center">
                <div className="mb-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5a0f23] mx-auto"></div>
                </div>
                <p className="text-slate-600 font-medium">Chargement...</p>
            </div>
        </div>
    );
}

export function withSuspense(Component) {
    return (
        <Suspense fallback={<PageLoader />}>
            <Component />
        </Suspense>
    );
}
