const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoute");
const projectRoutes = require("./routes/projectRoutes");
const sliderRoutes = require("./routes/sliderRoutes");

// Load environment variables
require("dotenv").config();


// Initialize app
const app = express();

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
app.use('/api/sliders', sliderRoutes);



// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
