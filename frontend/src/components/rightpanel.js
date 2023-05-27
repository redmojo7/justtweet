import React, { Component } from "react";
import { Image, Row, Col, Button, Container } from 'react-bootstrap';

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
            recommendUsers: users
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
            <Row>
                <Col md={4} className="text-left">
                    <Image src={`images/${this.props.user.avatar}`} className="avarta-image" alt="avarta Image" />
                </Col>
                <Col md={8} className="text-left">
                    <Row>
                        <Col>
                            <strong>{this.props.user.name}  </strong>{this.props.user.account}
                        </Col>
                    </Row>
                    <Button className="btn btn-sm follow-button mt-2" onClick={() => this.props.onFollow(this.props.user.id)}>
                        Follow
                    </Button>
                </Col>
                <hr />
            </Row>
        );
    }
}


class RightPanel extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Who to follow</h5>
                    </Col>
                    <Col md={6} className="text-right">
                        <a href="/" className="mr-2">Refresh</a>
                        <span className="mr-2">•</span>
                        <a href="/">View all</a>
                    </Col>
                </Row>
                <br />
                <RecommendFriends />
            </Container>
        );
    }
}

export default RightPanel;
