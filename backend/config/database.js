const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use the exact database name you created
    const conn = await mongoose.connect("mongodb://localhost:27017/mywebpage");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
