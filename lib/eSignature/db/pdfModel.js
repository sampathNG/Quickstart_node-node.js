const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
  },
  taxClassification: {
    type: String,
    required: true,
  },
  llcClassification: {
    type: String,
  },
  otherClassification: {
    type: String,
  },
  address: {
    type: Object,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  payeeCode: {
    type: String,
  },
  fatcaCode: {
    type: String,
  },
  requestorAddress: {
    type: String,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  SSN: {
    type: String,
  },
  EIN: {
    type: String,
  },
});

module.exports = mongoose.model("todos", todoSchema);
