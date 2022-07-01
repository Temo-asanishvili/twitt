import React, { useState } from "react";
import { ApiCommentsData, ApiPostsData } from "../connectors/apiConnector";
import Comments from "./Comments";
import TweetContainer from "./TweetContainer";

export default function Tweets() {
  const [postId, setPostId] = useState(null);
  const tweets = ApiPostsData(postId);
  const commentsData = ApiCommentsData(postId);

  const handleDetails = (id) => {
    setPostId(id);
  };

  return (
    <div>
      {tweets.length > 1 ? (
        tweets.map((post) => {
          return (
            <TweetContainer
              key={post.id}
              post={post}
              handleDetails={handleDetails}
            />
          );
        })
      ) : (
        <TweetContainer
          key={tweets.id}
          post={tweets}
          handleDetails={handleDetails}
        />
      )}
      {commentsData.length >= 1 && postId !== null && (
        <div>
          {commentsData.map((comment) => {
            return (
              comment.postId === postId && (
                <Comments comment={comment} key={comment.id} />
              )
            );
          })}
        </div>
      )}
      {postId !== null && (
        <button className="Back" onClick={() => setPostId(null)}>
          Go BACK
        </button>
      )}
    </div>
  );
}
