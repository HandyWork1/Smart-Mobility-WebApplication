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
const fetchChallengesRouter = require('./routes/fetchChallengesRouter');
const deleteChallengesRouter = require('./routes/deleteChallengesRouter');
// Middleware
const uploadMiddleware = require('./middleware/uploadMiddleware');


app.use(express.json());
app.use(cors());

// Middleware for image upload
app.use(uploadMiddleware.single('avatar')); // Handle single file uploads with field name 'avatar'

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
// Fetch users and Delete user
app.use("/api", userRouter);
// Add challenges
app.use("/api", challengesRouter);
//  Get all challenges from the database
app.use("/api", fetchChallengesRouter);
//  Delete a challenge by ID
app.use("/api/challenges", deleteChallengesRouter);

 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
