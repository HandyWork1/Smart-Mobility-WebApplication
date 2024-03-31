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
    duration: Number,
    isActive: {
      type: Boolean,
      default: true,
    },
  });
  
  const Challenge = mongoose.model('Challenge', challengeSchema);
  module.exports = Challenge;
  