const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({
  imageLink: {
    type: String,
    required: true,
  },
  imageTitle: {
    type: String,
    required: true,
  },
  mainTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Footer = mongoose.model('Property', FooterSchema);

module.exports = Footer;
