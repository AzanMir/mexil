const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const User = require("./models/user"); // Add this
const Contact = require("./models/Contact"); // Add this

const app = express();

connectDB();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { username, mail, phone, option, txt } = req.body;
    console.log("Received contact data:", {
      username,
      mail,
      phone,
      option,
      txt,
    });

    const contact = new Contact({
      username,
      email: mail,
      phone,
      option,
      message: txt,
    });

    await contact.save();
    console.log("Contact saved successfully");

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

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
    console.log("User saved successfully");

    res
      .status(201)
      .json({ message: `User ${username} signed up successfully!` });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    res.json({
      message: "Login successful",
      user: { name: user.username, email: user.email },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
