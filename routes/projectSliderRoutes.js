const express = require("express");
const {
  createSlider,
  getAllSliders,
  getSliderById,
  updateSlider,
  deleteSlider,
} = require("../controllers/projectSliderController");

const router = express.Router();

// Routes
router.post("/", createSlider);
router.get("/", getAllSliders);
router.get("/:id", getSliderById);
router.put("/:id", updateSlider);
router.delete("/:id", deleteSlider);

module.exports = router;
