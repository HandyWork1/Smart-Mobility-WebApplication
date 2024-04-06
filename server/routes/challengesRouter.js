const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Route to add a new challenge
router.post('/challenges', challengeController.addChallenge);
// Route to add a completed challenge for a user
router.post('/user-challenges', challengeController.addCompletedChallenge);
// Route to fetch completion data for the line chart
router.get('/completion-data', challengeController.getCompletionData);

module.exports = router;
