import React from "react";


function TweetCard({ tweets, useerr }) {
    return (
        <div className="container">
            <h3 className="names">@{useerr.user.username}</h3> 
            <h1 className="tweet-message"> {tweets.message}</h1>
        </div>
    )
}

export default TweetCard;