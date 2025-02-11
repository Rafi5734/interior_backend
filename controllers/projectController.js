const Project = require("../model/ProjectModel");

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title } = req.body;
    const project = new Project({ title });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a section to an existing project
exports.addSection = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { subTitle, image, shortDescription } = req.body;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    project.sections.push({ subTitle, image, shortDescription });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).send({message: "Project deleted!"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project's title
exports.updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { title } = req.body;

    const project = await Project.findByIdAndUpdate(
      projectId,
      { title },
      { new: true, runValidators: true } // Return the updated project
    );

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a section of a project
exports.updateSection = async (req, res) => {
  try {
    const { projectId, sectionId } = req.params;
    const { subTitle, image, shortDescription } = req.body;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const section = project.sections.id(sectionId);
    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }

    // Update section fields
    section.subTitle = subTitle || section.subTitle;
    section.image = image || section.image;
    section.shortDescription = shortDescription || section.shortDescription;

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a section from a project's sections array
exports.deleteSection = async (req, res) => {
  try {
    const { projectId, sectionId } = req.params;

    // Find the project and update by removing the specific section
    const project = await Project.findByIdAndUpdate(
      projectId,
      { $pull: { sections: { _id: sectionId } } }, // Use $pull to remove the section by ID
      { new: true } // Return the updated project after the operation
    );

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ message: "Section deleted successfully", project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

