import React, { Component } from "react";
import { Container, Row, Col, Table, Image } from 'react-bootstrap';

class ProfileStats extends Component {
  state = {
    statistics: {}
  };

  calculateStatistics() {
    const cards = this.props.cards;
    if (cards.length === 0 || Object.keys(cards).length === 0) {
      this.setState({
        statistics: {
          tweets: 0,
          following: 10,
          followers: 10,
          likes: 0
        }
      });
    } else {
      const totalLikes = cards.reduce((total, card) => total + card.likes, 0);
      this.setState(prevState => ({
        statistics: {
          tweets: cards.length,
          following: 10,
          followers: 10,
          likes: totalLikes
        }
      }));
    }
  }

  componentDidMount() {
    this.calculateStatistics();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cards !== prevProps.cards) {
      this.calculateStatistics();
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
      </div>
    );
  }
}

export default ProfileStats;
