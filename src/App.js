import React from "react";
import UserFetch from "./components/connectors/UsersFetch";
import PostFetch from "./components/connectors/PostsFetch";
import CommentsFetch from "./components/connectors/CommentsFetch";

import "./App.scss";
import PhotoFetch from "./components/connectors/PhotoFetch";

const App = () => {
  return (
    <div className="container">
      <div>
        <h2>this is user</h2>
        <UserFetch />
      </div>
      <div>
        <h2> this is posts</h2>
        <PostFetch />
      </div>
      <div>
        <h2>this is comments</h2>
        <CommentsFetch />
      </div>
      <div>
        <h2>this is Photo</h2>

        <PhotoFetch />
      </div>
    </div>
  );
};

export default App;
