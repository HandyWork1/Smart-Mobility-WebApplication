import React from 'react';
import Header from '../components/common/Header';
import { Link } from 'react-router-dom';

const ChallengesTipsPage = () => {
    return (
        <div>
            <Header hasBackgroundImage={false} isAuthenticated={true} />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Challenges & Tips</h1>

                {/* Challenge/Tips Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Fitness Challenges Section */}
                    <div className="bg-green-100 shadow-md rounded-lg p-6">
                        <i className="fas fa-dumbbell text-green-500 text-4xl mb-4"></i>
                        <h2 className="text-xl font-semibold mb-4">Fitness Challenges</h2>
                        <p className="text-gray-700 mb-4">Stay active with our fitness challenges and improve your health!</p>
                        <Link to="/fitness-challenges" className="text-green-600 hover:underline">View Challenges</Link>
                    </div>

                    {/* Sustainable Living Tips Section */}
                    <div className="bg-blue-100 shadow-md rounded-lg p-6">
                        <i className="fas fa-leaf text-blue-500 text-4xl mb-4"></i>
                        <h2 className="text-xl font-semibold mb-4">Sustainable Living Tips</h2>
                        <p className="text-gray-700 mb-4">Discover eco-friendly lifestyle tips to reduce your carbon footprint.</p>
                        <Link to="/sustainable-living-tips" className="text-blue-600 hover:underline">Explore Tips</Link>
                    </div>

                    {/* Healthy Eating Recipes Section */}
                    <div className="bg-yellow-100 shadow-md rounded-lg p-6">
                        <i className="fas fa-utensils text-yellow-500 text-4xl mb-4"></i>
                        <h2 className="text-xl font-semibold mb-4">Healthy Eating Recipes</h2>
                        <p className="text-gray-700 mb-4">Explore nutritious and delicious recipes for a balanced diet.</p>
                        <Link to="/healthy-eating-recipes" className="text-yellow-600 hover:underline">Discover Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengesTipsPage;
