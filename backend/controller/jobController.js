const Job = require("../models/job");

exports.searchJobs = async (req, res) => {
  try {
    const { category, location, priceRange, type, skills } = req.query;

    let filter = {};
    if (category) filter.category = category;
    if (location) filter.location = location;
    if (type) filter.type = type;
    if (skills) filter.skillsRequired = { $in: skills.split(",") };

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-");
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new job post
exports.createJob = async (req, res) => {
  try {
    const jobData = req.body;
    const job = new Job({
      ...jobData,
      client: req.user.id, // assuming you are passing authenticated user from middleware
    });
    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all jobs for a client (can be filtered or paginated)
exports.getClientJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ client: req.user.id }); // assuming you are passing authenticated user from middleware
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details of a specific job
exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a job (only client can update)
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (job.client.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Not authorized to update this job" });
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a job (only client can delete)
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    if (job.client.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this job" });
    }

    await job.remove();
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
