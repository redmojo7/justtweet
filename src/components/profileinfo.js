import React, { Component } from "react";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="text-left">
        <h3>Redmojo</h3>
        <p className="text-secondary">@redmojo7</p>
        <a href="#">twitter.com/peng</a>
        <p className="text-primary">Perth, WA</p>
        <p className="text-secondary">Joined January 2019</p>
        <button className="btn twitter-button" >Tweet to Redmojo</button>
      </div>
    );
  }
}

export default ProfileInfo;
