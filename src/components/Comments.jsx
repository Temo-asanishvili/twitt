import React from "react";
import "../styles/comments.scss"

export default function Comments(props) {
  const { comment } = props;

  return (
    <div className="commentsContainer">
      <div>{comment.email[0].toUpperCase()}</div>
      <div>
        <div>{comment.email}</div> ...
        <div>
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  );
}


