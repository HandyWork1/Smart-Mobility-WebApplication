// challengesRouter.js

const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// DELETE request to delete an event by id
router.delete('/:id', challengeController.deleteEvent);

module.exports = router;
