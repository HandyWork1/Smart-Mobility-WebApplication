import React, { useState } from 'react';

const RegistrationLogic = ({ handleGoogleSignUp, handleFormSubmit, handleValidationAlert }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation for form submission
  const validateForm = () => {
    const { fullName, username, email, password } = formData;
    console.log("Form data", formData);

    if (!fullName || !username || !email || !password) {
      return 'All fields are required.';
    }

    if (password.length < 6) {
      return 'Password should be at least 6 characters.';
    }

    return null; 
  };

  const handleFormValidation = () => {
    const validationMessage = validateForm();
    if (validationMessage) {
      handleValidationAlert(validationMessage);
      return false;
    }
    return true;
  };

  const handleFormSubmitWithValidation = (e) => {
    e.preventDefault();
    
    if (handleFormValidation()) {
      // Proceed with form submission
      handleFormSubmit(formData);
    }
  };

  return (
    <form className="animate__animated animate__fadeIn animate__delay-1s" onSubmit={handleFormSubmitWithValidation}>
        <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
            </label>
            <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500 transition duration-300"
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
            </label>
            <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500 transition duration-300"
            onChange={handleInputChange}            
            />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500 transition duration-300"
            onChange={handleInputChange}
            />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
            </label>
            <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500 transition duration-300"
            onChange={handleInputChange}
            />
        </div>

        <div className="mb-6">
            <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-900 focus:outline-none transition duration-300"
            >
            Sign Up
            </button>
        </div>

        <div className="flex items-center justify-between mb-6">
            <hr className="w-1/4 border-t border-gray-300" />
            <span className="text-gray-500 mx-2">OR</span>
            <hr className="w-1/4 border-t border-gray-300" />
        </div>

        <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center w-full bg-white border border-gray-300 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-100 focus:outline-none focus:border-green-500"
        >
            <i className="fab fa-google text-red-500 mr-2"></i>
            Sign up with Google
        </button>
    </form>
  );
};

export default RegistrationLogic;
