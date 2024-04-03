import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Tooltip, Typography, useTheme, Modal, Button } from "@mui/material";
import { DataGrid, 
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector, } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Header from "../analytics/Header";
import AddUserModal from './AddUserModal';
import { toast } from 'react-toastify';

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      console.log(response.data);
      const usersWithId = response.data.map(user => ({ ...user, id: user._id }));
      setUsers(usersWithId);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };
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
  // Alert Display for success 
  const handleFailureAlert = (message) => {
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

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector
          slotProps={{ tooltip: { title: 'Change density' } }}
        />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: 'Export data' },
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Add User">
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            sx={{ ml: 1, paddingY: 2, paddingX: 5, backgroundColor: colors.greenAccent[400] }} // Adjust margin as needed
            onClick={() => setAddModalOpen(true)}
          >
            Add User
          </Button>
        </Tooltip>
    </GridToolbarContainer>
    );
  };

  const handleAddUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/add-user', userData);
      handleSuccessAlert('User added successfully');
      setAddModalOpen(false); // Close the modal after successful addition
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error('Error adding user:', error.message);
      handleFailureAlert('Failed to add user');
    }
  };

  const handleEdit = (userId) => {
    // Handle edit action
    console.log("Edit user:", userId);
  };

  const handleDelete = (userId, userName) => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${selectedUserId}`);
      setDeleteModalOpen(false);
      handleSuccessAlert(`"User ${selectedUserName} successfully deleted."`);
      fetchUsers(); // Refresh user list after deletion
    } catch (error) {
      console.error('Error deleting user:', error.message);
      handleFailureAlert("Failed to delete the user.")
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    { field: "fullName", headerName: "Name", flex: 1, cellClassName: "name-column--cell", },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "userType", headerName: "User Type", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <Tooltip title='Edit User'>
                <EditOutlinedIcon
                    onClick={() => handleEdit(row.id)}
                    sx={{ cursor: "pointer",
                    marginRight: 8,
                    "&:hover": {
                        color: colors.greenAccent[500], 
                    } }}
                />
            </Tooltip>
            <Tooltip title='Delete User'>
                <DeleteOutlineOutlinedIcon
                    onClick={() => handleDelete(row.id, row.fullName)}
                    sx={{ cursor: "pointer", color: colors.redAccent[500],
                    "&:hover": {
                        color: colors.redAccent[600],
                    }
                }}
                />
            </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px" overflowX="auto">
      <Header title="USERS" subtitle="Managing the Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { 
            border: "none" 
          },
          "& .MuiDataGrid-cell": { 
            borderBottom: "none" 
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": { 
            backgroundColor: colors.primary[400] 
          },
          "& .MuiDataGrid-footerContainer": { 
            borderTop: "none", 
            backgroundColor: colors.blueAccent[700] 
          },
          "& .MuiCheckbox-root": { color: 
            `${colors.greenAccent[200]} !important` 
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={users} columns={columns} slots={{ toolbar: CustomToolbar }} />
      </Box>
      {/* Delete confirmation modal */}
      <Modal open={isDeleteModalOpen} onClose={cancelDelete}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: colors.primary[400],
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom color={colors.grey[50]}>
          Are you sure you want to delete this user 
          <span 
          style={{color: colors.redAccent[400], fontWeight: 'bold'}}> {selectedUserName}
          </span>?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={confirmDelete} variant="contained" 
          sx={{ mr: 2, bgcolor: colors.redAccent[400]}}>
            Confirm
          </Button>
          <Button onClick={cancelDelete} variant="contained"
          sx={{outlineColor: colors.greenAccent[400]}} >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
    {/*  Add new user modal */}
    <AddUserModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} onAddUser={handleAddUser} />

    </Box>
  );
};

export default Users;
