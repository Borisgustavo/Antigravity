import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for better UX
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-surface-dark/95 backdrop-blur-md border-t border-gray-700 p-4 md:p-6 z-50 shadow-2xl animate-fade-in-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-300">
                    <p className="font-semibold text-white mb-1">Valoramos tu privacidad</p>
                    <p>
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia y mostrarte publicidad relacionada con tus preferencias.
                        Al continuar navegando, aceptas su uso.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        Configurar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 text-sm font-medium bg-primary hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-200"
                    >
                        Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
