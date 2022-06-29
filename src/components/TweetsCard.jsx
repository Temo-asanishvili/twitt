import React from "react";
import {
  ApiImagesData,
  ApiUsersData,
} from "../connectors/apiConnector";

export default function PostCard(props) {
  const users = ApiUsersData(props.post.userId);
  const img = ApiImagesData(props.post.id);

  return (
    <div className="allTweets">
      {users.data.length >= 1 && img.data.length >= 1 && (
        <div className="TweetContainer">
          <img src={img.data[0].url} alt="Avatar" className="AvatarImg" />

          <div className="Name"> {users.data[0].name}</div>

          <div className="UserTag">@{users.data[0].username}</div>

          <img className="TweetImg" src={img.data[0].url} alt="TweetImg" />
          
          <div className="ButtonContainer">
            <button className="tweetButton">Reply</button>
            <button className="tweetButton">Retweet</button>
            <button className="tweetButton">Like</button>
            <button className="tweetButton">Share</button>

          </div>
        </div>
      )}
    </div>
  );
}
