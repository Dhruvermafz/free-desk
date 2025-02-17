const express = require("express");
const {
  applyForJob,
  acceptBid,
} = require("../controllers/applicationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/apply", authMiddleware, applyForJob);
router.post("/accept", authMiddleware, acceptBid);

module.exports = router;
