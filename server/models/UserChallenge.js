const mongoose = require('mongoose');

// UserChallenge Model
const userChallengeSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge',
      required: true,
    },
    startDate: Date,
    endDate: Date,
    isCompleted: Boolean,
    progress: {
      type: Number,
      default: 0,
    },
  });
  
  const UserChallenge = mongoose.model('UserChallenge', userChallengeSchema);
  module.exports = UserChallenge;