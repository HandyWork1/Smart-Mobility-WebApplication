import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, useTheme , MenuItem} from '@mui/material';
import { styled } from "@mui/system";
import { tokens } from "../../../theme";
import PersonAddIcon from '@mui/icons-material/PersonAdd';



const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    userType: 'user', // Default userType
  });

  // Styled MenuItem component with hover effect
  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
    backgroundColor: theme.palette.action.hover, // Change background color on hover
    },
    }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate form data before submitting if needed
    // Call the onAddUser function with formData
    onAddUser(formData);
    // Reset form data
    setFormData({
      fullName: '',
      username: '',
      email: '',
      password: '',
      userType: 'user',
    });
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '450',
          bgcolor: colors.primary[400],
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add New User
        </Typography>
        <form>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            sx={{
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
            margin="normal"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            sx={{
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
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
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
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{
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
            select
            fullWidth
            margin="normal"
            label="User Type"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            sx={{
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
          >
            <StyledMenuItem value="user">User</StyledMenuItem>
            <StyledMenuItem value="admin">Admin</StyledMenuItem>
          </TextField>
          <Button 
          variant="contained" 
          startIcon= {<PersonAddIcon/> }
          sx={{
            padding: '12px 24px',
            mt: 2,
            backgroundColor: colors.greenAccent[800], 
            color: colors.primary[100],
            "&:hover": {
              backgroundColor: colors.greenAccent[700], 
              color: colors.primary[100],
            }
          }}
          onClick={handleSubmit}>
            Add User
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
