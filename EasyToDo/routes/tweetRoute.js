const express = require('express');
const tweetRouter = express.Router();
const User = require('../models/User');
const Tweet = require('../models/Tweet');

tweetRouter.get('/', async (req, res) => {
    try {
        const username = "redmojo";
        const foundUser = await User.findOne({ account: username });
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const tweets = await Tweet.find({ user: foundUser._id }).sort({ _id: -1 });
        res.json({ tweets });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = tweetRouter;
