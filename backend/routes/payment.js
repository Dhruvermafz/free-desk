const express = require("express");
const {
  createPaymentIntent,
  confirmPayment,
} = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create-intent", authMiddleware, createPaymentIntent);
router.post("/confirm", authMiddleware, confirmPayment);

module.exports = router;
