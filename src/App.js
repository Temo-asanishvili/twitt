import React from "react";
import Tweets from "./components/Tweets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

function Main() {
  return (
    <div>
    <h1> Welcome to the Twitter</h1>
      <Tweets />
    </div>
  );
}

export default App;
