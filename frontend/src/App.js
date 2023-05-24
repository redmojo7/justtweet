import './App.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from "./components/navbar";
import ProfileCover from "./components/profilecover";
import ProfileInfo from "./components/profileinfo";
import ProfileStats from "./components/profilestats";
import NewTweet from "./components/newtweet";
import { TweetCards } from "./components/tweetcard";
import RightPanel from "./components/rightpanel";
import Footer from "./components/footer";
import { loadTweets as getTweets, createTweet, deleteTweet } from './controllers/tweetcontroller';
import getProfile from './controllers/userscontroller';


function App() {

  const [cards, setCards] = useState([]);

  const [profile, setProfile] = useState({});

  const [statistics, setStatistics] = useState({});

  // fetch the profile from the API
  const fetchProfile = async () => {
    const profile = await getProfile();
    console.log("Profile:", profile);
    setProfile(profile);
  }
  // fetch the tweets from the API
  const fetchTweets = async () => {
    const updatedCards = await getTweets();
    setCards(updatedCards);
  };

  // Define a function to handle adding a new tweet
  const handleAddTweet = async (tweet) => {
    console.log("handleAddTweet Tweet Clicked:", tweet);
    const newTweet = await createTweet(tweet);
    console.log("New Tweet:", newTweet);
    const updatedCards = await getTweets();
    setCards(updatedCards);
  }

  // Define a function to handle liking a tweet
  const handleLikeTweet = async (id) => {
    console.log("Like Clicked", id);
    setStatistics(prevState => ({
      ...prevState,
      likes: prevState.likes + 1
    }));
  }

  // Define a function to handle deleting a tweet
  const handleDeleteTweet = async (tweetId) => {
    console.log("Delete Clicked", tweetId);
    await deleteTweet(tweetId);
    fetchTweets();
  }

  // Use the useEffect hook to fetch profile and tweets when the component mounts
  useEffect(() => {
    fetchProfile();
    fetchTweets();
  }, []);

  // Use the useEffect hook to update the statistics when the cards change
  useEffect(() => {
    // update the statistics state
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
  }, [cards]);


  return (
    <div className="App">
      <NavigationBar />
      <ProfileCover />
      <ProfileStats statistics={statistics} />
      <Container>
        <Row>
          <Col md={3}>
            <ProfileInfo profile={profile} />
          </Col>
          <Col md={6}>
            <NewTweet profile={profile} onAddTweet={handleAddTweet} />
            <hr />
            <TweetCards
              profile={profile}
              cards={cards}
              onDeleteTweet={handleDeleteTweet}
              onLikeTweet={handleLikeTweet}
            />
          </Col>
          <Col md={3}>
            <RightPanel />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default App;