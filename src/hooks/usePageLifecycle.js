import { useEffect } from 'react';

/**
 * Hook de gestion du cycle de vie de la page pour améliorer la compatibilité bfcache
 * (back-forward cache) du navigateur.
 * 
 * Nettoie toutes les ressources actives qui pourraient empêcher la mise en cache.
 * Includes:
 * - Suppression des event listeners
 * - Fermeture des timers/intervals
 * - Nettoyage des connexions API
 * - Gestion des états persistants
 */
export const usePageLifecycle = () => {
    useEffect(() => {
        // Fonction appelée quand la page est restaurée du cache (forward/back)
        const handlePageShow = (event) => {
            if (event.persisted) {
                console.log('📱 Page restaurée du cache (bfcache)');
                // Recharger les données si nécessaire
                window.dispatchEvent(new Event('pageRestored'));
            }
        };

        // Fonction appelée avant que la page soit mise en cache
        const handlePageHide = (event) => {
            if (event.persisted) {
                console.log('🔄 Page mise en cache pour retour rapide');
                // Nettoyer les ressources non-essentielles
                clearAllTimers();
                closeAllConnections();
            }
        };

        // Helper: Arrêter tous les intervals/timeouts
        const clearAllTimers = () => {
            let id = setTimeout(function () { }, 0);
            while (id--) {
                clearTimeout(id);
            }

            id = setInterval(function () { }, 0);
            while (id--) {
                clearInterval(id);
            }
        };

        // Helper: Fermer les connexions API/streaming
        const closeAllConnections = () => {
            // Annuler les fetch en cours
            if (window.abortControllers) {
                window.abortControllers.forEach(controller => {
                    try {
                        controller.abort();
                    } catch (e) {
                        console.warn('Erreur lors de l\'annulation de fetch:', e);
                    }
                });
                window.abortControllers = [];
            }
        };

        // Ajouter les event listeners
        window.addEventListener('pageshow', handlePageShow);
        window.addEventListener('pagehide', handlePageHide);

        // Cleanup
        return () => {
            window.removeEventListener('pageshow', handlePageShow);
            window.removeEventListener('pagehide', handlePageHide);
        };
    }, []);
};

/**
 * Helper pour gérer les AbortControllers des fetch requests
 * Utilisation: const { fetchWithCleanup } = useAbortableFetch();
 */
export const useAbortableFetch = () => {
    const controllers = [];

    const fetchWithCleanup = async (url, options = {}) => {
        const controller = new AbortController();
        controllers.push(controller);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            return response;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch annulée:', url);
            }
            throw error;
        }
    };

    // Cleanup function
    const cleanup = () => {
        controllers.forEach(controller => {
            try {
                controller.abort();
            } catch (e) {
                console.warn('Erreur lors du cleanup fetch:', e);
            }
        });
        controllers.length = 0;
    };

    return { fetchWithCleanup, cleanup, controllers };
};
