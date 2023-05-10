const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  account: { type: String, required: true },
  avatar: { type: String, required: true },
  location: { type: String, required: true },
  joined: { type: String, required: true },
});

// User model
const User = mongoose.model('User', userSchema);

module.exports = User;
