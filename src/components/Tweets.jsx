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
      {Tweets.length > 1 ? (
        Tweets.map((tweet) => {
          return (
            <div>
              <Link to={`${tweet.id}`}>read tweets</Link>

              <TweetCard
                key={tweet.id}
                tweet={tweet.id}
                handleTweetId={handleTweetId}
              />
            </div>
          );
        })
      ) : (
        <TweetCard
          key={Tweets.id}
          tweet={Tweets}
          handleTweetId={handleTweetId}
        />
      )}
    </div>
  );
}
