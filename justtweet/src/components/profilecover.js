import React, { Component } from "react";
import backgroundImage from "../images/background.jpeg"

class ProfileCover extends Component {

    render() {
        return (
            <div>
                <img src={backgroundImage} className="background-cover" alt="background Image" />
            </div>);
    }
}
export default ProfileCover;
