const Bid = require("../models/bid");
const Project = require("../models/project");

// Create a new bid
exports.createBid = async (req, res) => {
  try {
    const { projectId, amount, proposal } = req.body;
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    const bid = new Bid({
      project: projectId,
      freelancer: req.user.id,
      amount,
      proposal,
    });

    await bid.save();
    res.status(201).json({ message: "Bid placed successfully", bid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bids for a project
exports.getBidsForProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const bids = await Bid.find({ project: projectId }).populate(
      "freelancer",
      "name skills"
    );
    res.json(bids);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Accept a bid
exports.acceptBid = async (req, res) => {
  try {
    const { bidId } = req.params;
    const bid = await Bid.findById(bidId);
    if (!bid) return res.status(404).json({ message: "Bid not found" });

    bid.status = "accepted";
    await bid.save();

    // Update project status to "in progress"
    await Project.findByIdAndUpdate(bid.project, { status: "in progress" });

    res.json({ message: "Bid accepted successfully", bid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
