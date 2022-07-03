import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.scss"

export default function Menu() {
  return (
    <div className="menuContainer">
      <ul>
        <li className="menuItem">
          <Link to="/">Main</Link>
        </li>
        <li className="menuItem">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="menuItem">
          <Link to="/notification">Notification</Link>
        </li>
        <li className="menuItem">
          <Link to="/Messages">Messages</Link>
        </li>
        <li className="menuItem">
          <Link to="/Bookmarks">Bookmarks</Link>
        </li>
        <li className="menuItem">
          <Link to="/Bookmarks">List</Link>
        </li>
        <li className="menuItem">
          <Link to="/Bookmarks">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
