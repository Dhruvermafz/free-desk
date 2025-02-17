const Message = require("../models/message");

exports.sendMessage = async (req, res) => {
  try {
    const { receiver, content } = req.body;
    const sender = req.user.id;

    const message = await Message.create({ sender, receiver, content });

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { receiver } = req.params;
    const sender = req.user.id;

    const messages = await Message.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
