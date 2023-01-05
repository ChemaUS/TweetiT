import React from "react";


function TweetCard({ tweets }) {
    return (
        <div className="container">
            <h1 className="tweet-message"> {tweets.message}</h1>
        </div>
    )
}

export default TweetCard;