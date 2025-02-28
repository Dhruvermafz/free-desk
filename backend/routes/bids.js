const express = require("express");
const {
  createBid,
  getBidsForProject,
  acceptBid,
} = require("../controller/bidController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/", authMiddleware, createBid);
router.get("/:projectId", getBidsForProject);
router.put("/accept/:bidId", authMiddleware, acceptBid);

module.exports = router;
