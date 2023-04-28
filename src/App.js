import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import ProfileCover from "./components/profilecover";
import ProfileInfo from "./components/profileinfo";
import ProfileStats from "./components/profilestats";
import NewTweet from "./components/newtweet";
import TweetCard from "./components/tweetcard";
import RightPanel from "./components/rightpanel";

function App() {
  return (
    <div className="App">
      <Counter />
      <Navbar />
      <ProfileCover />
      <ProfileStats />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            < ProfileInfo />
          </div>
          <div className="col-md-6">
            <NewTweet />
            <TweetCard />
          </div>
          <div className="col-md-3">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
