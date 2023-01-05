import React from "react";
import { HiHome } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
function Navbar() {


    return (
        <>
            <div className="navbar">
                <div className="home">
                    <HiHome />
                    <p>Home</p>
                </div>

                <div className="notifications">
                    <HiBell />
                    <p>Notifications</p>
                </div>

                <div className="messages">
                    <HiMail />
                    <p>Messages</p>
                </div>

                <div className="bookmarks">
                    <HiBookmark />
                    <p>Bookmarks</p>
                </div>

                <div className="profile">
                    <HiUser />
                    <p>Profile</p>
                </div>

            </div >
        </>
    )
}
export default Navbar