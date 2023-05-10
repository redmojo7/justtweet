const mongoose = require('mongoose');
const User = require('./models/user');
const db = require('./db');

const userData = {
  id: 1,
  name: 'Redmojo',
  account: 'redmojo',
  avatar: 'avatar.jpeg',
  location: 'Devonport, TAS',
  joined: 'January 2019',
};

const initialize = async () => {
  await User.deleteMany(); // Optional: delete all existing users before inserting new one
  const user = new User(userData);
  await user.save();
  console.log('User created successfully:', user);
}

module.exports = initialize;