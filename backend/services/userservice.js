// Import the necessary modules and dependencies
const User = require('../models/User');

function getUserByUsername(username) {
    //console.log("getUserByUsername username:", username);
    return User.findOne({ account: username })
        .then((foundUser) => {
            if (!foundUser) {
                return { error: 'User not found' };
            }
            return { foundUser };
        }
        )
        .catch((err) => {
            console.error(err);
            return { error: 'Server Error' };
        }
        );
}

// Export functions
module.exports = {
    getUserByUsername
};