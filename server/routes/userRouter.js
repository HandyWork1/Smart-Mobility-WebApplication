const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to fetch all users
router.get('/users', userController.getUsers);
//  Route to delete user
router.delete('/users/:id', userController.deleteUser);
// Add a new user
router.post('/users/add-user', userController.addUser);
//  Update an existing user
router.put('/users/update/:id', userController.updateUser);
// New route for avatar upload
router.post('/users/upload-avatar/:id', userController.uploadAvatar);

module.exports = router;
