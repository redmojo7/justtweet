import React, { Component } from "react";
import avartaImage from '../images/avatar.jpeg';

class NewTweet extends Component {
    state = {}
    constructor() {
        super();
        this.textAreaRef = React.createRef();
        this.handleTweet = this.handleTweet.bind(this);
    }

    handleTweet() {
        const text = this.textAreaRef.current.value;
        console.log("Tweet Clicked:", text);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    <img src={avartaImage} className="avarta-image" alt="Example Image" />
                    </div>
                    <div className="col-md-10">
                        <textarea ref={this.textAreaRef} className="form-control" rows="3" placeholder="What's happening?"></textarea>
                        <div className="mt-2">
                            <button onClick={this.handleTweet} className="btn btn-sm twitter-button" >Tweet</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default NewTweet;
