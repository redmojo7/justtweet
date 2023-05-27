const { Component } = require("react")
const { Container, Row, Col, ListGroup } = require("react-bootstrap")


class Footer extends Component {

  constructor(props) {
    super(props);
    console.log("Footer Mounted");
  }

  render() {
    return (
      <div className="footer py-3 bg-dark">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="text-white">Contact Us</h3>
              <p className="text-white">Kent St</p>
              <p className="text-white">Bentley, WA 6102</p>
              <p className="text-white">Email: 21053409@student.curtin.edu.au</p>
            </Col>
            <Col md={{offset:3}}>
              <h3 className="text-white">Follow Us</h3>
              <ListGroup>
                <ListGroup.Item className="border-0 bg-dark">
                  <a href="https://www.curtin.edu.au/">
                    <i className="fa fa-linkedin"></i>Curtin University
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-dark">
                  <a href="https://www.linkedin.com/in/peng-cai/">
                    <i className="fa fa-linkedin"></i>Linkedin
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <p className="text-muted text-center">&copy; 2023 Curtin University</p>
        </Container>
      </div>
    )
  }
}

export default Footer;