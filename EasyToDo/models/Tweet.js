const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: String,
    comments: Number,
    retweets: Number,
    likes: Number,
    views: Number,
    date: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// User model
const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
