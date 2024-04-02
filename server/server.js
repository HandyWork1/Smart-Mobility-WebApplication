require('dotenv').config();

const port = process.env.PORT;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// API Routes
const authRouter = require('./controllers/auth');
const authControllerRouter = require('./controllers/authController');
const userRouter = require('./routes/userRouter');
const challengesRouter = require('./routes/challengesRouter');
const fetchChallengesRouter = require('./routes/fetchChallengesRouter')


app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch(err => {
      console.error("MongoDB connection error:", err);
    });

// API Routes
// Registration Route
app.use('/api/auth', authRouter);
// Login Route
app.use('/api/auth', authControllerRouter);
// Fetch users
app.use("/api", userRouter);
// Add challenges
app.use("/api", challengesRouter);
//  Get all challenges from the database
app.use("/api", fetchChallengesRouter);

// const deleteAllChallenges = async () => {
//   try {
//     // Use the deleteMany() method to delete all records
//     await Challenge.deleteMany({});
//     console.log('All challenges deleted successfully');
//   } catch (error) {
//     console.error('Error deleting challenges:', error.message);
//   }
// };

// // Call the function to delete all challenges
// deleteAllChallenges();

// const challengesData = require('./models/challengeData');

// // Function to add all records to the challenges collection
// const addChallenges = async () => {
//   try {
//     // Use the insertMany() method to add all records to the collection
//     await Challenge.insertMany(challengesData);
//     console.log('Challenges added successfully');
//   } catch (error) {
//     console.error('Error adding challenges:', error.message);
//   }
// };

// // Call the function to add challenges
// addChallenges();

 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
