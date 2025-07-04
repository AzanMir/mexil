const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Matches signup form
  email: { type: String, required: true, unique: true }, // Matches signup form
  password: { type: String, required: true }, // Will be hashed
  createdAt: { type: Date, default: Date.now }, // Keeps your timestamp
});

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10); // Hash with salt rounds 10
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
