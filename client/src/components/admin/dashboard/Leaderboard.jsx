import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import TrophyIcon from "@mui/icons-material/EmojiEvents";

const Leaderboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            const users = response.data.filter((user) => user.userType === "user");

            // Sort users based on points in descending order
            users.sort((a, b) => b.points - a.points);

            // Get the top 15 users
            const top15Users = users.slice(0, 15);
            setTopUsers(top15Users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
        };

        fetchUsers();
    }, []);

    const getRankColor = (index) => {
        switch (index) {
        case 0:
            return colors.gold[400];
        case 1:
            return colors.silver[400];
        case 2:
            return colors.bronze[400];
        default:
            return colors.greenAccent[500];
        }
    };

    return (
        <Box
        sx={{
            gridColumn: { xs: "span 12", sm: "span 12", md: "span 4" },
            gridRow: { xs: "span 4", sm: "span 3", md: "span 3" },
            backgroundColor: colors.primary[400],
            overflow: "auto",
            p: { xs: "20px", sm: "20px", md: "30px" },
        }}
        >
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
        >
            <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
            Leaderboard
            </Typography>
        </Box>
        {topUsers.map((user, index) => (
            <Box
            key={user._id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[400]}`}
            p="15px"
            bgcolor={index < 3 ? getRankColor(index) : "transparent"} 
            >
            {index === 0 && (
                <Box>
                <TrophyIcon style={{ color: colors.gold[100] }} /> 
                </Box>
            )}
            {index === 1 && (
                <Box>
                <TrophyIcon style={{ color: colors.silver[100] }} /> 
                </Box>
            )}
            {index === 2 && (
                <Box>
                <TrophyIcon style={{ color: colors.bronze[100] }} /> 
                </Box>
            )}
            
            <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
            >
                {index + 1}. {user.fullName}
            </Typography>
            <Typography color={colors.grey[100]}>{user.points} Points</Typography>
            </Box>
        ))}
        </Box>
    );
};

export default Leaderboard;
