const express = require("express");
const router = express.Router();

const Wishlist = require("../models/Wishlist");

/* ================= ADD ================= */

router.post("/wishlist", async (req, res) => {

  try {

    console.log("Incoming Wishlist Data:", req.body);

    const wishlistItem = new Wishlist({
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
    });

    const savedItem = await wishlistItem.save();

    console.log("Saved Wishlist Item:", savedItem);

    res.status(201).json({
      success: true,
      message: "Added to wishlist successfully",
    });

  } catch (error) {

    console.log("WISHLIST SAVE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

/* ================= GET ================= */

router.get("/wishlist", async (req, res) => {

  try {

    const items = await Wishlist.find();

    console.log("Wishlist Items:", items);

    res.json(items);

  } catch (error) {

    console.log(error);

  }

});

/* ================= DELETE ================= */

router.delete("/wishlist/:id", async (req, res) => {

  try {

    await Wishlist.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

  }

});

module.exports = router;