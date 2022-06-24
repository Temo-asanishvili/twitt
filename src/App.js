import React from "react";
import Tweets from "./components/Tweets";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';




import "./App.scss";


const App = () => {
  return (
    <Router>
      <Routes>
     <Route path="posts/:id" component={<Detail/>}/>
     </Routes>
   <Tweets/>
     
   </Router>
  );
};


function Detail () {
  return (
<div>this in detail information</div>
  )
    
}

export default App;
