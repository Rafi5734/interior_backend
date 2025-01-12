const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route to create a new project
router.post('/projects', projectController.createProject);

// Route to add a section to a project
router.post('/projects/:projectId/sections', projectController.addSection);

// Route to get all projects
router.get('/projects', projectController.getAllProjects);

// Route to get a specific project by ID
router.get('/projects/:projectId', projectController.getProjectById);

// Route to delete a project
router.delete('/projects/:projectId', projectController.deleteProject);

// Route to update a project's title
router.put('/projects/:projectId', projectController.updateProject);

// Route to update a section in a project
router.put('/projects/:projectId/sections/:sectionId', projectController.updateSection);

router.delete('/projects/:projectId/sections/:sectionId', projectController.deleteSection);


module.exports = router;
