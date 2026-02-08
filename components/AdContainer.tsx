import React, { useEffect } from 'react';

interface AdContainerProps {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
    label?: string; // For demo/placeholder purposes
}

const AdContainer: React.FC<AdContainerProps> = ({ slotId, format = 'auto', className = '', label = 'Publicidad' }) => {
    useEffect(() => {
        // Initialize AdSense ad if window.adsbygoogle is available
        try {
            if (typeof window !== 'undefined') {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    const isDev = true; // Toggle this or use environment variable to switch between placeholder and real ad

    return (
        <div className={`my-4 flex justify-center items-center w-full min-h-[100px] bg-surface-dark border border-dashed border-gray-700/50 rounded-lg overflow-hidden ${className}`}>
            {isDev ? (
                <div className="flex flex-col items-center justify-center text-text-secondary w-full h-full p-4">
                    <span className="material-symbols-outlined text-4xl mb-2 opacity-50">ads_click</span>
                    <span className="text-xs uppercase tracking-wider font-semibold opacity-70">{label}</span>
                    <span className="text-[10px] opacity-40 mt-1">Espacio reservado para AdSense</span>
                </div>
            ) : (
                <ins className="adsbygoogle"
                    style={{ display: 'block', width: '100%' }}
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // REPLACE WITH YOUR ID
                    data-ad-slot={slotId}
                    data-ad-format={format}
                    data-full-width-responsive="true"></ins>
            )}
        </div>
    );
};

export default AdContainer;
