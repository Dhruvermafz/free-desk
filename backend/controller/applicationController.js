const Application = require("../models/application");
const Job = require("../models/job");

exports.applyForJob = async (req, res) => {
  try {
    const { jobId, coverLetter, bidAmount } = req.body;
    const freelancerId = req.user.id;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const existingApplication = await Application.findOne({
      job: jobId,
      freelancer: freelancerId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job" });
    }

    const application = await Application.create({
      job: jobId,
      freelancer: freelancerId,
      coverLetter,
      bidAmount,
      status: "pending",
    });

    job.applicants.push(freelancerId);
    await job.save();

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.acceptBid = async (req, res) => {
  try {
    const { applicationId } = req.body;
    const application = await Application.findById(applicationId).populate(
      "job"
    );

    if (!application)
      return res.status(404).json({ message: "Application not found" });
    if (application.job.client.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to accept this bid" });
    }

    application.status = "accepted";
    await application.save();

    application.job.status = "in progress";
    await application.job.save();

    res.status(200).json({ message: "Bid accepted successfully", application });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
