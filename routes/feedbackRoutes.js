const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);

    await feedback.save();

    res.status(201).json({
      message: "Feedback submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;