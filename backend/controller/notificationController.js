const Notification = require("../models/notification");

exports.createNotification = async (user, message) => {
  try {
    const notification = await Notification.create({
      user,
      message,
    });
    return notification;
  } catch (err) {
    console.error(err);
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id }).sort({
      timestamp: -1,
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const notification = await Notification.findById(notificationId);

    if (!notification)
      return res.status(404).json({ message: "Notification not found" });

    notification.isRead = true;
    await notification.save();

    res.status(200).json({ message: "Notification marked as read" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
