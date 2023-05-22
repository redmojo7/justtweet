const express = require('express');
const userRouter = express.Router();
const userService = require('../services/userService');

userRouter.get('/profile', async (req, res) => {
    username = req.query.username;
    userService.getUserByUsername(username).then((data) => {
        console.log("tweetRouter.get result:", data);
        if (data.error) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ user: data.foundUser});
    }
    ).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
    );
});

module.exports = userRouter;
