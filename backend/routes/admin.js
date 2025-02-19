const express = require("express");
const {
  getDashboardData,
  getAllUsers,
  getAllJobs,
} = require("../controller/adminController");
const authMiddleware = require("../middleware/auth");
const { isAdmin } = require("../middleware/role");

const router = express.Router();

router.get("/dashboard", authMiddleware, isAdmin, getDashboardData);
router.get("/users", authMiddleware, isAdmin, getAllUsers);
router.get("/jobs", authMiddleware, isAdmin, getAllJobs);

module.exports = router;
