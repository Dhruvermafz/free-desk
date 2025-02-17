const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const http = require("http"); // Add the missing import for http
const { Server } = require("socket.io"); // Add the missing import for Server (Socket.IO)
const notificationRoutes = require("./routes/notificationRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();

// Create the HTTP server
const server = http.createServer(app);

// Create Socket.IO instance attached to the server
const io = new Server(server, { cors: { origin: "*" } });

// Socket.IO Connection event
io.on("connection", (socket) => {
  console.log("⚡ User Connected:", socket.id);

  // Listen for messages
  socket.on("sendMessage", async ({ sender, receiver, content }) => {
    // Assume Message model and database logic are correctly implemented
    const message = await Message.create({ sender, receiver, content });
    io.emit("receiveMessage", message); // Emit the message to all connected clients
  });

  // Listen for disconnect event
  socket.on("disconnect", () => {
    console.log("❌ User Disconnected:", socket.id);
  });
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Failed:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/applications", applicationRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/admin", adminRoutes);

// Start Server and listen for connections
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
