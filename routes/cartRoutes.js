const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

/* ================= ADD ================= */

router.post("/cart", async (req, res) => {

  try {

    console.log("Incoming Data:", req.body);

    const cartItem = new Cart({
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
    });

    const savedItem = await cartItem.save();

    console.log("Saved Item:", savedItem);

    res.status(201).json({
      success: true,
      message: "Added to cart successfully",
    });

  } catch (error) {

    console.log("SAVE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

/* ================= GET ================= */

router.get("/cart", async (req, res) => {

  try {

    const items = await Cart.find();

    console.log("Cart Items:", items);

    res.json(items);

  } catch (error) {

    console.log(error);

  }

});

/* ================= DELETE ================= */

router.delete("/cart/:id", async (req, res) => {

  try {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

  }

});
/* ================= UPDATE ================= */

router.put("/cart/:id", async (req, res) => {

  try {

    const updatedItem =
      await Cart.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedItem);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});
module.exports = router;