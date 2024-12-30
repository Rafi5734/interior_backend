const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }, // Path or URL of the uploaded image
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
