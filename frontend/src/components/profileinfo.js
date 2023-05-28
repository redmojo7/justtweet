import React, { Component } from "react";
import { chunk } from 'lodash';
import { Button, Image, Table } from "react-bootstrap";


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
    console.log("ProfileInfo Constructor");
    //this.setState({ profile: this.props.profile });
  }

  componentDidMount(props) {
    console.log("ProfileInfo Mounted");
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
        <h3 className="mt-2">{profile.name}</h3>
        <p className="text-secondary">@{profile.account}</p>
        <p><a className="no-underline" href="/">twitter.com/{profile.account}</a></p>
        <p className="tweet-color">{profile.location}</p>
        <p className="text-secondary">Joined {profile.joined}</p>
        <Button className="btn twitter-button">Tweet to {profile.name}</Button>
        <p className="mt-3 tweet-color">1,142 Photos and Videos</p>
        <Table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((image, columnIndex) => (
                  <td key={columnIndex}>
                    <Image src={image.url} className="gallery-image-vedio" alt={`Image ${rowIndex * 3 + columnIndex + 1}`} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ) : null;
  }
}

export default ProfileInfo;
