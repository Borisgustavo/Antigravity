import React, { useEffect } from 'react';

interface AdContainerProps {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
    label?: string;
}

// Publisher ID de AdSense (ca-pub-XXXXXXXXXX del index.html)
const AD_CLIENT = 'ca-pub-3167296570500466';

const AdContainer: React.FC<AdContainerProps> = ({ slotId, format = 'auto', className = '' }) => {
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className={`my-4 w-full overflow-hidden ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', minHeight: '90px' }}
                data-ad-client={AD_CLIENT}
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdContainer;
