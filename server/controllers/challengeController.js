const Challenge = require('../models/Challenge');

// Controller function to add a new challenge
const addChallenge = async (req, res) => {
  try {
    const { title, description, points, category, startDate, endDate, isActive } = req.body;

    // Create a new challenge instance
    const newChallenge = new Challenge({
      title,
      description,
      points,
      category,
      startDate,
      endDate,
      isActive,
    });

    // Save the new challenge to the database
    await newChallenge.save();

    res.status(201).json({ success: true, message: 'Challenge added successfully' });
  } catch (error) {
    console.error('Error adding challenge:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { addChallenge };
