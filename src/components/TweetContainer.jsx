import React, { useRef, useState } from "react";
import { ApiImagesData, ApiUsersData } from "../connectors/apiConnector";
import "../styles/tweets.scss";
import Popup from "./Popup";

export default function TweetContainer(props) {
  const users = ApiUsersData(props.post.userId);
  const img = ApiImagesData(props.post.id);
  const [isClicked, setIsClicked] = useState(false);
  const openComment = useRef();

  const handleComment = (e) => {
    if (openComment.current.contains(e.target)) {
      setIsClicked(true);
    } else {
      if (!isClicked) {
        props.handleDetails(props.post.id);
      }
      setIsClicked(false);
    }
  };
  const TweetDetail = () => {
    props.handleDetails(props.post.id);
    setIsClicked(false);
  };
  return (
    <div className="allTweets">
      {isClicked && props.clickedMenuId === props.post.id}

      {img.data.length >= 1 && users.data.length >= 1 && (
        <div className="TweetContainer">
          <div className="AvatarImg">
            <div className="UpperCase">
              {users.data[0].name[0].toUpperCase()}
            </div>
          </div>
          <div className="Name"> {users.data[0].name}</div>
          <div className="UserTag">@{users.data[0].username}</div>
          <div className="popUp">
            <Popup handleComment={handleComment} TweetDetail={TweetDetail} />
          </div>
          <img
            className="TweetImg"
            onClick={handleComment}
            src={img.data[0].url}
            alt="TweetImg"
          />

          <div
            onClick={() => {
              props.clickedMenu(props.post.id);
            }}
            ref={openComment}
          ></div>

          <div className="ButtonContainer">
            <button onClick={handleComment} className="tweetButton">
              Reply
            </button>{" "}
            10
            <button className="tweetButton">Retweet</button> 1
            <button className="tweetButton">Like</button> 120
            <button className="tweetButton">Share</button> 30
          </div>
        </div>
      )}
    </div>
  );
}
