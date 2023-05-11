import axios from 'axios';

export const fetchTweets = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/tweets');
    return response.data.tweets;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};

export const createTweet = (tweet) => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:8080/api/tweets', tweet)
      .then((response) => {
        resolve(response.data.tweet);
      })
      .catch((error) => {
        console.error('Error creating tweet:', error);
        reject(error);
      });
  });
};

