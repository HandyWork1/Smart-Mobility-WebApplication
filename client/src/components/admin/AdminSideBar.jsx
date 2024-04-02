// src/components/admin/AdminSidebar.js
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import { useAuth } from '../auth/AuthContext';
// Icons
import avatarPlaceholder from '../../assets/user-avatar.jpg';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const AdminSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { userDetails } = useAuth();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
            color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
            color: "#6870fa !important",
            },
        }}
        >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
                }}
            >
                {!isCollapsed && (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                >
                    <Typography variant="h3" color={colors.grey[100]}>
                    Admin
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                    </IconButton>
                </Box>
                )}
            </MenuItem>

            {!isCollapsed && (
                <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                    alt="profile-user"
                    width="120px"
                    height="120px"
                    src={userDetails.avatar || avatarPlaceholder}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Box>
                <Box textAlign="center">
                    <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    >
                    {userDetails.fullName}
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                     Admin User
                    </Typography>
                </Box>
                </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                    title="Dashboard"
                    to="/admin-dashboard"
                    icon={<DashboardOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Users
                </Typography>
                <Item
                    title="Manage Users"
                    to="/admin-dashboard/manage-users"
                    icon={<PeopleAltOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="User Profile"
                    to="/admin-dashboard/user-profile"
                    icon={<PersonOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Content
                </Typography>
                <Item
                    title="Manage Content"
                    to="/admin-dashboard/manage-content"
                    icon={<CreateOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Reports & Analytics
                </Typography>
                <Item
                    title="View Reports"
                    to="/admin-dashboard/view-reports"
                    icon={<AssessmentOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Box>

            </Menu>
        </ProSidebar>
        </Box>
    );
}

export default AdminSidebar;
