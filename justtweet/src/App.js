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
import {fetchTweets, createTweet} from './components/tweet/tweet';
import axios from 'axios';

function App() {

  const [cards, setCards] = useState([]);

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
    statistics.tweets++;
    const newTweet = await createTweet(tweet);
    const updatedCards = await fetchTweets();
    setCards(updatedCards);
  }

  useEffect(() => {
    const fetchData = async () => {
      const updatedCards = await fetchTweets();
      setCards(updatedCards);
    };
    fetchData();
  }, []);



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
            < ProfileInfo />
          </div>
          <div className="col-md-6">
            <NewTweet onAddTweet={handleAddTweet} />
            <br />
            <TweetCards cards={cards} />
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
