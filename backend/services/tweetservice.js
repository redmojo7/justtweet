// Import the necessary modules and dependencies
const Tweet = require('../models/Tweet');

const dateOptions = { month: 'short', day: 'numeric' };

function getTweetsByUser(userId) {
    //console.log("getTweetsByUser userId:", userId);
    return Tweet.find({ user: userId })
        .sort({ _id: -1 }).then((tweets) => {
            return tweets;
        }
        )
        .catch((err) => {
            console.error(err);
            return { error: 'Server Error' };
        }
        );
}

// Define the handleCreate function
function handleCreate(userId, content) {
    // Create a new tweet
    const newTweet = new Tweet({
        content,
        comments: 0,
        retweets: 0,
        likes: 0,
        views: 0,
        user: userId,
        date: new Date().toLocaleDateString('en-US', dateOptions),
    });

    // Save the new tweet
    return newTweet.save().then((savedTweet) => {
        //console.log("tweetRouter.post savedTweet:", savedTweet);
        return savedTweet;
    }
    ).catch((err) => {
        console.error(err);
        return { error: 'Server Error' };
    }
    );
}

// Define the handleDelete function
function handleDelete(tweetId) {
    //console.log("handleDelete tweetId:", tweetId);
    return Tweet.deleteOne({ _id: tweetId })
        .then(() => {
            console.log("Deleted OK!");
            return;
        })
        .catch((err) => {
            console.error("Error: ", err);
        });
}

// Define the handleUpdate function
function handleUpdate(updatedTweet) {
    console.log("handleUpdate tweetId:", updatedTweet._id);
    //console.log("handleUpdate updatedTweet:", updatedTweet);
    return Tweet.findByIdAndUpdate(updatedTweet._id, { 
                content: updatedTweet.content,
                comments: updatedTweet.comments,
                retweets: updatedTweet.retweets,
                likes: updatedTweet.likes,
            })
        .then(() => {
            console.log("Tweet updated successfully");
        })
        .catch((err) => {
            console.error("Error updating tweet: ", err);
            throw new Error("An error occurred while updating the tweet");
        });
}




// Export functions
module.exports = {
    handleDelete,
    getTweetsByUser,
    handleCreate,
    handleUpdate
};
