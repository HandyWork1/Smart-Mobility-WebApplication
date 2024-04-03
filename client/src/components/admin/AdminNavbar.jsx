// src/components/admin/AdminNavbar.js
import { Box, IconButton, Menu, MenuItem, Divider, ListItemIcon, Avatar, Tooltip, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// Components
import LogoutModal from '../modals/LogoutModal';
import { useAuth } from '../auth/AuthContext';
import avatarPlaceholder from '../../assets/user-avatar.jpg';


const AdminNavbar = ({ toggleSidebar }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { userDetails } = useAuth();

    const [personAnchorEl, setPersonAnchorEl] = useState(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const openPerson = Boolean(personAnchorEl);
    const openNotification = Boolean(notificationsAnchorEl);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();
   
    const handlePersonIconClick = (event) => {
        setPersonAnchorEl(event.currentTarget);
    };

    const handlePersonMenuClose = () => {
        setPersonAnchorEl(null);
    };

    const handleNotificationsIconClick = (event) => {
        setNotificationsAnchorEl(event.currentTarget);
    };

    const handleNotificationsMenuClose = () => {
        setNotificationsAnchorEl(null);
    };

    // Styled MenuItem component with hover effect
    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        "&:hover": {
        backgroundColor: theme.palette.action.hover, // Change background color on hover
        },
    }));

    // Logout Handling
    const handleLogout = () => {
        // Logout logic, calling the logout function from your context
        logout();
        setLogoutModalOpen(false);

        // Redirect to the home page or another appropriate page after logout
        navigate('/login');
    };

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <Tooltip title="Change Theme">
                    <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                    </IconButton>
                </Tooltip>

                <Tooltip title="Notifications Menu">
                    <IconButton
                    onClick={handleNotificationsIconClick}
                    size="small"
                    aria-controls={openNotification ? 'notification-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openNotification ? 'true' : undefined}
                    >
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={notificationsAnchorEl}
                    id="notification-menu"
                    open={openNotification}
                    onClose={handleNotificationsMenuClose}
                    onClick={handleNotificationsMenuClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <StyledMenuItem onClick={handleNotificationsMenuClose}>
                    <Avatar /> My account
                    </StyledMenuItem>
                    <Divider />
                    <StyledMenuItem onClick={handleNotificationsMenuClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleNotificationsMenuClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    </StyledMenuItem>
                </Menu>   
                <Tooltip title="Profile Menu">
                    <IconButton
                    onClick={handlePersonIconClick}
                    size="small"
                    aria-controls={openPerson ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPerson ? 'true' : undefined}
                    >
                        <PersonOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={personAnchorEl}
                    id="account-menu"
                    open={openPerson}
                    onClose={handlePersonMenuClose}
                    onClick={handlePersonMenuClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <StyledMenuItem onClick={handlePersonMenuClose}>
                    <Avatar /> My account
                    </StyledMenuItem>
                    <Divider />
                    <StyledMenuItem onClick={handlePersonMenuClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => {
                    handlePersonMenuClose(); 
                    setLogoutModalOpen(true); 
                    }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    </StyledMenuItem>
                </Menu>      
            </Box>
            <LogoutModal
                isOpen={isLogoutModalOpen}
                onRequestClose={() => setLogoutModalOpen(false)}
                onLogout={handleLogout}
            />
        </Box>
        // <div className="container bg-gray-800">
        //     <div className="flex justify-between items-center px-12 py-2">
        //         <div className="flex items-center">
        //             {/* <div className="">
        //                 <button onClick={toggleSidebar} className="text-white focus:outline-none">
        //                     <i className="fas fa-bars fa-lg"></i>
        //                 </button>
        //             </div> */}
        //             <div className="relative mr-4">
        //                 <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none" />
        //                 <i className="fas fa-search text-white absolute top-2 right-3"></i>
        //             </div>
        //         </div>
        //         <div className="flex items-center">  
        //             <div className="relative mr-4" ref={notificationsRef}>
        //                 <i className="fas fa-bell text-white transition duration-300 ease-in-out" onClick={toggleNotificationsMenu}></i>
        //                 {/* Notifications dropdown menu */}
        //                 {isNotificationsOpen && (
        //                     <div className="absolute top-full right-0 mt-7 w-72 bg-white rounded-md shadow-md overflow-hidden" ref={notificationsRef}>
        //                         <ul className="py-2">
        //                             <li className="px-4 py-3 flex items-start hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
        //                                 <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
        //                                     <i className="fas fa-envelope"></i>
        //                                 </div>
        //                                 <div>
        //                                     <p className="text-sm font-semibold">New Message</p>
        //                                     <p className="text-xs text-gray-600">You have received a new message from a user.</p>
        //                                 </div>
        //                             </li>
        //                             <li className="px-4 py-3 flex items-start hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
        //                                 <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
        //                                     <i className="fas fa-tasks"></i>
        //                                 </div>
        //                                 <div>
        //                                     <p className="text-sm font-semibold">Task Completed</p>
        //                                     <p className="text-xs text-gray-600">User successfully completed a task.</p>
        //                                 </div>
        //                             </li>
        //                             <li className="px-4 py-3 flex items-start hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
        //                                 <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
        //                                     <i className="fas fa-exclamation-triangle"></i>
        //                                 </div>
        //                                 <div>
        //                                     <p className="text-sm font-semibold">Warning</p>
        //                                     <p className="text-xs text-gray-600">Low disk space detected.</p>
        //                                 </div>
        //                             </li>
        //                             <li className="px-4 py-3 flex items-start hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
        //                                 <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
        //                                     <i className="fas fa-times"></i>
        //                                 </div>
        //                                 <div>
        //                                     <p className="text-sm font-semibold">Error</p>
        //                                     <p className="text-xs text-gray-600">Connection lost. Please check your network.</p>
        //                                 </div>
        //                             </li>
        //                             <hr className="border-gray-300 my-2" />
        //                             <li className="px-4 py-2 text-center text-blue-500 cursor-pointer hover:underline transition duration-300 ease-in-out">
        //                                 View All
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 )}
        //             </div>


        //             <div className="relative mr-4 flex items-center cursor-pointer" ref={profileRef}>
        //                 <div
        //                     className={`flex items-center justify-center w-full h-full px-5 py-2 rounded-2xl bg-gray-700 transition duration-300 ease-in-out transform ${isProfileHover ? 'hover:bg-gray-500' : ''}`}
        //                     onClick={toggleProfileMenu}
        //                     onMouseEnter={() => handleProfileHover(true)}
        //                     onMouseLeave={() => handleProfileHover(true)}
        //                 >
        //                     <img
        //                         src={userDetails.avatar || avatarPlaceholder}
        //                         alt="User Avatar"
        //                         className="w-10 h-10 rounded-full cursor-pointer"
        //                     />
        //                     <div
        //                         className="ml-2 text-white text-md font-semibold cursor-pointer"
        //                     >
        //                         {userDetails.fullName}
        //                     </div>
        //                 </div>
        //                 {/* Profile dropdown menu */}
        //                 {isProfileOpen && (
        //                     <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-md z-10" ref={profileRef}>
        //                         <ul className="py-2">
        //                             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">
        //                                 <i className="fas fa-user mr-2"></i>    
        //                                 Profile
        //                             </li>
        //                             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">
        //                                 <i className="fas fa-cog mr-2"></i>    
        //                                 Settings
        //                             </li>
        //                             <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out"
        //                                 onClick={() => {
        //                                     setLogoutModalOpen(true);
        //                                   }}
        //                             >
        //                                 <i className="fas fa-sign-out-alt mr-2"></i>
        //                                 Logout
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        //     <LogoutModal
        //         isOpen={isLogoutModalOpen}
        //         onRequestClose={() => setLogoutModalOpen(false)}
        //         onLogout={handleLogout}
        //     />
        // </div>
    );
}

export default AdminNavbar;
