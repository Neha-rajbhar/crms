const mongoose = require("mongoose");
const regularizedAttendenceModel = new mongoose.Schema({
    RegularizedAttendenceDate: { type: String },
  placeOfWorkValue: { type: String },
  placeOfWorkFullForm: { type: String },
  employeId: { type: String },
  employeUserId: { type: String },
  employeName: { type: String },
  employeLastName: { type: String },
  reason: { type: String },
});

const RegularizedAttendence = mongoose.model(
  "RegularizedAttendence",
  regularizedAttendenceModel
);
module.exports = RegularizedAttendence;
