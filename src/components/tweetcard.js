import React, { Component } from "react";
import avartaImage from '../images/avarta.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

class TweetCards extends Component {
    state = {
        user:  { id: 1, name: "Redmojo", account: "@redmojo" },
        cards: [
            { id: 1, content: "My first tweet!", comments: 1, retweets: 2, likes: 3,  views: 10, date: "Jul 18"},
            { id: 2, content: "My seonds tweet!", comments: 2, retweets: 22, likes: 33,  views: 100, date: "Jul 19"},
            { id: 3, content: "My third tweet!", comments: 3, retweets: 222, likes: 333,  views: 1000, date: "Jul 20"},
            { id: 4, content: "Hello world!", comments: 4, retweets: 2222, likes: 3333,  views: 10000, date: "Jul 21"}
        ]
    }

    constructor() {
        super();
        this.handleLike = this.handleLike.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handleLike(id) {
        console.log("Like Clicked", id);

        const cards =  this.state.cards.map(item => {
            if (item.id === id) {
              item.likes = item.likes+1;
            }
            return item;
          })

        this.setState({
            cards: cards
        });
    }

    handleRetweet(id) {
        console.log("Retweet Clicked", id);
        const cards =  this.state.cards.map(item => {
            if (item.id === id) {
              item.retweets = item.retweets+1;
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

    render(props) {
        return (
            <div>
                {this.state.cards.map(card => <TweetCard 
                    key={card.id} card={card} user={this.state.user}
                    onLike={this.handleLike} onRetweet={this.handleRetweet}
                    onComment={this.handleComment}
                    />)}
            </div>
        );
    }
}



class TweetCard extends Component {
    render(props) {
        const { content, comments, retweets, likes, views, date} = this.props.card;
        const { name, account } = this.props.user;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={avartaImage} className="avarta-image" alt="avarta Image" />
                    </div>
                    <div className="col-md-10">
                        <strong>{name}</strong> {account} - {date}
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
