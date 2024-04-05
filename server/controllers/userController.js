const { User } = require('../models/User');
const fs = require('fs');
const path = require('path');

// Controller function to fetch all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    // Find the user by ID and delete it
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to add a new user
const addUser = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await User.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update user details
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    // Find the user by ID and update its details
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to handle avatar upload
const uploadAvatar = async (req, res) => {
  const userId = req.params.id;
  try {
    // Get the uploaded file from the request
    const avatar = req.file;

    // Check if the avatar file exists
    if (!avatar) {
      return res.status(400).json({ error: 'Avatar file not provided' });
    }

    // Update the user's avatar field with the file data
    const user = await User.findByIdAndUpdate(userId, { avatar: avatar.buffer }, { new: true });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Avatar uploaded successfully', user });
  } catch (error) {
    console.error('Error uploading avatar:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getUsers, deleteUser, addUser, updateUser, uploadAvatar };
