
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    const handleConfigure = () => {
        // For now, this acts as a placeholder for a more complex configuration modal
        // In a real app, this would open a modal with granular options
        console.log("Configure cookies clicked");
        alert("Funcionalidad de configuración detallada no implementada en esta demo.");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1c2229] border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-6 md:p-8 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-gray-900 dark:text-white font-bold font-display text-lg mb-2">
                        Nos preocupamos por tu privacidad
                    </h3>
                    <p className="text-gray-600 dark:text-[#9dabb9] text-sm leading-relaxed">
                        Este sitio web utiliza cookies necesarias para su correcto funcionamiento y para obtener información sobre cómo interactúas con él, así como para fines de marketing. Al aceptar, aceptas almacenar cookies en tu dispositivo para segmentación de anuncios, personalización y análisis, como se describe en nuestra política de cookies. Política de cookies.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                    <button
                        onClick={handleConfigure}
                        className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 dark:hover:bg-[#283039] transition-colors"
                    >
                        CONFIGURAR COOKIES
                    </button>
                    <button
                        onClick={handleReject}
                        className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 dark:hover:bg-[#283039] transition-colors"
                    >
                        RECHAZAR
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                    >
                        ACEPTAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
