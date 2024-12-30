const express = require("express");
const { loginAdmin } = require("../controllers/adminController");
const loginLimiter = require("../middlewares/rateLimitAccess");
const router = express.Router();

// Admin login route
router.post("/login", loginLimiter, loginAdmin);

module.exports = router;
