import React from "react";
import Tweets from "./components/Tweets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import TweetCard from "./components/TweetCard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      
      <Tweets />
      
    </Router>
  );
};

function Main() {
  return <h1>thisIs Main page</h1>;
}


function Detail() {
  return <h1>thisIn detail information for Tweet By ID</h1>;
}


export default App;
