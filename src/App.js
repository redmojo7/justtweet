import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavigationBar from "./components/navbar";
import ProfileCover from "./components/profilecover";
import ProfileInfo from "./components/profileinfo";
import ProfileStats from "./components/profilestats";
import NewTweet from "./components/newtweet";
import {TweetCards} from "./components/tweetcard";
import RightPanel from "./components/rightpanel";
import avartaImage from './images/avarta.jpg';
import Counters from './Counters';

function App() {
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
      <ProfileStats />
      <div className="container" >
        <div className="row">
          <div className="col-md-3">
            < ProfileInfo />
          </div>
          <div className="col-md-6">
            <NewTweet />
            <br />
            <TweetCards />
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
