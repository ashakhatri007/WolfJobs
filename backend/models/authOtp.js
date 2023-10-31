const mongoose = require('mongoose');

// Auth OTP table
const autoOtpSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

}, {
  timestamps: true
});


const autoOtp = mongoose.model('autoOtp', autoOtpSchema);

module.exports = autoOtp;