const express = require('express');
const tweetRouter = express.Router();
const User = require('../models/User');
const Tweet = require('../models/Tweet');
const tweetService = require('../services/tweetService');
const userService = require('../services/userService');


tweetRouter.get('/', async (req, res) => {
    const username = "redmojo";
    // Find the user by username
    userService.getUserByUsername(username).then((user) => {
        console.log("tweetRouter.get result:", user);
        if (user.error) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Get the tweets by userId
        tweetService.getTweetsByUser(user.foundUser._id).then((tweets) => {
            console.log("tweetRouter.get result:", tweets);
            res.json({ tweets });
        }).catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        });
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    });
});

// Create a new tweet
tweetRouter.post('/', async (req, res) => {
    console.log("tweetRouter.post req.body:", req.body);
    const { content, user } = req.body;

    // Create a new tweet
    tweetService.handleCreate(user._id, content).then((result) => {
        console.log("tweetRouter.post result:", result);
        res.status(201).json({ message: 'Tweet created successfully' });
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    });
});

// delete a tweet
tweetRouter.delete('/:tweetId', async (req, res) => {

    const tweetId = req.params.tweetId;

    tweetService.handleDelete(tweetId).then(() => {
        res.status(200).json({ message: "Tweet deleted successfully" });
    }).catch((err) => {
        console.error("Error deleting tweet: ", err);
        res.status(500).json({ error: "An error occurred while deleting the tweet" });
    }
    );
});

module.exports = tweetRouter;


