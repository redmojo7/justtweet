import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import NavigationBar from "./components/navbar";
import ProfileCover from "./components/profilecover";
import ProfileInfo from "./components/profileinfo";
import ProfileStats from "./components/profilestats";
import NewTweet from "./components/newtweet";
import { TweetCards } from "./components/tweetcard";
import RightPanel from "./components/rightpanel";
import { fetchTweets, createTweet, deleteTweet } from './controllers/tweetcontroller';
import getProfile from './controllers/userscontroller';


function App() {

  const [cards, setCards] = useState([]);

  const [profile, setProfile] = useState({});

  const [statistics, setStatistics] = useState({
    tweets: 3,
    following: 10,
    followers: 10,
    likes: 0
  });


  // Function to update the statistics
  const updateStatistics = () => {
    if (cards.length === 0 || Object.keys(cards).length === 0) {
      // If `cards` is empty, set the statistics to default values
      setStatistics({
        tweets: 0,
        following: 10,
        followers: 10,
        likes: 0
      });
    } else {
      // Calculate the sum of likes
      const totalLikes = cards.reduce((total, card) => total + card.likes, 0);
  
      // Update the statistics state with the new values
      setStatistics(prevStatistics => ({
        ...prevStatistics,
        tweets: cards.length,
        likes: totalLikes
      }));
    }
  };


  const handleAddTweet = async (tweet) => {
    console.log("handleAddTweet Tweet Clicked:", tweet);
    //tweet.id = cards.length + 1;
    //setCards(cards => [tweet, ...cards]);
  
    const newTweet = await createTweet(tweet);
    console.log("New Tweet:", newTweet);
    const updatedCards = await fetchTweets();
    setCards(updatedCards);
  }

  const fetchProfile = async () => {
    const profile = await getProfile();
    console.log("Profile:", profile);
    setProfile(profile);
  }

  const fetchData = async () => {
    const updatedCards = await fetchTweets();
    setCards(updatedCards);
  };

  const deleteTweetAction = async (tweetId) => {
    console.log("Delete Tweet:", tweetId);
    await deleteTweet(tweetId);
  }

  useEffect(() => {
    fetchProfile();
    fetchData();
  }, []);

  // Use the useEffect hook to update the statistics when the cards change
  useEffect(() => {
    updateStatistics();
  }, [cards]);


  const handleLikeTweet = async (id) => {
    console.log("Like Clicked", id);
    setStatistics(prevState => ({
      ...prevState,
      likes: prevState.likes + 1
    }));
  }

  const handleDeleteTweet = async (tweetId) => {
    console.log("Delete Clicked", tweetId);
    deleteTweetAction(tweetId);
    fetchData();
  }


  return (
    <div className="App">
      <NavigationBar />
      <ProfileCover />
      <div className="container" >
        <div className="row">
          <div className="col-md-3">
          <img src={`images/${profile.avatar}`} className="avarta-image-flow" alt="avarta Image" />
          </div>
        </div>
      </div>
      <ProfileStats statistics={statistics} />
      <div className="container" >
        <div className="row">
          <div className="col-md-3">
            < ProfileInfo profile={profile} />
          </div>
          <div className="col-md-6">
            <NewTweet profile={profile} onAddTweet={handleAddTweet} />
            <br />
            <TweetCards profile={profile} cards={cards} onDeleteTweet={handleDeleteTweet} onLikeTweet={handleLikeTweet} />
          </div>
          <div className="col-md-3">
            <RightPanel />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App
