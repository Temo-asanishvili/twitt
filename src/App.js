import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./pages/Menu";
import "./styles/mainStyle.scss";
import Navigation from "./pages/Navigation";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="mainContainer">
      <Router>
        <Menu />
        <Navigation />
        <Search/>
      </Router>
    </div>
  );
};

export default App;
