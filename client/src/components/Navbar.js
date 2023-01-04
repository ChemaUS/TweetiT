import React from "react";

function Navbar() {


    return (
        <div className="navbar">
            <div className="home">
                <OutlineHome />
                <p>Home</p>
            </div>

            <div className="notifications">
                <p>Notifications</p>
            </div>

            <div className="messages">
                <p>Messages</p>
            </div>

            <div className="bookmarks">
                <p>Bookmarks</p>
            </div>

            <div className="profile">
                <p>Profile</p>
            </div>

        </div>
    )
}

export default Navbar; 