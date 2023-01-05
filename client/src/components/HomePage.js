import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubmitTweet from "./SubmitTweet";
import TweetContainer from "./TweetContainer";
import Search from "./Search";




function HomePage({ user, userr, searched, setSearched }) {
    const [tweet, setTweet] = useState([])
    // const [allUser, setAllUser] = useState([])
    useEffect(() => {
        fetch(`/tweets`)
            .then((r) => r.json())
            .then((data) => setTweet(data));
    }, []);


    // useEffect(() => {
    //     fetch(`/users`)
    //         .then((r) => r.json())
    //         .then((data) => setAllUser(data));
    // }, []);

    const filtered = tweet.filter((userFlter) => {
        return userFlter.message.toLowerCase().includes((searched.toLowerCase()))
    })
    const userFilter = userr.map(useerr => {
        return <TweetContainer tweet={filtered} useerr={useerr} key={useerr.id} />
    })


    return (
        <div>
            <Search searched={searched} setSearched={setSearched} />
            {/* user={filtered} /> */}
            <Navbar users={user} />   {/*user={filtered} */} 
            <SubmitTweet />
            {userFilter}


            {/* <button onClick={handleLogout}>Logout</button> */}

        </div>
    )
}

export default HomePage;