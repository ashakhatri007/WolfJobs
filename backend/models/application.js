const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  jobname: {
    type: String,
    required: true,
  },
  applicantid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  applicantname: {
    type: String,
    required: true,
    default: "",
  },
  applicantemail: {
    type: String,
    default: "",
  },
  applicantskills: {
    type: String,
    default: "",
  },
  phonenumber: {
    type: String,
    default: "",
  },
  managerid: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  phonenumber: {
    type: String,
    default: "",
  },
  hours: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "applied",
  },
  jobname: {
    type: String,
    required: true,
  },
  jobid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  answer1: {
    type: String,
    default: "",
  },
  answer2: {
    type: String,
    default: "",
  },
  answer3: {
    type: String,
    default: "",
  },
  answer4: {
    type: String,
    default: "",
  },
  rating: {
    type: String,
    default: "",
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
