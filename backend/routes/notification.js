const express = require("express");
const {
  getNotifications,
  markAsRead,
} = require("../controller/notificationController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", authMiddleware, getNotifications);
router.put("/:notificationId", authMiddleware, markAsRead);

module.exports = router;
