import React from "react";
import Navbar from "./Navbar";
import SubmitTweet from "./SubmitTweet";
import TweetContainer from "./TweetContainer";
import Search from "./Search";



function userHomePage() {


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

export default userHomePage;

