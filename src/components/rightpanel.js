import React, { Component } from "react";
import avartaImage from '../images/avarta.jpg';

class RecommendFriends extends Component {
    state = {
        cards: [
            { id: 1, name: "Redmojo", account: "@redmojo" },
            { id: 2, name: "Bluelua", account: "@bluelua" },
            { id: 3, name: "David", account: "@david" },
            { id: 4, name: "Jasmine", account: "@jasmine" }
        ]
    }

    constructor() {
        super();
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(id) {
        console.log("Follow Clicked", id);
        const cards = this.state.cards.filter(
            function (item) {
                console.log("Follow Clicked...", item.id);
                return item.id !== id;
            });

        this.setState({
            cards: cards
        });
    }



    render(props) {
        return (
            <div>
                {this.state.cards.map(card =>
                    <RecommendFriend key={card.id} card={card} onFollow={this.handleFollow}
                    />)}
            </div>
        );
    }
}

class RecommendFriend extends Component {

    render(props) {
        return (
            <div className="row">
                <div className="col-md-2 text-left">
                    <img src={avartaImage} className="avarta-image" alt="avarta Image" />
                </div>
                <div className="col-md-2 text-left">
                </div>
                <div className="col-md-8 text-right">
                    <p><strong>{this.props.card.name}  </strong>{this.props.card.account}</p>
                    <div className="mt-2">
                        <button className="btn btn-sm follow-button"
                            onClick={() => this.props.onFollow(this.props.card.id)}
                        >Follow</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}


class RightPanel extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <h6>Who to follow</h6>
                    </div>
                    <div className="col-md-6 text-right">
                        <a href="#">Refresh</a>
                        <span>•</span>
                        <a href="#">View all</a>
                    </div>
                </div>
                <br />
                <RecommendFriends />

            </div>
        );
    }
}

export default RightPanel;
