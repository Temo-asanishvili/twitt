import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./pages/Menu";
import "./styles/mainStyle.scss";
import Navigation from "./pages/Navigation";

const App = () => {
  return (
    <div className="mainContainer">
      <Router>
        <Menu />
        <Navigation />
      </Router>
    </div>
  );
};

export default App;
