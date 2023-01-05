import React from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
// import { HiBell } from "react-icons/hi";
import { BellIcon } from "@heroicons/react/20/solid";

// import { HiMail } from "react-icons/hi";
import { ArchiveBoxIcon } from "@heroicons/react/20/solid"

// import { HiBookmark } from "react-icons/hi";
import { BookmarkIcon } from "@heroicons/react/20/solid"


// import { HiUser } from "react-icons/hi";
import { UserIcon } from "@heroicons/react/20/solid"

// import { NavLink } from "react-router-dom"
import Profile from "./Profile";





// only icon working will be the profile icon
function Navbar() {


    return (
        <div>
            <div className="navbar">
                <div className="icons">
                    <HomeIcon />
                    <p className="nav-text">Home</p>
                </div>

                <div className="icons">
                    <BellIcon />
                    <p className="nav-text">Notifications</p>
                </div>

                <div className="icons">
                    <ArchiveBoxIcon />
                    <p className="nav-text">Messages</p>
                </div>


                <div className="icons">
                    <BookmarkIcon />
                    <p className="nav-text">Bookmarks</p>
                </div>


                <div className="icons">

                    <UserIcon />profile
                    {/* <p>Profile</p> */}
                </div>
                {/*
            <NavLink className="padding" to="/"
                style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })}>Home</NavLink> */}
                <Profile />
                <div className="icons">
                    <button className="logout-nav">Logout</button>
                </div>



            </div >
        </div>
    )
}
// add onClick and route for Profile icon to lead to profile file

export default Navbar; 