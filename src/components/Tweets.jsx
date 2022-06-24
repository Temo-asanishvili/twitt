import React, { useState } from "react";
import { TweetsApi, UserApi } from "./ApiConnector";
import { Link } from "react-router-dom";

export default function Tweets(props) {
  const [tweetsId, setTweetsId] = useState(null);
  const tweets = TweetsApi(tweetsId);
  const users = UserApi(tweetsId);
  const {tweet} = props;
  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div className="TweetContainer" key={tweet.id}>
            <h3> tweet title:</h3>
            <p className="mainTweet">{tweet.title}</p>

            <Link to={`/${tweet.id}`}> read more... </Link>
           
          </div>
        );
      })}
      this is tweetss....
    </div>
  );
}
