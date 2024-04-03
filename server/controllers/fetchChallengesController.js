const Challenge = require('../models/Challenge');

// Controller function to fetch all challenges
const getAllChallenges = async (req, res) => {
  try {
    // Fetch all challenges from the database
    const challenges = await Challenge.find({}, { title: 1, description:1, points:1, startDate: 1, endDate: 1 });

    // Send the challenges as the response
    res.json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res.status(500).json({ error: "Failed to fetch challenges" });
  }
};

module.exports = { getAllChallenges };
