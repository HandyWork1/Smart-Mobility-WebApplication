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

// Controller function to delete an event by id
const deleteEvent = async (req, res) => {
  try {
    // Find the event by id and delete it from the database
    const deletedEvent = await Challenge.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json({ success: true, message: "Event deleted successfully", deletedEvent });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = { addChallenge, deleteEvent };
