import React, { useState } from "react";
import { ApiPostsData } from "../connectors/apiConnector";
import TweetsCard from "./TweetsCard";
import "../styles/tweets.scss";

export default function Tweets() {
  const [postId, setPostId] = useState(null);
  const postData = ApiPostsData(postId);

  return (
    <div>
      {postData.length > 1 ? (
        postData.map((post) => {
          return <TweetsCard key={post.id} post={post} />
        })
      ) : (
        <div>
          <TweetsCard key={postData.id} post={postData} />
        </div>
      )}
    </div>
  );
}
