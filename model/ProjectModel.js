const mongoose = require('mongoose');

// Section Schema
const sectionSchema = new mongoose.Schema({
  subTitle: { type: String, required: true },
  image: { type: String, required: true }, // Store image as URL
  shortDescription: { type: String, required: true },
});

// Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sections: [sectionSchema], // Embed sections in the project schema
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
