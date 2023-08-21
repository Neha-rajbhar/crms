const mongoose = require("mongoose");
const attendanceHrModel = new mongoose.Schema({
  todayDate: { type: String },
  placeOfWorkValue: { type: String },
  placeOfWorkFullForm: { type: String },
  hrId: { type: String },
  hrHridId: { type: String },
  hrName: { type: String },
  hrLastName: { type: String },
});

const AttendanceHr = mongoose.model("AttendanceHr", attendanceHrModel);
module.exports = AttendanceHr;
