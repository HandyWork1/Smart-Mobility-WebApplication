const express = require('express');
const router = express.Router();
const { addChallenge } = require('../controllers/challengeController');

// Route to add a new challenge
router.post('/challenges', addChallenge);

module.exports = router;
