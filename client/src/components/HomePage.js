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

    //andle POST request 
    // const [tweet, setTweet] = useState([])

    const handleAddTweet = ({ newTweet }) => {
        fetch('/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newTweet })
        })
            .then((res) => res.json())
            .then((data) => setTweet([data, ...tweet]));
    }

    return (
        <div>
            <TweetContainer tweet={tweet} />
            <Navbar />
            <SubmitTweet handleAddTweet={handleAddTweet} />
            <Search />


            {/* <button onClick={handleLogout}>Logout</button> */}

        </div>
    )
}

export default HomePage;