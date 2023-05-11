const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');

userRouter.get('/', async (req, res) => {
    try {
        const user = await User.findOne({ account: "redmojo" }); // Assuming the user is identified by the 'id' field
        res.json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
});

module.exports = userRouter;
