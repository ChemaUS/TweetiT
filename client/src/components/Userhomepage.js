import React from "react";
import Navbar from "./Navbar";
import SubmitTweet from "./SubmitTweet";
import TweetContainer from "./TweetContainer";
import Search from "./Search";



function UserHomePage() {

    // handle POST request 
    // function handleAddTweet() {
    //     fetch
    // }


    return (
        <div>

            {/* search */}

            <Navbar />
            <SubmitTweet />
            <TweetContainer />
            <Search />

        </div>
    )
}

export default UserHomePage;

