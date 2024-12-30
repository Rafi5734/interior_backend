const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Ensure this is at the top of your entry file

// Log to verify environment variables
console.log("Admin Email:", process.env.ADMIN_EMAIL);
console.log("Admin Password:", process.env.ADMIN_PASSWORD);

// Pre-hash the fixed admin password
const FIXED_ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: bcrypt.hashSync(
    process.env.ADMIN_PASSWORD || "default_password",
    10
  ), // Use fallback
};

// Login function
const loginAdmin = async (req, res) => {
  const { email, password, role } = req.body;

  if (role !== "admin") {
    return res.status(401).json({ message: "Invalid role" });
  }

  if (email !== FIXED_ADMIN.email) {
    return res.status(401).json({ message: "Invalid email" });
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, FIXED_ADMIN.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Generate a JWT token
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ message: "Login successful", token });
};

module.exports = { loginAdmin };
