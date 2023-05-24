import React, { Component } from "react";

class RecommendFriends extends Component {
    state = {
        recommendUsers: [
            { id: 1, name: "Redmojo", account: "@redmojo", avatar: "avatar4.jpeg" },
            { id: 2, name: "Bluelua", account: "@bluelua", avatar: "avatar3.jpeg" },
            { id: 3, name: "David", account: "@david", avatar: "avatar2.jpeg" },
            { id: 4, name: "Jasmine", account: "@jasmine", avatar: "avatar.jpeg" }
        ]
    }

    constructor() {
        super();
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(id) {
        console.log("Follow Clicked", id);
        const users = this.state.recommendUsers.filter(
            function (item) {
                return item.id !== id;
            });

        this.setState({
            users: users
        });
    }



    render(props) {
        return (
            <div>
                {this.state.recommendUsers.map(user =>
                    <RecommendFriend key={user.id} user={user} onFollow={this.handleFollow}
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
                    <img src={`images/${this.props.user.avatar}`} className="avarta-image" alt="avarta Image" />
                </div>
                <div className="col-md-2 text-left">
                </div>
                <div className="col-md-8 text-right">
                    <strong>{this.props.user.name}  </strong>{this.props.user.account}
                    <div className="mt-2">
                        <button className="btn btn-sm follow-button"
                            onClick={() => this.props.onFollow(this.props.user.id)}
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
                    <h5 className="col-md-6">Who to follow</h5>
                    <div className="col-md-6 text-right">
                        <a href="#" className="mr-2">Refresh</a>
                        <span className="mr-2">•</span>
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
