import React, { Component } from "react";
import { Image } from 'react-bootstrap';

class ProfileCover extends Component {

    constructor(props) {
        super(props);
        console.log("ProfileCover Mounted");
    }

    render() {
        return (
            <Image src="images/background.jpeg" className="background-cover" alt="background Image" />
        );
    }
}
export default ProfileCover;
