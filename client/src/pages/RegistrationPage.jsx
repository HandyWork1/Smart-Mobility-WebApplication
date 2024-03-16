import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import RegistrationLogic from '../components/auth/RegistrationLogic';

const RegistrationPage = () => {
  const navigate = useNavigate();

  // Handle Firebase authentication  
  const handleGoogleSignUp = () => {
    // Implement Google Sign-Up logic here
    console.log('Signing up with Google');
  };
  // API request to submit  user registration information
  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
  
      if (response.status === 200) {
        // Registration successful
        handleSuccessAlert('Registration successful!');
        navigate("/login");
      } else {
        // Registration failed
        handleValidationAlert(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      handleValidationAlert(errorMessage);
    }
  };
  
  // Alert Display for  validation errors
  const handleValidationAlert = (message) => {
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
    toast.success(message, {
      position: 'top-center',
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-500">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">Sign Up</h2>
        <RegistrationLogic 
          handleGoogleSignUp={handleGoogleSignUp} 
          handleFormSubmit={handleFormSubmit}
          handleValidationAlert={handleValidationAlert}
         />
        <p className="mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-green-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
