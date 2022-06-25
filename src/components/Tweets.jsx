import React, { useState } from "react";
import { TweetsApi } from "./ApiConnector";
import { Link } from "react-router-dom";
import TweetCard from "./TweetCard";

export default function Tweets() {
  const [tweetsId, setTweetsId] = useState(null);
  const Tweets = TweetsApi(tweetsId);

  const handleTweetId = (id) => {
    setTweetsId(id);
  };

  return (
    <div>
      {Tweets.map((tweet) => {
        return (
          <div className="TweetContainer" key={tweet.id}>
            <div>
            <p>{tweet.title}</p>
            <Link to={`${tweet.id}`}>read tweets</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
