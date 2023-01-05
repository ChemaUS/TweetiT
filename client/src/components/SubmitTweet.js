import React, { useState } from "react";


// 
function SubmitTweet({ handleAddTweet }) {

    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newTweet = {
            message
        }
        handleAddTweet(newTweet)
    }


    return (
        <div className="submit-tweet">
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="tweet"
                    placeholder="What's happening?"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <button type="submit">Tweet</button>


            </form>
        </div>
    )
}
export default SubmitTweet