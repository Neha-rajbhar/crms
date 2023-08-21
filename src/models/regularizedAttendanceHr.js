const mongoose = require("mongoose");
const regularizedAttendenceHrModel = new mongoose.Schema({
  RegularizedAttendenceDate: { type: String },
  placeOfWorkValue: { type: String },
  placeOfWorkFullForm: { type: String },
  hrId: { type: String },
  hrHridId: { type: String },
  hrName: { type: String },
  hrLastName: { type: String },
  reason: { type: String },
});

const RegularizedAttendenceHr = mongoose.model(
  "RegularizedAttendenceHr",
  regularizedAttendenceHrModel
);
module.exports = RegularizedAttendenceHr;
