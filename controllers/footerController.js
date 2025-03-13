const Footer = require('../model/FooterModel');

// Create a new footer entry
exports.createFooter = async (req, res) => {
  try {
    const newFooter = new Footer(req.body);
    await newFooter.save();
    res.status(201).json(newFooter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all footer entries
exports.getAllFooters = async (req, res) => {
  try {
    const footers = await Footer.find();
    res.status(200).json(footers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single footer entry by ID
exports.getFooterById = async (req, res) => {
  try {
    const footer = await Footer.findById(req.params.id);
    if (!footer) {
      return res.status(404).json({ message: 'Footer not found' });
    }
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a footer entry by ID
exports.updateFooter = async (req, res) => {
  try {
    const updatedFooter = await Footer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFooter) {
      return res.status(404).json({ message: 'Footer not found' });
    }
    res.status(200).json(updatedFooter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a footer entry by ID
exports.deleteFooter = async (req, res) => {
  try {
    const deletedFooter = await Footer.findByIdAndDelete(req.params.id);
    if (!deletedFooter) {
      return res.status(404).json({ message: 'Footer not found' });
    }
    res.status(200).json({ message: 'Footer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
