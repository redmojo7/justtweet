import React, { Component } from "react";
import getProfile from "./services/userservice";

class ProfileInfo extends Component {

  state = {
    profile: {}
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    console.log("ProfileInfo Mounted");
    getProfile()
      .then(profile => {
        //console.log("ProfileInfo Mounted", profile);
        this.setState({ profile: profile });
      })
  }


  render() {
    const { profile } = this.state;

    return profile ? (
      <div className="text-left">
        <h3>{profile.name}</h3>
        <p className="text-secondary">@{profile.account}</p>
        <a href="#">twitter.com/{profile.account}</a>
        <p className="text-primary">{profile.location}</p>
        <p className="text-secondary">Joined {profile.joined}</p>
        <button className="btn twitter-button">Tweet to {profile.name}</button>
      </div>
    ) : null;
  }
}

export default ProfileInfo;
