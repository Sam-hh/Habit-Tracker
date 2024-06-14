// Imports
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Function to connect to MongoDB database
const connectToDatabase = async () => {
  mongoose.set("strictQuery", false);

  const mongoUrl = process.env.MONGODB_URL;
  if (!mongoUrl) {
    console.error("MongoDB URL is not defined in the .env file");
    return;
  }

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB: Habit-Tracker");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = { connectToDatabase };
