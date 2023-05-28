import React, { Component } from "react";
import { Button, Container, Row, Image, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faComment, faRetweet, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { getTweets, deleteTweet, updateTweet } from "../controllers/tweetcontroller";

class TweetCards extends Component {

    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleEllipsis = this.handleEllipsis.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            cards: [], // Initialize as an empty array
            profile: this.props.profile
        };
    }

    componentDidMount(prevProps) {
        console.log("TweetCards Mounted");
        
    }

    componentDidUpdate(prevProps) {
        console.log("TweetCards Updated");
        if (this.props.cards !== prevProps.cards) {
            this.setState({ cards: this.props.cards });
        }
        if (this.props.profile !== prevProps.profile) {
            this.setState({ profile: this.props.profile });
        }
    }

    async handleLike(id) {
        console.log("Like Clicked", id);
        let updatedTweet = {};
        const cards = this.state.cards.map(item => {
            if (item._id === id) {
                item.likes = item.likes + 1;
                updatedTweet = item;
            }
            return item;
        })

        this.setState({
            cards: cards
        });
        // Call the API to update the tweet
        await updateTweet(updatedTweet);
        this.props.onTweetChanged(cards);
    }

    async handleRetweet(id) {
        console.log("Retweet Clicked", id);
        let updatedTweet = {};
        const cards = this.state.cards.map(item => {
            if (item._id === id) {
                item.retweets = item.retweets + 1;
                updatedTweet = item;
            }
            return item;
        })
        this.setState({
            cards: cards
        });
        // Call the API to update the tweet
        await updateTweet(updatedTweet);
        this.props.onTweetChanged(cards);
    }

    handleComment(id) {
        console.log("Comment Clicked", id);
    }

    handleEllipsis(id) {
        console.log("Ellipsis Clicked", id);
        //const showDeleteButton = !this.state.showDeleteButton;
        const cards = this.state.cards.map(item => {
            if (item._id === id) {
                if (item.showDeleteButton === undefined) {
                    item.showDeleteButton = true;
                } else {
                    item.showDeleteButton = !item.showDeleteButton;
                }
            } else {
                item.showDeleteButton = false;
            }
            return item;
        });
        this.setState({ cards: cards });
    }

    async handleDelete(id) {
        console.log("Delete Clicked", id);
        /*
        const cards = this.state.cards.filter(
            function (item) {
                return item._id !== id;
            });

        this.setState({
            cards: cards
        });
        */
        //this.props.onDeleteTweet(id);
        await deleteTweet(id);
        const updatedCards = await getTweets();
        this.setState({ cards: updatedCards });
        this.props.onTweetChanged(updatedCards);
    }

    render(props) {
        return (
            <div>
                {this.state.cards.length > 0 ? (
                    this.state.cards.map(card => (
                        <TweetCard
                            key={card._id} card={card} profile={this.state.profile}
                            onLike={this.handleLike} onRetweet={this.handleRetweet}
                            onComment={this.handleComment} onEllipsis={this.handleEllipsis}
                            onDelete={this.handleDelete}
                        />
                    ))
                ) : (
                    null
                )}
            </div>
        );
    }
}



class TweetCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteButton: false,
        };
        //this.handleEllipsis = this.handleEllipsis.bind(this);
    }

    render(props) {
        const { content, comments, retweets, likes, views, date, showDeleteButton } = this.props.card;
        const user = this.props.profile;
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <Image src={`images/${user.avatar}`} className="avarta-image" alt="avarta Image" />
                    </Col>
                    <Col md={10}>
                        <strong>{user.name}</strong> @{user.account} - {date}
                        <div className="float-end ml-2 p-2 py-1" onClick={() => this.props.onEllipsis(this.props.card._id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                        {showDeleteButton &&
                            <span ><Button onClick={() => this.props.onDelete(this.props.card._id)} variant="link" className="float-end custom-delete-button">Delete</Button></span>
                        }
                        <p >{content}</p>
                        <Row>
                            <Table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr>
                                        <td > <FontAwesomeIcon icon={faComment} onClick={() => this.props.onComment(this.props.card._id)} /> {comments}</td>
                                        <td > <FontAwesomeIcon icon={faRetweet} onClick={() => this.props.onRetweet(this.props.card._id)} /> {retweets}</td>
                                        <td > <FontAwesomeIcon icon={faHeart} onClick={() => this.props.onLike(this.props.card._id)} /> {likes}</td>
                                        <td > <FontAwesomeIcon icon={faEye} /> {views}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                    <hr />
                </Row>
            </Container>);
    }
}
export { TweetCard, TweetCards };
