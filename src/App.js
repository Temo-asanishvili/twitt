import React from "react";
import Tweets from "./components/Tweets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

function Main() {
  return (
    <div>
    <h1> This is main page</h1>
      <Tweets />
    </div>
  );
}

function Detail() {
  return <h1>this is detail information for Tweet By ID</h1>;


  
}

export default App;
