import React, { Component } from "react";
import { chunk } from 'lodash';
import { Button } from "react-bootstrap";


class ProfileInfo extends Component {

  state = {
    profile: {},
    gallery: [
      { url: "images/background.jpeg" },
      { url: "images/background.jpeg" },
      { url: "images/background.jpeg" },
      { url: "images/background.jpeg" },
      { url: "images/background.jpeg" },
      { url: "images/background.jpeg" },
    ],
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    console.log("ProfileInfo Mounted");
    this.setState({ profile: this.props.profile });
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile !== prevProps.profile) {
      this.setState({ profile: this.props.profile });
    }
  }

  render() {
    const { profile } = this.state;
    const rows = chunk(this.state.gallery, 3);

    return profile ? (
      <div className="text-left">
        <br />
        <h3 >{profile.name}</h3>
        <p className="text-secondary">@{profile.account}</p>
        <p><a className="no-underline" href="#">twitter.com/{profile.account}</a></p>
        <p className="tweet-color">{profile.location}</p>
        <p className="text-secondary">Joined {profile.joined}</p>
        <button className="btn twitter-button">Tweet to {profile.name}</button>
        <br />
        <br />
        <p className="tweet-color">1,142 Photos and Videos</p>
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((image, columnIndex) => (
                  <td key={columnIndex}>
                    <img src={image.url} className="gallery-image-vedio" alt={`Image ${rowIndex * 3 + columnIndex + 1}`} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : null;
  }
}

export default ProfileInfo;
