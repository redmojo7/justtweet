import React, { Component } from "react";

class ProfileStats extends Component {

    state = {
        statistics: {}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
        this.setState({ statistics: this.props.statistics });
    }

    componentDidUpdate(prevProps) {
        if (this.props.statistics !== prevProps.statistics) {
            this.setState({ statistics: this.props.statistics });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr>
                                        <td><strong>Tweets</strong></td>
                                        <td><strong>Following</strong></td>
                                        <td><strong>Followers</strong></td>
                                        <td><strong>Likes</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.statistics.tweets}</td>
                                        <td>{this.state.statistics.following}</td>
                                        <td>{this.state.statistics.followers}</td>
                                        <td>{this.state.statistics.likes}</td>
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
