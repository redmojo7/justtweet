import React, { Component } from "react";
import { Container, Row, Col, Table, Image } from 'react-bootstrap';

class ProfileStats extends Component {

    state = {
        statistics: {}
    }

    constructor(props) {
        super(props);
        console.log("ProfileStats Mounted", this.props.statistics);
    }

    componentDidMount(props) {
        this.setState({ statistics: this.props.statistics });
    }

    componentDidUpdate(prevProps) {
        if (this.props.statistics !== prevProps.statistics) {
            this.setState({ statistics: this.props.statistics });
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Image src="images/avatar.jpeg" className="avarta-image-flow" alt="avarta Image" />
                        </Col>
                        <Col md={6}>
                            <Table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr>
                                        <td><strong>Tweets</strong></td>
                                        <td><strong>Following</strong></td>
                                        <td><strong>Followers</strong></td>
                                        <td><strong>Likes</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.statistics.tweets}</td>
                                        <td>{this.state.statistics.following}</td>
                                        <td>{this.state.statistics.followers}</td>
                                        <td>{this.state.statistics.likes}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>);
    }
}

export default ProfileStats;
