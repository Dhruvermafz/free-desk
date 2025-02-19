const express = require("express");
const {
  createPaymentIntent,
  confirmPayment,
} = require("../controller/paymentController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/create-intent", authMiddleware, createPaymentIntent);
router.post("/confirm", authMiddleware, confirmPayment);

module.exports = router;
