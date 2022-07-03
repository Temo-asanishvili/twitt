import React, { useRef, useState } from "react";
import { ApiImagesData, ApiUsersData } from "../connectors/apiConnector";
import useLocalState from "../hooks/useLocalStorage";
import "../styles/tweets.scss";
import Popup from "./Popup";

import  {IoMdHeartEmpty} from 'react-icons/io';
import  {FaRetweet} from 'react-icons/fa';
import {MdIosShare} from 'react-icons/md';
import {BiMessageRounded} from 'react-icons/bi';



export default function TweetContainer(props) {
  const users = ApiUsersData(props.post.userId);
  const img = ApiImagesData(props.post.id);
  const [isClicked, setIsClicked] = useState(false);
  const openComment = useRef();
  const [count, setCount] = useLocalState(120, "Like", 1000);

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

  const Like = () => {
     setCount(count + 1);
    
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
            <Popup handleComment={handleComment} TweetDetail={TweetDetail} Like={Like}/>
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
              <BiMessageRounded className="BiMessage"/> 10
            </button>
          
            <button className="tweetButton"><FaRetweet className="tweetFa"/> 1</button> 
            <button className="tweetButton" onClick={Like}><IoMdHeartEmpty className="heartLike"/>{count}</button>
            <button className="tweetButton"><MdIosShare className="shareMd"/></button> 
          </div>
        </div>
      )}
    </div>
  );
}
