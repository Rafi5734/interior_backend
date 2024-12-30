const Project = require("../model/ProjectModel");

// Create a new project
const createProject = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

    // Validate required fields
    if (!title || !description || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save the project
    const newProject = new Project({ title, description, imageUrl });
      await newProject.save();

    res
      .status(201)
      .json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createProject };
