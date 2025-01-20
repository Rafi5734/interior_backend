const Slider = require("../model/SliderModel");

// Get all sliders
exports.getAllSliders = async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sliders", error });
  }
};

// Get a single slider
exports.getSliderById = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch slider", error });
  }
};

// Create a new slider
exports.createSlider = async (req, res) => {
  const { sliderName, sliderImage, shortDescription } = req.body;
  try {
    const newSlider = new Slider({ sliderName, sliderImage, shortDescription });
    const savedSlider = await newSlider.save();
    res.status(201).json(savedSlider);
  } catch (error) {
    res.status(500).json({ message: "Failed to create slider", error });
  }
};

// Update a slider
exports.updateSlider = async (req, res) => {
  const { sliderName, sliderImage, shortDescription } = req.body;
  try {
    const updatedSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      { sliderName, sliderImage, shortDescription },
      { new: true }
    );
    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json(updatedSlider);
  } catch (error) {
    res.status(500).json({ message: "Failed to update slider", error });
  }
};

// Delete a slider
exports.deleteSlider = async (req, res) => {
  try {
    const deletedSlider = await Slider.findByIdAndDelete(req.params.id);
    if (!deletedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json({ message: "Slider deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete slider", error });
  }
};
