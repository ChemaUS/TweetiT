import TweetCard from "./TweetCard";
function TweetContainer({ tweet }) {
    const tweetArry = tweet.map((tweets) => {
        return <TweetCard tweets={tweets} key={tweets.id} />
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