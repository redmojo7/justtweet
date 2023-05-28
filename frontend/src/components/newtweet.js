import React, { Component } from "react";
import { Modal, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import {createTweet} from "../controllers/tweetcontroller";

class NewTweet extends Component {

    options = {
        month: "short",
        day: "numeric"
    };

    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
        this.handleTweet = this.handleTweet.bind(this);
        this.state = {
            showAlert: false
        };
    }

    componentDidMount() {
        console.log("NewTweet Mounted", this.props.cards);
        this.setState({ profile: this.props.profile });
    }

    componentDidUpdate(prevProps) {
        console.log("NewTweet Updated");
        if (this.props.profile !== prevProps.profile) {
            this.setState({ profile: this.props.profile });
        }
    }

    async handleTweet() {
        const text = this.textAreaRef.current.value;
        console.log("Tweet Clicked:", text);
        this.textAreaRef.current.value = "";

        if (text.trim() === "") {
            // Show an error message to the user
            //alert("Please enter some content before tweeting.");
            this.setState({ showAlert: true });
            return;
        }
        // Clear the error message if it was previously shown
        this.setState({ showAlert: false });

        const tweet = {
            content: text,
            comments: 0,
            retweets: 0,
            likes: 0,
            views: 0,
            date: new Date().toLocaleString("en-US", this.options),
            user: this.state.profile
        };
        //this.props.onAddTweet(tweet);
        const newTweet = await createTweet(tweet);
        console.log("New Tweet:", newTweet);
        this.props.onTweetChanged();
    }

    render(props) {
        const { showAlert } = this.state;
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <Image src={`images/${this.props.profile.avatar}`} className="avarta-image" alt="Example Image" />
                    </Col>
                    <Col md={10}>
                        <Form.Group>
                            <Form.Control
                                ref={this.textAreaRef}
                                as="textarea"
                                rows={3}
                                placeholder="What's happening?"
                            />
                        </Form.Group>
                        <Button onClick={this.handleTweet} className="btn btn-sm twitter-button mt-2">
                            Tweet
                        </Button>
                    </Col>
                </Row>
                <Modal show={showAlert} onHide={() => this.setState({ showAlert: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error: Empty Tweet.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please enter some content before tweeting.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.setState({ showAlert: false })}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}
export default NewTweet;
