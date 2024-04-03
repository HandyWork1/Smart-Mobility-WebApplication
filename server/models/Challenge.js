const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    points: {
      type: Number,
      required: true,
    },
    category: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  });
  
const Challenge = mongoose.model('Challenge', challengeSchema);
module.exports = Challenge;
