const express = require("express");
const {
  createJob,
  getJobs,
  searchJobs,
} = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createJob);
router.get("/", getJobs);
router.get("/", searchJobs);
module.exports = router;
