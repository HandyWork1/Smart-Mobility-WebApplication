// middleware/uploadMiddleware.js

const multer = require('multer');

// Multer configuration
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

module.exports = upload;
