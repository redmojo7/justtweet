import React, { Component } from "react";
import avartaImage from '../images/avarta.jpg';

class RightPanel extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <h6>Who to follow</h6>
                    </div>
                    <div className="col-md-6 text-right">
                        <a href="#">Refresh</a>
                        <span>•</span>
                        <a href="#">View all</a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-2 text-left">
                        <img src={avartaImage} className="avarta-image" alt="avarta Image" />
                    </div>
                    <div className="col-md-2 text-left">
                    </div>
                    <div className="col-md-8 text-right">
                        <p><strong>Redmojo </strong>@redmojo7</p>
                        <div className="mt-2">
                            <button className="btn btn-sm follow-button" >Follow</button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default RightPanel;
