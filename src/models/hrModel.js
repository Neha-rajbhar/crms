const mongoose = require("mongoose");
const hrSchema = new mongoose.Schema({
  hrId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  personalPhone: {
    type: String,
    required: true,
  },
  alternatePhone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  adharCard: {
    type: String,
  },
  panCard: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to the current timestamp
  },
});

const Hr = mongoose.model("Hr", hrSchema);

module.exports = Hr;
