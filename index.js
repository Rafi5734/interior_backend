const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoute");
const projectRoutes = require("./routes/projectRoutes");
const sliderRoutes = require("./routes/sliderRoutes");
const projectsSliderRoutes = require("./routes/projectSliderRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const messageRoutes = require("./routes/contactRoutes");
const footerRoutes = require("./routes/footerRoutes");

// Load environment variables
require("dotenv").config();

// Initialize app
const app = express();
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/projects/sliders", projectsSliderRoutes);
app.use('/api/footers', footerRoutes);


// Start server
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));
