import React from "react";

function Comments(props) {
  const { comment } = props;

  return (
    <div className="CommentsContainer">
          {comment.email}
          {comment.body}
    </div>
  );
}

export default Comments;
