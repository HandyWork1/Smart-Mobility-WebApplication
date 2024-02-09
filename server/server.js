require('dotenv').config();

const port = process.env.PORT;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// API Routes
const authRouter = require('./routes/auth');

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
app.use('/api', authRoutes);
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
