const express = require("express");
const { sendMessage, getMessages } = require("../controller/chatController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/send", authMiddleware, sendMessage);
router.get("/:receiver", authMiddleware, getMessages);

module.exports = router;
