const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Route to add a new challenge
router.post('/challenges', challengeController.addChallenge);

module.exports = router;
