const express = require("express");
const { createProject } = require("../controllers/projectController");

const router = express.Router();

// POST route to create a project
router.post("/create-project", createProject);

module.exports = router;
