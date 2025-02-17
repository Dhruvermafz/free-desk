const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Payment = require("../models/payment");

exports.createPaymentIntent = async (req, res) => {
  try {
    const { jobId, freelancerId, amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "usd",
      payment_method_types: ["card"],
    });

    const payment = await Payment.create({
      job: jobId,
      client: req.user.id,
      freelancer: freelancerId,
      amount,
      status: "pending",
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.confirmPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;
    const payment = await Payment.findById(paymentId);
    if (!payment) return res.status(404).json({ message: "Payment not found" });

    payment.status = "released";
    await payment.save();

    res.status(200).json({ message: "Payment successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
