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
import Counters from './Counters';
function App() {

  const [cards, setCards] = useState([
    { id: 1, content: "My first tweet!", comments: 1, retweets: 2, likes: 3, views: 10, date: "Jul 18", user: { id: 1, name: "Redmojo", account: "redmojo", avatar: "avatar4.jpeg" } },
    { id: 2, content: "My seonds tweet!", comments: 2, retweets: 22, likes: 33, views: 100, date: "Jul 19", user: { id: 2, name: "John Doe", account: "johndoe", avatar: "avatar3.jpeg" } },
    { id: 3, content: "My third tweet!", comments: 3, retweets: 222, likes: 333, views: 1000, date: "Jul 20", user: { id: 3, name: "Jane Smith", account: "janesmith", avatar: "avatar2.jpeg" } },
    { id: 4, content: "Hello world!", comments: 4, retweets: 2222, likes: 3333, views: 10000, date: "Jul 21", user: { id: 4, name: "Bob Johnson", account: "bobjohnson", avatar: "avatar.jpeg" } }
  ].reverse());

  const [statistics, setStatistics] = useState({
    tweets: 10,
    following: 10,
    followers: 10,
    likes: 10
  });

  const handleAddTweet = (tweet) => {
    console.log("handleAddTweet Tweet Clicked:", tweet);
    tweet.id = cards.length + 1;
    setCards(cards => [tweet, ...cards]);
    statistics.tweets++;
  }

  useEffect(() => {
    console.log('cards have changed', cards);

  }, [cards]);

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
      <ProfileStats statistics={statistics}/>
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
