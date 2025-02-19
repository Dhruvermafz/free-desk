const express = require("express");
const {
  applyForJob,
  acceptBid,
} = require("../controller/applicationController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/apply", authMiddleware, applyForJob);
router.post("/accept", authMiddleware, acceptBid);

module.exports = router;
