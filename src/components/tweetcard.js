import React, { Component } from "react";
//import avartaImage from '../images/avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faComment, faRetweet, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

class TweetCards extends Component {
    state = {
        cards: [
            { id: 1, content: "My first tweet!", comments: 1, retweets: 2, likes: 3, views: 10, date: "Jul 18", user: { id: 1, name: "Redmojo", account: "@redmojo" , avatar: "avatar4.jpeg"} },
            { id: 2, content: "My seonds tweet!", comments: 2, retweets: 22, likes: 33, views: 100, date: "Jul 19", user: { id: 2, name: "John Doe", account: "@johndoe", avatar: "avatar3.jpeg"} },
            { id: 3, content: "My third tweet!", comments: 3, retweets: 222, likes: 333, views: 1000, date: "Jul 20", user: { id: 3, name: "Jane Smith", account: "@janesmith", avatar: "avatar2.jpeg"} },
            { id: 4, content: "Hello world!", comments: 4, retweets: 2222, likes: 3333, views: 10000, date: "Jul 21", user: { id: 4, name: "Bob Johnson", account: "@bobjohnson", avatar: "avatar.jpeg"} }
        ]
    }

    constructor() {
        super();
        this.handleLike = this.handleLike.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleEllipsis = this.handleEllipsis.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleLike(id) {
        console.log("Like Clicked", id);

        const cards = this.state.cards.map(item => {
            if (item.id === id) {
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
            if (item.id === id) {
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
        this.setState({
            showDeleteButton: true
        });
    }

    handleDelete(id) {
        console.log("Delete Clicked", id);
        const cards = this.state.cards.filter(
            function (item) {
                return item.id !== id;
            });

        this.setState({
            cards: cards
        });
    }

    render(props) {
        return (
            <div>
                {this.state.cards.map(card => <TweetCard
                    key={card.id} card={card}
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
        this.handleEllipsis = this.handleEllipsis.bind(this);
    }
    handleEllipsis(id) {
        console.log('Ellipsis Clicked', id);
        // your code to delete the tweet goes here
        this.setState({
            showDeleteButton: !this.setState.showDeleteButton,
        });
    }
    render(props) {
        const { content, comments, retweets, likes, views, date, user } = this.props.card;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={require(`../images/${user.avatar}`)} className="avarta-image" alt="avarta Image" />
                    </div>
                    <div className="col-md-10">
                        <strong>{user.name}</strong> {user.account} - {date}<FontAwesomeIcon className="float-end" onClick={() => this.handleEllipsis(this.props.card.id)} icon={faEllipsisVertical} />
                        {this.state.showDeleteButton &&
                            <button className="btn btn-danger float-end" onClick={() => this.props.onDelete(this.props.card.id)}>Delete</button>
                        }
                        <p>{content}</p>
                        <div className="row">
                            <table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr>
                                        <td onClick={() => this.props.onComment(this.props.card.id)}> <FontAwesomeIcon icon={faComment} /> {comments}</td>
                                        <td onClick={() => this.props.onRetweet(this.props.card.id)}><FontAwesomeIcon icon={faRetweet} /> {retweets}</td>
                                        <td onClick={() => this.props.onLike(this.props.card.id)}> <FontAwesomeIcon icon={faHeart} /> {likes}</td>
                                        <td><FontAwesomeIcon icon={faEye} /> {views}</td>
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
