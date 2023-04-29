import React, { Component } from "react";

class ProfileStats extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr >
                                        <td><strong>Tweets</strong></td>
                                        <td><strong>Following</strong></td>
                                        <td><strong>Followers</strong></td>
                                        <td><strong>Likes</strong></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default ProfileStats;
