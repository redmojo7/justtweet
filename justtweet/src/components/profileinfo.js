import React, { Component } from "react";

class ProfileInfo extends Component {

  state = {
    profile: {
      id: 1, name: "Redmojo", account: "redmojo", avatar: "avatar.jpeg",
      location: "Devonport, TAS", joined: "January 2019"
    }
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    
  }


  render() {
    return (
      <div className="text-left">
        <h3>{this.state.profile.name}</h3>
        <p className="text-secondary">@{this.state.profile.account}</p>
        <a href="#">twitter.com/{this.state.profile.account}</a>
        <p className="text-primary">{this.state.profile.location}</p>
        <p className="text-secondary">Joined {this.state.profile.joined}</p>
        <button className="btn twitter-button" >Tweet to {this.state.profile.name}</button>
      </div>
    );
  }
}

export default ProfileInfo;
