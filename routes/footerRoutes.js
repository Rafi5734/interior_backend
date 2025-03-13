const express = require('express');
const router = express.Router();
const footerController = require('../controllers/footerController');

router.post('/', footerController.createFooter);
router.get('/', footerController.getAllFooters);
router.get('/:id', footerController.getFooterById);
router.put('/:id', footerController.updateFooter);
router.delete('/:id', footerController.deleteFooter);

module.exports = router;
