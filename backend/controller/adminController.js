const User = require("../models/user");
const Job = require("../models/job");
const Application = require("../models/application");
const Payment = require("../models/payment");

exports.getDashboardData = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalJobs = await Job.countDocuments();
    const totalApplications = await Application.countDocuments();
    const totalPayments = await Payment.countDocuments({ status: "released" });

    res.json({
      totalUsers,
      totalJobs,
      totalApplications,
      totalPayments,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
