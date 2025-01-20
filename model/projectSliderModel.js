const mongoose = require("mongoose");

const projectSliderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const projectSlider = mongoose.model("projectSlider", projectSliderSchema);

module.exports = projectSlider;
