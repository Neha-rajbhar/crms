const mongoose = require("mongoose");
const attendenceModel = new mongoose.Schema({
  todayDate: { type: String },
  placeOfWorkValue: { type: String },
  placeOfWorkFullForm: { type: String },
  employeId: { type:String },
  employeUserId: { type: String },
  employeName: { type: String },
  employeLastName: { type: String },
});

const Attendence = mongoose.model("Attendence", attendenceModel);
module.exports = Attendence;
