import { UserCircleIcon } from "@heroicons/react/20/solid";
import React from "react";


function TweetCard({ tweets, useerr }) {

    // const { username } = user
    const { message } = tweets


    return (
        // <div className="container">
        //     <h1 className="tweet-message"> {tweets.message}</h1>
        // </div>

        // <div>
        //     <div>
        //         <img />
        //         <div>user
        //             <span>@user</span>
        //             <span>jun 27</span>
        //             <p> tweets.message</p>
        //         </div>
        //     </div>
        //     <div>
        //         <img>
        //         </img>
        //     </div>
        //     <div>
        //         <div>
        //             <svg />
        //         </div>
        //     </div>
        // </div>



        <div className="tweetcard">
            <div className="message">
                <h1>@{useerr.user.username} </h1>
                <p>{message}</p>

            </div>
        </div>

    )
}

export default TweetCard;