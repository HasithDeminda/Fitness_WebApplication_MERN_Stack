const router = require("express").Router();
const {
  addSchedule,
  getSchedules,
  getScheduleById,
  updateScheduleDetails,
  DeleteSchedule,
} = require("../controller/Schedule");

router.route("/add").post(addSchedule);

router.route("/all").get(getSchedules);

router.route("/getOneSchedule/:id").get(getScheduleById);

router.route("/scheduleUpdate/:id").patch(updateScheduleDetails);

router.route("/deleteSchedule/:id").delete(DeleteSchedule);

module.exports = router;
