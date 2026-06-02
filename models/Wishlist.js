const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Wishlist", wishlistSchema);