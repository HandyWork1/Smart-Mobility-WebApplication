import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutline from '@mui/icons-material/CircleOutlined';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import Modal from 'react-modal';

const ChallengeCard = ({ date, challenges }) => {
    const [completedChallenges, setCompletedChallenges] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calculate progress percentage based on completed challenges
    const totalChallenges = challenges.length;
    const progressPercentage = (completedChallenges / totalChallenges) * 100;

    const handleCheckboxChange = () => {
        // Update the number of completed challenges
        setCompletedChallenges(prevCompletedChallenges => prevCompletedChallenges + 1);
    };

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                            onChange={handleCheckboxChange}
                            icon={<CheckCircleOutline />}
                            checkedIcon={<CheckCircle />}
                            sx={{
                                color: 'green',
                                '&.Mui-checked': {
                                    color: 'darkgreen',
                                },
                            }}
                        />
                    </div>
                ))}
                <Button variant="contained" sx={{marginY: 2}} color="success" onClick={handleSubmit} disabled={isModalOpen}>
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
                        <button onClick={handleCloseModal} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-green-600">Confirm</button>
                    </div>
                </Modal>

            </div>
        </div>
    );
}

export default ChallengeCard;
