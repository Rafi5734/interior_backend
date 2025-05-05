// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location_iframe: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Contact", contactSchema);
