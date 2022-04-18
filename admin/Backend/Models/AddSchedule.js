const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleschema = new Schema({
  trainerName: {
    type: String,
    required: true,
  },
  trainingDate: {
    type: String,
    required: true,
  },
  startingTime: {
    type: String,
    required: true,
  },
  endingTime: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const data = mongoose.model("Training_Schedule", scheduleschema);
module.exports = data;
