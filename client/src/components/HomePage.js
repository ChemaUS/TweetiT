import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubmitTweet from "./SubmitTweet";
import TweetContainer from "./TweetContainer";
import Search from "./Search";




function HomePage({ user, setUser }) {
    const [tweet, setTweet] = useState([])
    useEffect(() => {
        fetch(`/tweets`)
            .then((r) => r.json())
            .then((data) => setTweet(data));
    }, []);

    return (
        <div>
            <TweetContainer tweet={tweet} />
            <Navbar />
            <SubmitTweet />
            <Search />


            {/* <button onClick={handleLogout}>Logout</button> */}

        </div>
    )
}

export default HomePage;