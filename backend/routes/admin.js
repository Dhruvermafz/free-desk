const express = require("express");
const {
  getDashboardData,
  getAllUsers,
  getAllJobs,
} = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, isAdmin, getDashboardData);
router.get("/users", authMiddleware, isAdmin, getAllUsers);
router.get("/jobs", authMiddleware, isAdmin, getAllJobs);

module.exports = router;
