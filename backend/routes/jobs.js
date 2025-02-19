const express = require("express");
const {
  createJob,
  getJobs,
  searchJobs,
  getClientJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controller/jobController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", authMiddleware, createJob);

router.get("/", searchJobs);
router.get("/all/:id", getClientJobs);
router.get("/:id", getJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);
module.exports = router;
