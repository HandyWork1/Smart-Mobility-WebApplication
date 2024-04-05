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

    // Handle Redirect to AccountPage
    const handleAccountRedirect = () =>{
        handlePersonMenuClose();
        navigate('/admin-dashboard/admin-account')
    }

    // Logout Handling
    const handleLogout = () => {
        // Logout logic, calling the logout function from context
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
                    <StyledMenuItem onClick={handleAccountRedirect}>
                    <Avatar src={avatarPlaceholder} /> My account
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
    );
}

export default AdminNavbar;
