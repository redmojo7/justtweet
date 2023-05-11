import React, { Component } from "react";
import { Button } from 'react-bootstrap';
//import avartaImage from '../images/avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faComment, faRetweet, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

class TweetCards extends Component {

    state = {
        cards: []
    }

    constructor(props) {
        super(props);
        //this.state.cards = props.cards;
        this.handleLike = this.handleLike.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleEllipsis = this.handleEllipsis.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setState({ cards: this.props.cards });
    }

    componentDidUpdate(prevProps) {
        if (this.props.cards !== prevProps.cards) {
            this.setState({ cards: this.props.cards });
        }
    }

    handleLike(id) {
        console.log("Like Clicked", id);

        const cards = this.state.cards.map(item => {
            if (item._id === id) {
                item.likes = item.likes + 1;
            }
            return item;
        })

        this.setState({
            cards: cards
        });
    }

    handleRetweet(id) {
        console.log("Retweet Clicked", id);
        const cards = this.state.cards.map(item => {
            if (item._id === id) {
                item.retweets = item.retweets + 1;
            }
            return item;
        })

        this.setState({
            cards: cards
        });
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
        this.setState({ cards: cards});
    }

    handleDelete(id) {
        console.log("Delete Clicked", id);
        const cards = this.state.cards.filter(
            function (item) {
                return item._id !== id;
            });

        this.setState({
            cards: cards
        });
    }

    render(props) {
        return (
            <div>
                {this.state.cards.map(card => <TweetCard
                    key={card._id} card={card}
                    onLike={this.handleLike} onRetweet={this.handleRetweet}
                    onComment={this.handleComment} onEllipsis={this.handleEllipsis}
                    onDelete={this.handleDelete}
                />)}
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
        const { content, comments, retweets, likes, views, date, user, showDeleteButton} = this.props.card;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={require(`../images/${user.avatar}`)} className="avarta-image" alt="avarta Image" />
                    </div>
                    <div className="col-md-10">
                        <strong>{user.name}</strong> @{user.account} - {date}
                        <div className="float-end ml-2 p-2 py-1" onClick={() => this.props.onEllipsis(this.props.card._id)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                        {showDeleteButton &&
                            
                            <span><Button onClick={() => this.props.onDelete(this.props.card._id)} variant="link" className="float-end">Delete</Button></span>
                        }
                        <p>{content}</p>
                        <div className="row">
                            <table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr>
                                        <td > <FontAwesomeIcon icon={faComment} onClick={() => this.props.onComment(this.props.card._id)}/> {comments}</td>
                                        <td > <FontAwesomeIcon icon={faRetweet} onClick={() => this.props.onRetweet(this.props.card._id)} /> {retweets}</td>
                                        <td > <FontAwesomeIcon icon={faHeart} onClick={() => this.props.onLike(this.props.card._id)} /> {likes}</td>
                                        <td > <FontAwesomeIcon icon={faEye} /> {views}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>);
    }
}
export { TweetCard, TweetCards };
