// Imports
const mongoose = require("mongoose");

// Schema for the habit model
const habitSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    dates: [
      {
        date: String,
        complete: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
