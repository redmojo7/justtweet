const mongoose = require('mongoose');

const mongodbUri = "mongodb+srv://admin:ivLP8phnaayYDPlC@newdb.eyriroh.mongodb.net";

// Connect to MongoDB and drop databases
mongoose.connect(mongodbUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB', err);
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  })

module.exports = mongoose.connection;
