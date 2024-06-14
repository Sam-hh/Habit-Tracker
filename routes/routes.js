// imports
const express = require("express");
const router = express.Router();
const {
  getTodayHabits,
  getWeeklyHabits,
  addHabit,
  updateHabitStatus,
  deleteHabit,
} = require("../controller/habitController");

// Get Today's Habits from Database
router.get("/", getTodayHabits);

// Get Weekly Habits from Database
router.get("/weekly", getWeeklyHabits);

// Add a new Habit
router.post("/habit", addHabit);

// Update Habit Status
router.get("/habitStatus", updateHabitStatus);

// Delete a Habit
router.get("/:id", deleteHabit);

module.exports = router;
