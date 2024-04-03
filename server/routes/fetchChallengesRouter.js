const express = require('express');
const router = express.Router();
const { getAllChallenges } = require('../controllers/fetchChallengesController');

// Route to fetch all challenges
router.get('/getChallenges', getAllChallenges);

module.exports = router;
