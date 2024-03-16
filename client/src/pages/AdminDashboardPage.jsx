import React from 'react';
import { useAuth } from '../components/auth/AuthContext';

const AdminDashboardPage = () => {
    const authContext = useAuth();
    const { isAuthenticated } = authContext;
    if (!isAuthenticated) return (<div>You are not logged in</div>);
    return(
        <>
            <h1>Admin Dashboard</h1>
        </>
    );
}
export default AdminDashboardPage;