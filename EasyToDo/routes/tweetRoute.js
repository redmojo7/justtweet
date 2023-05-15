const express = require('express');
const tweetRouter = express.Router();
const User = require('../models/User');
const Tweet = require('../models/Tweet');

const dateOptions = { month: 'short', day: 'numeric' };
tweetRouter.get('/', async (req, res) => {
    try {
        const username = "redmojo";
        const foundUser = await User.findOne({ account: username });
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const tweets = await Tweet.find({ user: foundUser._id })
            .sort({ _id: -1 });
        //.populate('user');
        res.json({ tweets });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create a new tweet
tweetRouter.post('/', async (req, res) => {
    try {
        console.log("tweetRouter.post req.body:", req.body);
        const { content, user } = req.body;

        // Find the user by userId
        const foundUser = await User.findOne({ account: user.account });
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new tweet
        const newTweet = new Tweet({
            content,
            comments: 0,
            retweets: 0,
            likes: 0,
            views: 0,
            user: foundUser._id,
            date: new Date().toLocaleDateString('en-US', dateOptions),
        });

        // Save the new tweet
        const savedTweet = await newTweet.save();
        console.log("tweetRouter.post savedTweet:", savedTweet);
        res.status(201).json({ tweet: savedTweet });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// delete a tweet
tweetRouter.delete('/:id', async (req, res) => {
    const tweetId = req.params.id;
    try {
        // delete the tweet
        const deletedTweet = await Tweet.deleteOne({ _id: tweetId }).exec();

        // Check if the tweet was successfully deleted
        if (deletedTweet.deletedCount === 1) {
            res.status(200).json({ message: 'Tweet deleted successfully' });
        } else {
            res.status(404).json({ message: 'Tweet not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = tweetRouter;
