import React, { Component } from "react";
import avartaImage from '../images/avatar.jpeg';

class NewTweet extends Component {

    options = {
        month: "short",
        day: "numeric"
    };

    state = {}
    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
        this.handleTweet = this.handleTweet.bind(this);
    }

    componentDidMount() {
        console.log("NewTweet Mounted", this.props.cards);
        this.setState({ profile: this.props.profile });
    }

    componentDidUpdate(prevProps) {
        console.log("NewTweet Updated");
        if (this.props.profile !== prevProps.profile) {
            this.setState({ profile: this.props.profile });
        }
    }

    handleTweet() {
        const text = this.textAreaRef.current.value;
        console.log("Tweet Clicked:", text);
        this.textAreaRef.current.value = "";
        const tweet = {content: text, comments: 0, retweets: 0, likes: 0, views: 0, date: new Date().toLocaleString("en-US", this.options), user: this.state.profile }
        this.props.onAddTweet(tweet);  
    }

    render(props) {
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
