const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {

  try {

    console.log(req.body);

    const newContact = new Contact(req.body);

    await newContact.save();

    console.log("Saved Successfully");

    res.status(201).json({
      success: true,
      message: "Data saved successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

module.exports = router;