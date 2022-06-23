import React, { useState, useEffect } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function PostFetch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const Details = () => {
    return <div>გასაგები დეტალრუი ინფო</div>;
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
          
            <Router>
              <Routes>
                <Route path={`/${item.id}`} element={<Details />} />
              </Routes>
              <NavLink to={`/${item.id}`}>დაასაჭერი</NavLink>
            </Router>
          
          </li>
        ))}
        
      </ul>
    );
  }
}
