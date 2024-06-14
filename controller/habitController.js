// Imports
const Habit = require("../models/habitModel");

// Helper function for error handling
const handleError = (res, err, message = "Internal Server Error") => {
  console.error(err);
  res.status(500).send(message);
};

// Get Today's Habits from Database
const getTodayHabits = async (req, res) => {
  try {
    const habits = await Habit.find()
      .select("-updatedAt -createdAt -__v")
      .sort({ _id: -1 });
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const today = new Date(Date.now() - tzoffset).toISOString().slice(0, 10);
    const todayHabits = habits.map((habit) => {
      const dateEntry = habit.dates.find(({ date }) => date === today);
      return { ...habit.toObject(), dates: dateEntry ? [dateEntry] : [] };
    });
    const days = [
      {
        date: today,
        day: new Date(today).toLocaleDateString("en-us", { weekday: "short" }),
      },
    ];
    res.render("habit", { habits: todayHabits, days, view: "today" });
  } catch (err) {
    handleError(res, err);
  }
};

// Get Weekly Habits from Database
const getWeeklyHabits = async (req, res) => {
  try {
    const habits = await Habit.find()
      .select("-updatedAt -createdAt -__v")
      .sort({ _id: -1 });

    const days = Array.from({ length: 7 }, (_, i) => getD(-i)).reverse();

    res.render("habit", { habits, days, view: "week" });
  } catch (err) {
    handleError(res, err);
  }
};

// Function to Get Date and Day adjusted for past days
const getD = (n) => {
  const date = new Date();
  date.setDate(date.getDate() + n);
  const formattedDate = date.toISOString().slice(0, 10);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return { date: formattedDate, day: days[date.getDay()] };
};

// Add a new Habit
const addHabit = async (req, res) => {
  try {
    const habit = new Habit({ content: req.body.content, dates: [] });
    await habit.save();
    res.redirect("/");
  } catch (err) {
    handleError(res, err);
  }
};

// Update Habit Status
const updateHabitStatus = async (req, res) => {
  const { id, date } = req.query;
  try {
    const habit = await Habit.findById(id);
    if (!habit) {
      return res.status(404).send("Habit not found");
    }
    const dateEntry = habit.dates.find((d) => d.date === date);
    if (dateEntry) {
      dateEntry.complete =
        dateEntry.complete === "yes"
          ? "no"
          : dateEntry.complete === "no"
          ? ""
          : "yes";
    } else {
      habit.dates.push({ date, complete: "yes" });
    }
    await habit.save();
    res.redirect(req.headers.referer || "/");
  } catch (err) {
    handleError(res, err);
  }
};

// Delete a Habit
const deleteHabit = async (req, res) => {
  try {
    await Habit.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = {
  getTodayHabits,
  getWeeklyHabits,
  addHabit,
  updateHabitStatus,
  deleteHabit,
};
