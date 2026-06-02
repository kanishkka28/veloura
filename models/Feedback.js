const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  product: String,
  review: String,
  feedbackType: String,
  rating: String,
  issue: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);