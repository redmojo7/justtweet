import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Twitter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#moments">Moments</Nav.Link>
                        <Nav.Link href="#messages">Messages</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        
                <Form className="form-inline ">
                    <input type="text" placeholder="Search" className="form-control" />
                    <button style={{marginLeft: '20px'}} className="btn btn-sm twitter-button">Tweet</button>
                </Form>

            </Navbar>
        );
    }
}

export default NavigationBar;
