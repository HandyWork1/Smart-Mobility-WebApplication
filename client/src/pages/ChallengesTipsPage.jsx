import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import ChallengeCard from '../components/common/ChallengeCard';
import { useAuth } from '../components/auth/AuthContext';
import { Link } from 'react-router-dom';
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ChallengesTipsPage = () => {
    const authContext = useAuth();
    const { isAuthenticated } = authContext;
    const [challenges, setChallenges] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date()); // Set initial date to current date
    const [filteredChallenges, setFilteredChallenges] = useState([]);
    const [groupedChallenges, setGroupedChallenges] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchChallenges();
    }, []);

    const fetchChallenges = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/getChallenges');
            setChallenges(response.data);
        } catch (error) {
            console.error('Error fetching challenges:', error);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const filteredGroupedChallenges = Object.keys(groupedChallenges).reduce((acc, dateString) => {
            if (new Date(dateString).toDateString() === selectedDate.toDateString()) {
                acc[dateString] = groupedChallenges[dateString];
            }
            return acc;
        }, {});

        setFilteredChallenges(filteredGroupedChallenges);
    }, [selectedDate, groupedChallenges]);

    useEffect(() => {
        const groupedChallenges = {};
        challenges.forEach(challenge => {
            const startDate = new Date(challenge.startDate);
            const endDate = new Date(challenge.endDate);

            // Calculate the duration between start and end date in days
            const durationInDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

            // Iterate through each date the challenge spans and add it to groupedChallenges
            for (let i = 0; i <= durationInDays; i++) {
                const currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + i);
                const dateString = currentDate.toDateString();

                if (!groupedChallenges[dateString]) {
                    groupedChallenges[dateString] = [];
                }
                groupedChallenges[dateString].push(challenge);
            }
        });

        setGroupedChallenges(groupedChallenges);
    }, [challenges]);

    // Displaying the list of grouped challenges
    const renderChallengesByDate = () => {
        return Object.keys(filteredChallenges).map(dateString => (
            <div key={dateString}>
                <ChallengeCard date={dateString} challenges={filteredChallenges[dateString]} />
            </div>
        ));
    };

     // Alert Display for Redirecting 
    const handleIntruderAlert = (message) => {
        toast.error(message, {
        position: 'top-center',
        autoClose: 5000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    };

    if (!isAuthenticated) {
        handleIntruderAlert('User not logged in. Log in first');
        navigate('/login');
    }

    return (
        <div className="bg-gray-50">
            <Header hasBackgroundImage={false} isAuthenticated={isAuthenticated} />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold my-8">Challenges</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Challenges */}
                    <div className="col-span-2">
                        <Calendar
                            className="mb-4"
                            onChange={handleDateChange}
                            value={selectedDate}
                        />
                        <div className="grid grid-cols-1 gap-4">
                            {renderChallengesByDate()}
                        </div>
                    </div>
                    {/* Tips */}
                    <div className="col-span-1 overflow-hidden">
                        <h4 className="text-2xl text-gray-500 font-bold mb-4">Tips</h4>
                        <div className="bg-green-100 shadow-md rounded-lg p-3 mb-4">
                            <i className="fas fa-dumbbell text-green-500 text-2xl mb-2"></i>
                            <h2 className="text-lg font-semibold mb-2">Fitness Challenges</h2>
                            <p className="text-gray-700 mb-2">Stay active with our fitness challenges and improve your health!</p>
                            <Link to="/fitness-challenges" className="text-green-600 hover:underline">View Challenges</Link>
                        </div>

                        <div className="bg-blue-100 shadow-md rounded-lg p-3 mb-4">
                            <i className="fas fa-leaf text-blue-500 text-2xl mb-2"></i>
                            <h2 className="text-lg font-semibold mb-2">Sustainable Living Tips</h2>
                            <p className="text-gray-700 mb-2">Discover eco-friendly lifestyle tips to reduce your carbon footprint.</p>
                            <Link to="/sustainable-living-tips" className="text-blue-600 hover:underline">Explore Tips</Link>
                        </div>

                        <div className="bg-yellow-100 shadow-md rounded-lg p-3">
                            <i className="fas fa-utensils text-yellow-500 text-2xl mb-2"></i>
                            <h2 className="text-lg font-semibold mb-2">Healthy Eating Recipes</h2>
                            <p className="text-gray-700 mb-2">Explore nutritious and delicious recipes for a balanced diet.</p>
                            <Link to="/healthy-eating-recipes" className="text-yellow-600 hover:underline">Discover Recipes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengesTipsPage;
