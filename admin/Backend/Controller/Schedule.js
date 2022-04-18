const asyncHandler = require("express-async-handler");
const Schedule = require("../models/AddSchedule");

//Add Schedule by admin
const addSchedule = asyncHandler(async (req, res) => {
  const {
    trainerName,
    trainingDate,
    startingTime,
    endingTime,
    title,
    description,
  } = req.body;

  if (
    !trainerName ||
    !trainingDate ||
    !startingTime ||
    !title ||
    !description
  ) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }

  const user = await Schedule.create({
    trainerName,
    trainingDate,
    startingTime,
    endingTime,
    title,
    description,
    // publishedDate,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      trainerName: user.trainerName,
      trainingDate: user.trainingDate,
      startingTime: user.startingTime,
      endingTime: user.endingTime,
      title: user.title,
      description: user.description,
      // publishedDate: user.publishedDate,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//Get all students details
const getSchedules = asyncHandler(async (req, res) => {
  const user = await Schedule.find();
  res.json(user);
});

//Fetch one student
const getScheduleById = asyncHandler(async (req, res) => {
  const user = await Schedule.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Schedule not found" });
  }
});

//Update Student Details
const updateScheduleDetails = asyncHandler(async (req, res) => {
  const user = await Schedule.findById(req.params.id);

  if (user) {
    user.trainerName = req.body.trainerName || user.trainerName;
    user.trainingDate = req.body.trainingDate || user.trainingDate;
    user.startingTime = req.body.startingTime || user.startingTime;
    user.endingTime = req.body.endingTime || user.endingTime;
    user.title = req.body.title || user.title;
    user.description = req.body.description || user.description;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      trainerName: updatedUser.trainerName,
      trainingDate: updatedUser.trainingDate,
      startingTime: updatedUser.startingTime,
      endingTime: updatedUser.endingTime,
      title: updatedUser.title,
      description: updatedUser.description,
    });
  } else {
    res.status(404);
    throw new Error("Schedule Not Found");
  }
});

//Delete a schedule
const DeleteSchedule = asyncHandler(async (req, res) => {
  const user = await Schedule.findByIdAndDelete(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Schedule Not Found" });
  }
});

module.exports = {
  addSchedule,
  getSchedules,
  getScheduleById,
  updateScheduleDetails,
  DeleteSchedule,
};
