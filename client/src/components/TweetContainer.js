import TweetCard from "./TweetCard";
function TweetContainer({ tweet, useerr }) {
    const tweetArry = tweet.map((tweets) => {
        return <TweetCard tweets={tweets} key={tweets.id} useerr={useerr} />
    })
    return (

        <>
            <div className="tweetContainer">

                {tweetArry}
            </div>
        </>
    )
}
export default TweetContainer