const User = require("../models/user");
// Get user details
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming the user is authenticated
    if (!user) return res.status(404).json({ message: "User not found!" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user details (name, bio, etc.)
exports.updateUser = async (req, res) => {
  try {
    const { name, bio, skills } = req.body;
    const user = await User.findById(req.user.id); // Assuming user is authenticated

    if (!user) return res.status(404).json({ message: "User not found!" });

    // Update user details
    user.name = name || user.name;
    user.bio = bio || user.bio;
    user.skills = skills || user.skills;

    await user.save();
    res.json({ message: "User details updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user account
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming user is authenticated

    if (!user) return res.status(404).json({ message: "User not found!" });

    await user.remove();
    res.json({ message: "User account deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
