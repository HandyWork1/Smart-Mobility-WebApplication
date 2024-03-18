import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import AdminSidebar from '../components/admin/AdminSideBar';
import AdminNavbar from '../components/admin/AdminNavbar';

const AdminDashboardPage = () => {
    const authContext = useAuth();
    const { isAuthenticated } = authContext;
    if (!isAuthenticated) return (<div>You are not logged in</div>);
    return(
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1">
                <AdminNavbar />
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>

            </div>
        </div>
    );
}
export default AdminDashboardPage;