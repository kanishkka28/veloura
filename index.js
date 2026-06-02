const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ==============================
   MIDDLEWARE
============================== */

app.use(cors());
app.use(express.json());

/* ==============================
   MONGODB CONNECTION
============================== */

console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ==============================
   ROUTES
============================== */

app.use("/api", require("./routes/contactRoutes"));

app.use("/api", require("./routes/cartRoutes"));
console.log("Cart Routes Loaded");

app.use("/api", require("./routes/wishlistRoutes"));
app.use("/api", require("./routes/feedbackRoutes"));

app.use("/api", require("./routes/authRoutes"));
/* ==============================
   SERVER
============================== */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});