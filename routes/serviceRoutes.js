const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

// Routes
router.post('/', serviceController.createService); // Get all services
router.get('/', serviceController.getServices); // Get all services
router.get('/:id', serviceController.getServiceById); // Get service by ID
router.put('/:id', serviceController.updateService); // Update a service
router.delete('/:id', serviceController.deleteService); // Delete a service

module.exports = router;
