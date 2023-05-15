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
import avartaImage from './images/avatar.jpeg';
import {fetchTweets, createTweet} from './components/services/tweetservice';
import getProfile from './components/services/userservice';


function App() {

  const [cards, setCards] = useState([]);

  const [profile, setProfile] = useState({});

  const [statistics, setStatistics] = useState({
    tweets: 10,
    following: 10,
    followers: 10,
    likes: 10
  });

  const handleAddTweet = async (tweet) => {
    console.log("handleAddTweet Tweet Clicked:", tweet);
    //tweet.id = cards.length + 1;
    //setCards(cards => [tweet, ...cards]);
    setStatistics(prevState => ({
      ...prevState,
      tweets: prevState.tweets + 1
    }));
    const newTweet = await createTweet(tweet);
    console.log("New Tweet:", newTweet);
    const updatedCards = await fetchTweets();
    setCards(updatedCards);
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile();
      setProfile(profile);
    }

    const fetchData = async () => {
      const updatedCards = await fetchTweets();
      setCards(updatedCards);
    };

    fetchProfile();
    fetchData();
    
  }, []);

  const handleLikeTweet = async (id) => {
    console.log("Like Clicked", id);
    setStatistics(prevState => ({
      ...prevState,
      likes: prevState.likes + 1
    }));
  }


  return (
    <div className="App">
      <NavigationBar />
      <ProfileCover />
      <div className="container" >
        <div className="row">
          <div className="col-md-3">
            <img src={avartaImage} className="avarta-image-flow" alt="avarta Image" />
          </div>
        </div>
      </div>
      <ProfileStats statistics={statistics} />
      <div className="container" >
        <div className="row">
          <div className="col-md-3">
            < ProfileInfo profile={profile}/>
          </div>
          <div className="col-md-6">
            <NewTweet profile={profile} onAddTweet={handleAddTweet} />
            <br />
            <TweetCards profile={profile} cards={cards} onLikeTweet={handleLikeTweet} />
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
