const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "released"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
