const projectSlider = require("../model/projectSliderModel");

// Create a new slider
exports.createSlider = async (req, res) => {
  try {
    const { image, countryName, projectName } = req.body;

    if (!image || !countryName || !projectName) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const slider = new projectSlider({ image, countryName, projectName });
    await slider.save();

    res.status(201).json({ message: "Slider created successfully.", slider });
  } catch (error) {
    res.status(500).json({ message: "Error creating slider.", error });
  }
};

// Get all sliders
exports.getAllSliders = async (req, res) => {
  try {
    const sliders = await projectSlider.find();
    res.status(200).json(sliders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sliders.", error });
  }
};

// Get a single slider by ID
exports.getSliderById = async (req, res) => {
    try {
      const { id } = req.params;
      const slider = await projectSlider.findById(id);
  
      if (!slider) {
        return res.status(404).json({ message: "Slider not found." });
      }
  
      res.status(200).json(slider);
    } catch (error) {
      res.status(500).json({ message: "Error fetching slider.", error });
    }
  };


  // Update a slider
exports.updateSlider = async (req, res) => {
    try {
      const { id } = req.params;
      const { image, countryName, projectName } = req.body;
  
      const updatedSlider = await projectSlider.findByIdAndUpdate(
        id,
        { image, countryName, projectName },
        { new: true, runValidators: true }
      );
  
      if (!updatedSlider) {
        return res.status(404).json({ message: "Slider not found." });
      }
  
      res.status(200).json({ message: "Slider updated successfully.", updatedSlider });
    } catch (error) {
      res.status(500).json({ message: "Error updating slider.", error });
    }
  };

  // Delete a slider
exports.deleteSlider = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedSlider = await projectSlider.findByIdAndDelete(id);
  
      if (!deletedSlider) {
        return res.status(404).json({ message: "Slider not found." });
      }
  
      res.status(200).json({ message: "Slider deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error deleting slider.", error });
    }
  };
