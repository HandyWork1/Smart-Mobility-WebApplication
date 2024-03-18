// src/components/admin/AdminNavbar.js
import React, { useState, useEffect, useRef } from 'react';

const AdminNavbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
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

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsNotificationsOpen(false); // Close notifications menu
    };

    const toggleNotificationsMenu = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        setIsProfileOpen(false); // Close profile menu
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
                        <i className="fas fa-bell text-white" onClick={toggleNotificationsMenu}></i>
                        {/* Notifications dropdown menu */}
                        {isNotificationsOpen && (
                            <div className="absolute top-10 right-0 bg-white rounded-md shadow-md" ref={notificationsRef}>
                                <ul className="py-2 w-36">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Notification 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Notification 2</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Notification 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative mr-4" ref={profileRef}>
                        <img
                            src="user-avatar.jpg"
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full cursor-pointer"
                            onClick={toggleProfileMenu}
                        />
                        {/* Profile dropdown menu */}
                        {isProfileOpen && (
                            <div className="absolute top-10 right-0 bg-white rounded-md shadow-md" ref={profileRef}>
                                <ul className="py-2 w-32">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        <i className="fas fa-user mr-2"></i>    
                                        Profile
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        <i className="fas fa-cog mr-2"></i>    
                                        Settings
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AdminNavbar;
