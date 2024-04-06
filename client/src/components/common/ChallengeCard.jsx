import React, { useState, useRef } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutline from '@mui/icons-material/CircleOutlined';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../auth/AuthContext';

const ChallengeCard = ({ date, challenges }) => {
    const [completedChallenges, setCompletedChallenges] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userDetails } = useAuth();
    const isButtonDisabledRef = useRef({}); // Create a ref to store the disabled state for each date

    // Initialize isChecked state for each challenge
    const [challengeStates, setChallengeStates] = useState(
        challenges.map(challenge => ({ id: challenge._id, isChecked: false }))
    );
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false); // State to track if the success alert has been shown

    // Calculate progress percentage based on completed challenges
    const totalChallenges = challenges.length;
    const progressPercentage = (completedChallenges / totalChallenges) * 100;

    // Handle errors alert
    const handleErrorAlert = (message) => {
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

    // Alert Display for success 
    const handleSuccessAlert = (message) => {
        if (!isSuccessAlertShown) {
            toast.success(message, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSuccessAlertShown(true); // Set isSuccessAlertShown to true after displaying the success alert
        }
    };

    const handleCheckboxChange = (challengeId, isChecked) => {
        // Update the isChecked state for the corresponding challenge
        setChallengeStates(prevStates =>
            prevStates.map(state =>
                state.id === challengeId ? { ...state, isChecked: !state.isChecked } : state
            )
        );

        // Update the number of completed challenges
        setCompletedChallenges(prevCompletedChallenges =>
            isChecked ? prevCompletedChallenges + 1 : prevCompletedChallenges - 1
        );
    };

    const handleSubmit = () => {
        setIsConfirming(true); // Set isConfirming to true before opening the modal
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = async () => {
        for (const challengeState of challengeStates) {
            try {
                const challenge = challenges.find(challenge => challenge._id === challengeState.id);
                if (!challenge) continue;
          
                await axios.post('http://localhost:5000/api/user-challenges', {
                    userId: userDetails.userId,
                    challengeId: challenge._id,
                    completionDate: new Date(),
                    isCompleted: challengeState.isChecked,
                });
            } catch (error) {
                console.error('Error adding completed challenge:', error);
                handleErrorAlert("An error occurred while adding challenges.");
            } finally {
                setIsModalOpen(false);
            }
        }
        
        setIsConfirming(true); // Set isConfirming back to false after submission is completed
        handleSuccessAlert("You've successfully completed challenges!"); // Display success alert after all challenges have been submitted
    
        // Disable the button and checkboxes for the current date
        toggleDisabledState(date, true);
    };
    

    // Function to toggle the disabled state of the button and checkboxes for a specific date
    const toggleDisabledState = (date, isDisabled) => {
        isButtonDisabledRef.current[date] = isDisabled;
    };

    // Check if the button and checkboxes should be disabled for the current date
    const isButtonDisabled = isButtonDisabledRef.current[date] || isConfirming;

    return (
        <div className="bg-white rounded-lg shadow-md my-4 overflow-hidden">
            <h2 className="text-lg font-bold text-gray-800 px-4 py-2 bg-green-200">{date}</h2>
            <div className="p-4">
                {challenges.map(challenge => (
                    <div key={challenge._id} className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-gray-700 font-bold mb-2">{challenge.title}</p>
                            <p className="text-gray-500">{challenge.description}</p>
                        </div>
                        <p className="text-gray-500 font-bold">{challenge.points} points</p>
                        <Checkbox
                            checked={challengeStates.find(state => state.id === challenge._id)?.isChecked || false}
                            onChange={e => handleCheckboxChange(challenge._id, e.target.checked)}
                            icon={<CheckCircleOutline />}
                            checkedIcon={<CheckCircle />}
                            sx={{
                                color: 'green',
                                '&.Mui-checked': {
                                color: 'darkgreen',
                                },
                            }}
                            disabled={isButtonDisabled} // Use the disabled state for the current date
                        />
                    </div>
                ))}
                <Button variant="contained" sx={{ marginY: 2 }} color="success" onClick={handleSubmit} disabled={isModalOpen || isButtonDisabled}>
                Submit Challenges
                </Button>
                <LinearProgress
                    variant="determinate"
                    value={progressPercentage}
                    sx={{
                        backgroundColor: 'lightgreen',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'darkgreen', // Green progress bar
                        },
                    }}
                />

                {/*  Modal for confirmation */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1000
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            padding: '20px',
                            textAlign: 'left',
                            border: 'none',
                            maxWidth: '400px',
                            width: '100%',
                            backgroundColor: '#FFFFFF'
                        }
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <h2 id="modal-modal-title" className="text-2xl font-bold mb-4">Confirmation</h2>
                    <p id="modal-modal-description" className="text-gray-600 mb-4">Are you sure you want to submit the challenges?</p>
                    <div className="flex justify-start">
                        <button onClick={handleCloseModal} className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg focus:outline-none hover:bg-gray-300">Cancel</button>
                        <button onClick={handleConfirm} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-green-600">Confirm</button>
                    </div>
                </Modal>

            </div>
        </div>
    );
}

export default ChallengeCard;
