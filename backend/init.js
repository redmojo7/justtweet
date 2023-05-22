const mongoose = require('mongoose');
const User = require('./models/User');
const Tweet = require('./models/Tweet');
const db = require('./db');

const users = [
  {
    name: 'Redmojo',
    account: 'redmojo',
    avatar: 'avatar.jpeg',
    location: 'Devonport, TAS',
    joined: 'January 2019',
  },
  {
    name: 'John Doe',
    account: 'johndoe',
    avatar: 'avatar2.jpeg',
    location: 'Perth, WA',
    joined: 'February 2020',
  },
  {
    name: 'Jane Smith',
    account: 'janesmith',
    avatar: 'avatar3.jpeg',
    location: 'Melbourne, VIC',
    joined: 'March 2021',
  },
  {
    name: 'Alex Johnson',
    account: 'alexjohnson',
    avatar: 'avatar4.jpeg',
    location: 'Sydney, NSW',
    joined: 'April 2022',
  },
];



const initialize = async () => {
  await User.deleteMany(); // Optional: delete all existing users before inserting new one
  const createdUsers = await User.create(users);
  console.log('User created successfully:', createdUsers);

  await Tweet.deleteMany(); // Optional: delete all existing tweets before inserting new ones
  const tweets = [
    { content: "My first tweet!", comments: 1, retweets: 2, likes: 3, views: 10, date: "Jul 18", user: createdUsers[0]._id },
    { content: "My second tweet!", comments: 2, retweets: 22, likes: 33, views: 100, date: "Jul 19", user: createdUsers[1]._id },
    { content: "My third tweet!", comments: 3, retweets: 222, likes: 333, views: 1000, date: "Jul 20", user: createdUsers[2]._id },
    { content: "Hello world!", comments: 4, retweets: 2222, likes: 3333, views: 10000, date: "Jul 21", user: createdUsers[3]._id },
    { content: "My second tweet!", comments: 5, retweets: 211, likes: 311, views: 1011, date: "Jul 18", user: createdUsers[0]._id }
  ];
  await Tweet.create(tweets);
  console.log('Tweets created successfully');
}

module.exports = initialize;