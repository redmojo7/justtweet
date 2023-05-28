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
import { getTweets } from './controllers/tweetcontroller';
import getProfile from './controllers/userscontroller';


function App() {

  const [cards, setCards] = useState([]);

  const [profile, setProfile] = useState({});

  // Use the useEffect hook to fetch profile and tweets when the component mounts
  useEffect(() => {
    const fetchProfileAndTweet = async () => {
      const profile = await getProfile();
      console.log("Profile:", profile);
      setProfile(profile);
      const updatedCards = await getTweets();
      setCards(updatedCards);
    };
    // Invoke the async function
    fetchProfileAndTweet();
  }, []);
  

  const handleTweetsChanged = async (props) => {
    const updatedCards = await getTweets();
    setCards(updatedCards);
  }

  return (
    <div className="App" >
      <NavigationBar />
      <ProfileCover />
      <ProfileStats cards={cards} />
      <Container className='bg-light' >
        <Row >
          <Col md={{ span: 3 }}>
            <ProfileInfo profile={profile} />
          </Col>
          <Col md={6} className='bg-white'>
            <NewTweet profile={profile} onTweetChanged={handleTweetsChanged} />
            <hr />
            <TweetCards
              profile={profile}
              cards={cards}
              onTweetChanged={handleTweetsChanged}
            />
          </Col>
          <Col md={3} >
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