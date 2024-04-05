import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { useAuth } from '../components/auth/AuthContext';
import AdminSidebar from '../components/admin/AdminSideBar';
import AdminNavbar from '../components/admin/AdminNavbar';
import Dashboard from '../components/admin/dashboard';
import Users from '../components/admin/users';
import AccountPage from '../components/admin/account/AccountPage';
import ChallengesTipsPage from '../components/admin/content-management/ChallengesTipsPage';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

const AdminDashboardPage = () => {
    const authContext = useAuth();
    const { isAuthenticated } = authContext;
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const navigate = useNavigate();

    // Alert Display for Redirecting 
  const handleIntruderAlert = (message) => {
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

    if (!isAuthenticated) {
        handleIntruderAlert('User not logged in. Log in first');
        navigate('/login');
        return (
            <div>
                You are not logged in. Redirecting to login page...
            </div>
        );
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="admin-dashboard">
                    <AdminSidebar isSidebar={isSidebar}/>
                    <div className="main-content">
                        <AdminNavbar setIsSidebar={setIsSidebar}/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route exact path="/manage-users" element={<Users />} />
                            <Route exact path="/manage-content" element={<ChallengesTipsPage />} />
                            <Route exact path="/admin-account" element={<AccountPage/>}/>
                        </Routes>
                    </div>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default AdminDashboardPage;
