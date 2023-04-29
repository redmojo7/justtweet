import React, { Component } from "react";
import avartaImage from '../images/avarta.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

class TweetCard extends Component {
    render(props) {
        //const { comments, retweets, likes, views } = props
        const comments = 4;
        const retweets = 10;
        const likes = 111;
        const views = 1111;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src={avartaImage} className="avarta-image" alt="avarta Image" />
                    </div>
                    <div className="col-md-10">
                        <strong>Redmojo</strong> @redmojo7 -Jul 18
                        <p>My first tweet!</p>
                        <div className="row">
                            <table className="table table-borderless">
                                <tbody className="text-center">
                                    <tr>
                                        <td> <FontAwesomeIcon icon={faComment} /> {comments}</td>
                                        <td><FontAwesomeIcon icon={faRetweet} /> {retweets}</td>
                                        <td> <FontAwesomeIcon icon={faHeart} /> {likes}</td>
                                        <td><FontAwesomeIcon icon={faEye} /> {views}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>);
    }
}
export default TweetCard;
