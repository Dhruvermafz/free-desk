const Message = require("../models/message");

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, message, projectId } = req.body;

    const newMessage = new Message({
      sender: req.user.id,
      receiver: receiverId,
      project: projectId || null,
      message,
    });

    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get messages between two users
exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.params;
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: userId },
        { sender: userId, receiver: req.user.id },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
