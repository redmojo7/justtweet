import axios from 'axios';

const getTweets = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/tweet');
    return response.data.tweets;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};

const createTweet = async (tweet) => {
  try {
    const response = await axios.post('http://localhost:8080/api/tweet', tweet);
    return response.data.tweet;
  } catch (error) {
    console.error('Error creating tweet:', error);
    throw error;
  }
};

const deleteTweet = async (tweetId) => {
  console.log("deleteTweet:", tweetId);
  try {
    const response = await axios.delete(`http://localhost:8080/api/tweet/${tweetId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting tweet:', error);
    throw error;
  }
};

const updateTweet = async (updatedTweet) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/tweet`, updatedTweet);
    return response.data;
  } catch (error) {
    console.error('Error updating tweet:', error);
    throw error;
  }
};

export { getTweets, createTweet, deleteTweet, updateTweet};