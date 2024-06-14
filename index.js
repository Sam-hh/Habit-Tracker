// imports
require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");
const router = require("./routes/routes");
const { connectToDatabase } = require("./app/db");

const app = express();

// Setting up view engine and views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to the database
connectToDatabase();

// Log file setup
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// Middleware setup
app.use(morgan("combined", { stream: accessLogStream })); // Logging to file
app.use(express.urlencoded({ extended: false })); // URL-encoded form data
app.use(express.json()); // JSON payloads
app.use("/assets", express.static(path.join(__dirname, "assets"))); // Static files

// Routes
app.use(router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
