const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/user");
const Contact = require("./models/Contact");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/auth"); // Import from auth.js

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact endpoint (protected by JWT)
app.post("/api/contact", authMiddleware, async (req, res) => {
  try {
    console.log("=== CONTACT API CALLED ===");
    console.log("Full request body:", req.body);
    console.log("Request body keys:", Object.keys(req.body));

    const { username, email, phone, option, message } = req.body;

    console.log("Extracted fields:");
    console.log("- username:", username, "(type:", typeof username, ")");
    console.log("- email:", email, "(type:", typeof email, ")");
    console.log("- phone:", phone, "(type:", typeof phone, ")");
    console.log("- option:", option, "(type:", typeof option, ")");
    console.log("- message:", message, "(type:", typeof message, ")");

    const missingFields = [];
    if (!username || username.trim() === "") missingFields.push("username");
    if (!email || email.trim() === "") missingFields.push("email");
    if (!phone || phone.trim() === "") missingFields.push("phone");
    if (!option || option.trim() === "") missingFields.push("option");
    if (!message || message.trim() === "") missingFields.push("message");

    if (missingFields.length > 0) {
      console.log("Missing fields:", missingFields);
      return res.status(400).json({
        error: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const contact = new Contact({
      username: username.trim(),
      email: email.trim(),
      phone: phone.trim(),
      option: option.trim(),
      message: message.trim(),
    });

    console.log("About to save contact:", contact);
    await contact.save();
    console.log("Contact saved successfully");
    console.log("=========================");

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("=== CONTACT ERROR ===");
    console.error("Error details:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("===================");
    res.status(400).json({ error: error.message });
  }
});

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        error: "Username, email, and password are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with this email" });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();
    console.log("User saved successfully to mywebpage");

    res
      .status(201)
      .json({ message: `User ${username} signed up successfully!` });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint (generate JWT)
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("Login successful from mywebpage:", { email });

    res.json({
      message: "Login successful",
      token,
      user: { name: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(400).json({ error: error.message });
  }
});

// Custom error-handling middleware for JWT errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Invalid or missing token" });
  }
  next(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
