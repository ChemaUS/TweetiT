import React from "react";
import Navbar from "./Navbar";
import SubmitTweet from "./SubmitTweet";
import TweetContainer from "./TweetContainer";
import Search from "./Search";
import Profile from "./Profile";



function HomePage({ user, setUser }) {


    return (
        <div>
            <p style={{ color: 'red' }}>HELLLLLPPP</p>


            <Navbar />
            <SubmitTweet />
            <TweetContainer />
            <Search />

            <Profile user={user} setUser={setUser} />
            {/* <button onClick={handleLogout}>Logout</button> */}

        </div>
    )
}

export default HomePage;