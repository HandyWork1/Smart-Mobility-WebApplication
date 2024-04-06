import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Box, Typography, Avatar, Button, Divider, TextField, Grid, useTheme, IconButton } from '@mui/material';
import { useAuth } from '../../auth/AuthContext';
import { tokens } from "../../../theme";
import Header from "../analytics/Header";
import avatarPlaceholder from '../../../assets/user-avatar.jpg';
import EditIcon from '@mui/icons-material/Edit';

const AccountPage = () => {
  const { userDetails } = useAuth();
  const [avatarImage, setAvatarImage] = useState(userDetails.userAvatar || null);
  const [uploading, setUploading] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({ ...userDetails }); // State to store updated user details
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  useEffect(() => {
    // Retrieve the avatar from localStorage when the component mounts
    const storedAvatar = localStorage.getItem('userAvatar');
    if (storedAvatar) {
      setAvatarImage(storedAvatar);
    } else {
      setAvatarImage(userDetails.userAvatar || null); // If avatar is not in localStorage, use the one from userDetails
    }
  }, [userDetails.userAvatar])

  // Alert Display for success 
  const handleSuccessAlert = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to handle avatar upload
  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    // Simulate uploading process
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('avatar', file); // Assuming 'avatar' is the key expected by the server
      const response = await axios.post(`http://localhost:5000/api/users/upload-avatar/${updatedDetails.userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Upon successful upload, update the avatar image
      setAvatarImage(URL.createObjectURL(file));
      setUpdatedDetails({ ...updatedDetails, avatar: response.data.avatar }); 
      setUploading(false);
    } catch (error) {
      console.error('Error uploading avatar:', error);
      setUploading(false);
    }
  };

  // Function to handle changes in text fields
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [name]: value });
  };

  // Function to save changes to the database
  const saveChanges = async () => {
    // Check if changes have been made
    // For simplicity, assume changes have been made
    try {
      // Make HTTP request to update user details
      const response = await axios.put(`http://localhost:5000/api/users/update/${updatedDetails.userId}`, updatedDetails); 

      // Check if update was successful
      if (response.status === 200) {
        // Update userDetails in local storage
        localStorage.setItem('userDetails', JSON.stringify(updatedDetails));
        console.log('Changes saved successfully.');
        handleSuccessAlert("Successfully updated Profile");
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <Box p={4}>
      <Header title="ACCOUNT" subtitle="Welcome to your Account Management" />
      <Box p={4} maxWidth={800} mx="auto" bgcolor={colors.primary[400]} borderRadius={4} boxShadow={2}>
        <Box py={2}>
          <Typography variant="h4" color={colors.grey[100]}>Personal Info</Typography>
          <Typography variant="body" color={colors.greenAccent[400]}>Customize how your profile information will appear to the system.</Typography>
        </Box>
        <Divider />
        <Box py={2} px={2}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={3}>
              <Box position="relative">
                <label htmlFor='avatar-upload'>
                    <Avatar
                    alt="User Avatar"
                    src={avatarImage || avatarPlaceholder}
                    sx={{ width: 150, height: 150, cursor: 'pointer'}}
                    />
                    <input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleAvatarUpload}
                    />
                    <IconButton
                    style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: colors.primary[100] }}
                    onClick={() => document.getElementById('avatar-upload').click()}
                    >
                    <EditIcon sx={{color:colors.greenAccent[500],}} />
                    </IconButton>
                </label>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box pl={{ xs: 0, md: 2 }} pr={{ xs: 0, md: 4 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Full Name"
                  name="fullName"
                  value={updatedDetails.fullName}
                  onChange={handleTextChange}
                  sx={{
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                    color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                    color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Username"
                  defaultValue={updatedDetails.username}
                  name="username"
                  onChange={handleTextChange}
                  InputProps={{
                    endAdornment: (
                      <EditIcon color={colors.primary[100]} />
                    ),
                  }}
                  sx={{
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                    color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                    color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  name="email"
                  defaultValue={updatedDetails.email}
                  onChange={handleTextChange}
                  disabled
                  sx={{
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                    color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                    color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="User Type"
                  name="userType"
                  defaultValue={updatedDetails.userType}
                  onChange={handleTextChange}
                  disabled
                  sx={{
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                    color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                    color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                    color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box py={4} textAlign="right">
          <Button
            variant="contained"
            disableElevation
            sx={{ 
                mr: 2,
                backgroundColor: colors.greenAccent[800], 
                color: colors.primary[100],
                "&:hover": {
                backgroundColor: colors.greenAccent[700], // Change background color on hover
                color: colors.primary[100], // Change text color on hover
                }
            }}
            onClick={saveChanges}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            sx={{
                borderColor: colors.redAccent[500], 
                color: colors.redAccent[500],
                "&:hover": {
                  backgroundColor: colors.redAccent[500], // Change border color on hover
                  color: colors.primary[100], // Change text color on hover
                }
              }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountPage;
