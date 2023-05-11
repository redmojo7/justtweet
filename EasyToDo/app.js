const express = require('express');
const initialize = require('./init');
const cors = require('cors');
// Import routes
const userRoute = require('./routes/userRoute');
const tweetRoute = require('./routes/tweetRoute');
const app = express();
const port = 8080;

//app.use(express.json());
app.set('view engine', 'pug');

//app.use('/api', routes);
// Enable CORS
app.use(cors());

// Use routes
app.use('/api/user', userRoute);
app.use('/api/tweets', tweetRoute);


app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to backend' });
});

// Initialize database and run server
initialize().then(() => {
  // Your application code goes here
  app.listen(port, () => console.log('Server listening on port ' + port + '!'));
});
