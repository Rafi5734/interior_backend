const express = require('express');
const router = express.Router();
const sliderController = require('../controllers/sliderController');

// Get all sliders
router.get('/', sliderController.getAllSliders);

// Get a slider by ID
router.get('/:id', sliderController.getSliderById);

// Create a new slider
router.post('/', sliderController.createSlider);

// Update a slider by ID
router.put('/:id', sliderController.updateSlider);

// Delete a slider by ID
router.delete('/:id', sliderController.deleteSlider);

module.exports = router;
