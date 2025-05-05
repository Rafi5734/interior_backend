const mongoose = require("mongoose");

const navbarContentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("NavbarContent", navbarContentSchema);
