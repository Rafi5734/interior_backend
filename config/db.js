const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to", process.env.DB_URI);
    mongoose.set("debug", true); // Enable debug mode for Mongoose
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    // console.error("Database connection failed:", error.message);
    // process.exit(1);
  }
};

module.exports = connectDB;
