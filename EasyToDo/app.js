const express = require('express');
//const mongoose = require('mongoose');
const connection = require('./db');
const initialize = require('./init');
const app = express();


//app.use(express.json());
app.set('view engine', 'pug');

//app.use('/api', routes);


app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to my website' });
});



// Initialize database and run server
initialize().then(() => {
  // Your application code goes here
  app.listen(8080, () => console.log('Server listening on port 3000'));
});
