const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, skills } = req.body;
    const user = await User.create({ name, email, password, role, skills });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Logout the user by invalidating the token (no action required on server)
exports.logout = (req, res) => {
  try {
    // No need to do anything on the server side since JWT is stateless
    // But if using sessions or cookies, you'd clear the session here
    res.json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
