const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  skillsRequired: [{ type: String }],
  location: { type: String },
  type: {
    type: String,
    enum: ["full-time", "part-time", "contract"],
    default: "full-time",
  },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  postedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["open", "closed", "filled"],
    default: "open",
  },
  deadline: { type: Date },
  timeframe: {
    startDate: { type: Date },
    endDate: { type: Date },
  },
  bids: [
    {
      bidder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      bidAmount: { type: Number },
      proposal: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  expiresAt: { type: Date },
});

module.exports = mongoose.model("Job", JobSchema);
