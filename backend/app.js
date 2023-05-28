const express = require('express');
const initialize = require('./init');
const cors = require('cors');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const tweetRoute = require('./routes/tweetRoute');
const timeout = require('connect-timeout');

const app = express();
const port = 8080;

// Parse JSON bodies for incoming requests
app.use(bodyParser.json());

app.set('view engine', 'pug');

// Enable CORS
app.use(cors());

// Use routes
app.use(morgan('tiny'))
app.use(timeout('5s'));

app.use('/api/user', userRoute);
app.use('/api/tweet', tweetRoute);


app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to backend' });
});

// Initialize database and run server
initialize().then(() => {
  // Start server
  app.listen(port, () => console.log('Server listening on port ' + port + '!'));
});
