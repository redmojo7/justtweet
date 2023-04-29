import React, { Component } from "react";
import avartaImage from '../images/avarta.jpg';

class NewTweet extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    <img src={avartaImage} className="avarta-image" alt="Example Image" />
                    </div>
                    <div className="col-md-10">
                        <textarea className="form-control" rows="3" placeholder="What's happening?"></textarea>
                        <div className="mt-2">
                            <button className="btn btn-sm twitter-button" >Tweet</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default NewTweet;
