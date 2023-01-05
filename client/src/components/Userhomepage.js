import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SubmitTweet from "./SubmitTweet";
import TweetContainer from "./TweetContainer";
import Search from "./Search";



function UserHomePage() {

    useEffect(() => {
        fetch('./')
    })


    // handle POST request 
    // const [tweet, setTweet] = useState([])

    // const handleAddTweet = () => {
    //     fetch('/login', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ message })
    //     })
    //     .then((res) => res.json() )
    //     .then((data) => )
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

