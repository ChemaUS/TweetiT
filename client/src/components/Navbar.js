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

import { NavLink } from "react-router-dom"





// only icon working will be the profile icon
function Navbar() {


    return (

        <div className="navbar">
            <div className="home">
                <HomeIcon />
                <p>Home</p>
            </div>

            <div className="notifications">
                <BellIcon />
                <p>Notifications</p>
            </div>

            <div className="messages">
                <ArchiveBoxIcon />
                <p>Messages</p>
            </div>


            <div className="bookmarks">
                <BookmarkIcon />
                <p>Bookmarks</p>
            </div>


            <div className="profile">

                <UserIcon />profile
                {/* <p>Profile</p> */}
            </div>

            <NavLink className="padding" to="/"
                style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })}>Home</NavLink>


        </div >
    )
}
// add onClick and route for Profile icon to lead to profile file

export default Navbar; 