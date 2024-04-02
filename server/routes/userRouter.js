const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to fetch all users
router.get('/users', userController.getUsers);
//  Route to delete user
router.delete('/users/:id', userController.deleteUser);
// Add a new user
router.post('users', userController.addUser);

module.exports = router;
