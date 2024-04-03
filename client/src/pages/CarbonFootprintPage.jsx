import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/common/Header';
import { useAuth } from '../components/auth/AuthContext';

const CarbonFootprintPage = () => {
    const authContext = useAuth();
    const { isAuthenticated } = authContext;
    const iframeRef = useRef(null);
    const [offsetValue, setOffsetValue] = useState('');

    useEffect(() => {
        if (!iframeRef.current || !iframeRef.current.contentWindow) {
            console.log('Cannot access iframe content due to cross-origin restrictions.');
            return;
        }

        const iframe = iframeRef.current.contentWindow;
        const iframeDocument = iframe.document;

        if (iframeDocument.readyState === 'loading') {
            // If the iframe's content is not loaded yet, add an event listener to the iframe's load event
            iframeRef.current.addEventListener('load', () => {
                const offsetCell = iframeDocument.querySelector('h3');

                if (offsetCell) {
                    setOffsetValue(offsetCell.textContent);
                }
            });

            // Trigger the load event manually to ensure that the event listener is added before the iframe's content is loaded
            iframeRef.current.contentWindow.document.dispatchEvent(new Event('load'));
        } else {
            // If the iframe's content is already loaded, find the offsetlinkcell element directly
            const offsetCell = iframeDocument.querySelector('h3');
            console.log(offsetCell);
            if (offsetCell) {
                setOffsetValue(offsetCell.textContent);
            }
        }
    }, []);

    return (
        <div>
            <Header hasBackgroundImage={false} isAuthenticated={isAuthenticated} />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Carbon Footprint Calculator</h1>
                <div className="bg-white shadow-md rounded-lg mb-8 overflow-hidden">
                    <iframe id="carbonFootprintIframe" className="w-full" src="https://calculator.carbonfootprint.com/calculator.aspx" height="650" scrolling="none" title="Carbon Footprint Calculator" ref={iframeRef}></iframe>
                </div>
                <p>{offsetValue}</p>
            </div>
        </div>
    );
}

export default CarbonFootprintPage;