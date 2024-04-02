import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import { useAuth } from '../components/auth/AuthContext';

const CarbonFootprintPage = () => {
    const authContext = useAuth();
    const { isAuthenticated } = authContext;

    return (
        <div>
            <Header hasBackgroundImage={false} isAuthenticated={isAuthenticated} />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Carbon Footprint Calculator</h1>
                <div className="bg-white shadow-md rounded-lg mb-8 overflow-hidden">
                    <iframe id="carbonFootprintIframe" className="w-full" src="https://calculator.carbonfootprint.com/calculator.aspx" height="650" scrolling="none"title="Carbon Footprint Calculator"></iframe>
                </div>
            </div>
        </div>
    );
}

export default CarbonFootprintPage;
