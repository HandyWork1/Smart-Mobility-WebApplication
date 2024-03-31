const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

// Route to fetch all users
router.get('/users', getUsers);

module.exports = router;
