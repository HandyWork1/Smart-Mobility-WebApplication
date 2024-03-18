// src/components/admin/AdminNavbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatarPlaceholder from '../../assets/user-avatar.jpg';
import { useAuth } from '../auth/AuthContext';
import LogoutModal from '../modals/LogoutModal';


const AdminNavbar = () => {
    const { userDetails } = useAuth();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileHover, setIsProfileHover] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();
    const profileRef = useRef(null);
    const notificationsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to handle hover state for profile container
    const handleProfileHover = () => {
        setIsProfileHover(!isProfileHover);
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsNotificationsOpen(false); // Close notifications menu
    };

    const toggleNotificationsMenu = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        setIsProfileOpen(false); // Close profile menu
    };

    // Logout Handling
    const handleLogout = () => {
        // Logout logic, calling the logout function from your context
        logout();
        setLogoutModalOpen(false);

        // Redirect to the home page or another appropriate page after logout
        navigate('/login');
    };

    return (
        <div className="container bg-gray-800">
            <div className="flex justify-between items-center px-12 py-2">
                <div className="flex items-center">
                    <div className="relative mr-4">
                        <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none" />
                        <i className="fas fa-search text-white absolute top-2 right-3"></i>
                    </div>
                </div>
                <div className="flex items-center">  
                    <div className="relative mr-4" ref={notificationsRef}>
                        <i className="fas fa-bell text-white transition duration-300 ease-in-out" onClick={toggleNotificationsMenu}></i>
                        {/* Notifications dropdown menu */}
                        {isNotificationsOpen && (
                            <div className="absolute top-full right-0 mt-5 w-48 bg-white rounded-md shadow-md" ref={notificationsRef}>
                                <ul className="py-2 w-36">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">Notification 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">Notification 2</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">Notification 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative mr-4 flex items-center cursor-pointer" ref={profileRef}>
                        <div
                            className={`flex items-center justify-center w-full h-full px-5 py-2 rounded-lg bg-gray-700 transition duration-300 ease-in-out transform ${isProfileHover ? 'hover:bg-gray-600 hover:scale-105' : ''}`}
                            onClick={toggleProfileMenu}
                            onMouseEnter={() => handleProfileHover()}
                            onMouseLeave={() => handleProfileHover()}
                        >
                            <img
                                src={userDetails.avatar || avatarPlaceholder}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            <div
                                className="ml-2 text-white text-md font-semibold cursor-pointer"
                            >
                                {userDetails.fullName}
                            </div>
                        </div>
                        {/* Profile dropdown menu */}
                        {isProfileOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-md z-10" ref={profileRef}>
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">
                                        <i className="fas fa-user mr-2"></i>    
                                        Profile
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">
                                        <i className="fas fa-cog mr-2"></i>    
                                        Settings
                                    </li>
                                    <Link className="px-4 py-2 hover:bg-gray-200 w-full cursor-pointer transition duration-300 ease-in-out"
                                        onClick={() => {
                                            setLogoutModalOpen(true);
                                          }}
                                    >
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                        Logout
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <LogoutModal
                isOpen={isLogoutModalOpen}
                onRequestClose={() => setLogoutModalOpen(false)}
                onLogout={handleLogout}
            />
        </div>
    );
}

export default AdminNavbar;
