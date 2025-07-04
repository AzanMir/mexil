const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  username: String,
  email: String, // Changed from mail
  phone: String,
  option: String,
  message: String, // Changed from txt
});

module.exports = mongoose.model("Contact", contactSchema);
