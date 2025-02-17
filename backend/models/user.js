const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["freelancer", "client", "admin"],
      required: true,
    },
    skills: { type: [String], default: [] },
    bio: { type: String, default: "" },
    portfolio: { type: [String], default: [] }, // Links to past work
    rating: { type: Number, default: 0 },
    completedJobs: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
