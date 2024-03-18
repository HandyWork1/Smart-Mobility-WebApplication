// src/components/admin/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-screen flex flex-col items-center justify-between">
            <div className="py-4">
                <h2 className="text-lg font-semibold mb-8">Admin Panel</h2>
                <ul>
                    <li className="mb-4">
                        <Link to="/admin/dashboard" className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                            <i className="fas fa-chart-bar mr-2"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/users" className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                            <i className="fas fa-users mr-2"></i>
                            Users
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/content" className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                            <i className="fas fa-file-alt mr-2"></i>
                            Content Management
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/carbon-footprint" className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                            <i className="fas fa-leaf mr-2"></i>
                            Carbon Footprint
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/community" className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                            <i className="fas fa-users-cog mr-2"></i>
                            Community Engagement
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/reports-analytics" className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                            <i className="fas fa-chart-pie mr-2"></i>
                            Reports & Analytics
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="py-4">
                <div className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                    <i className="fas fa-cog mr-2"></i>
                    Settings
                </div>
                <div className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                    <i className="fas fa-question-circle mr-2"></i>
                    Help & Support
                </div>
                <div className="flex items-center justify-start py-2 px-4 hover:bg-gray-700">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
