const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
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

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
