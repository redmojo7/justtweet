import React, { Component } from "react";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="text-left">
        <h3>Peng Cai</h3>
        <p className="text-secondary">@pengcai</p>
        <a href="#">twitter.com/peng</a>
        <p className="text-primary">Perth, WA</p>
        <p className="text-secondary">Joined January 2019</p>
        <button className="btn twitter-button" >Tweet to Peng Cai</button>
      </div>
    );
  }
}

export default ProfileInfo;
