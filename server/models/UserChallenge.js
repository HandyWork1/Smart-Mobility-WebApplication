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
    completionDate: {
        type: Date,
        default: Date.now, // Defaults to the current date
    },
    isCompleted: {
        type: Boolean,
        default: false, // Defaults to false
    },
});

const UserChallenge = mongoose.model('UserChallenge', userChallengeSchema);
module.exports = UserChallenge;
