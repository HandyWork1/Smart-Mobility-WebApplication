import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import LoginLogic from '../components/auth/LoginLogic';
import { useAuth } from '../components/auth/AuthContext';

const LoginPage = () => {
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log('Signing in with Google');
  };

  // Implement the API request and validation logic for login
  const handleFormSubmit = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', formData);

    if (response.status === 200) {
      // Login successful
      handleSuccessAlert('Login successful!');
      
      // Update the isAuthenticated state and user details
      authContext.login(response.data);

      // Store user details in localStorage
      const userDetails = response.data;

      // Check if user has an avatar and store it in localStorage
      if (userDetails.userAvatar) {
        // Fetch the avatar image and convert it to a Base64 string
        const response = await fetch(userDetails.userAvatar);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          userDetails.userAvatar = base64data;
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
        };
      } else {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
      }

      // Redirect to dashboard page after successful login
      if (userDetails.userType === 'user') {
        navigate("/");
      } else if (userDetails.userType === 'admin') {
        navigate('/admin-dashboard');
      }
    } else {
      // Check if there is an error message in the response data
      const errorMessage = response.data.error || 'Login failed. Please try again.';
      handleValidationAlert(errorMessage);
    }
  } catch (error) {
    // Check if there is an error message in the error.response data
    const errorMessage = error.response?.data?.error || 'Login failed. Please try again.';
    handleValidationAlert(errorMessage);
  }
};


  // Handle validation alerts
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
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-96 md:w-full">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">Login</h2>
        <LoginLogic
          handleGoogleSignIn={handleGoogleSignIn}
          handleFormSubmit={handleFormSubmit}
          handleValidationAlert={handleValidationAlert}
        />
        <p className="mt-4 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-green-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
