import React, { useState } from "react";
import { UsersApi } from "./ApiConnector";

export default function TweetCard() {
  const [tweetsId, setTweetsId] = useState(null);
  const Users = UsersApi(tweetsId);

  return (
    <div>
      {Users.map((user) => {
        return (
          <div className="TweetContainer" key={user.id}>
            {user.id}
            <p className="mainTweet">{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}
