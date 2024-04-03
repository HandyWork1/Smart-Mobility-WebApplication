const mongoose = require('mongoose');

// CarbonFootprint Model
const carbonFootprintSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    carbonValue: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  const CarbonFootprint = mongoose.model('CarbonFootprint', carbonFootprintSchema);
  module.exports = CarbonFootprint;
  