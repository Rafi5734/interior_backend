const express = require("express");
const router = express.Router();
const Message = require("../model/ContactModel");

// Create a new message
router.post("/", async (req, res) => {
  try {
    const { type, name, phoneNumber, email, message } = req.body;
    const newMessage = await Message.create({ type, name, phoneNumber, email, message });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single message by ID
router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a message by ID
router.put("/:id", async (req, res) => {
  try {
    const { type, name, phoneNumber, email, message } = req.body;
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { type, name, phoneNumber, email, message },
      { new: true, runValidators: true }
    );
    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a message by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
