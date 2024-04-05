const mongoose = require('mongoose');

// User Model
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  avatar: {
    type: Buffer,
    default: null,
  },
  points: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = { User };