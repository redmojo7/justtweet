import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        console.log("NavigationBar Mounted");
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Twitter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#moments">Moments</Nav.Link>
                        <Nav.Link href="#notifications">Notifications</Nav.Link>
                        <Nav.Link href="#messages">Messages</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="form-inline">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button className="btn btn-sm twitter-button">Tweet</Button>
                </Form>
            </Navbar>
        );
    }
}

export default NavigationBar;
