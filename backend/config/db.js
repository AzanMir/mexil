const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Still recommended for URL parsing
      useUnifiedTopology: true, // Still recommended for connection handling
    });
    console.log(
      `MongoDB Connected: ${conn.connection.host} (Database: ${conn.connection.name})`
    );
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
