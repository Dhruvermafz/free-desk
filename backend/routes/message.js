const express = require("express");
const { sendMessage, getMessages } = require("../controller/messageController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/", authMiddleware, sendMessage);
router.get("/:userId", authMiddleware, getMessages);

module.exports = router;
