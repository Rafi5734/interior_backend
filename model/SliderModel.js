const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema(
  {
    sliderName: {
      type: String,
      required: true,
      trim: true,
    },
    sliderImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Slider", sliderSchema);
