import React from "react";
import { Route, Routes } from "react-router-dom";
import Tweets from "../components/Tweets";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Bookmarks" element={<Bookmarks />} />
      <Route path="/List" element={<List />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}
function Main() {
  return (
    <div>
      <h1> Welcome to the Twitter</h1>
      <Tweets />
    </div>
  );
}
function Explore() {
  return (
    <div>
      <h1> #Explore</h1>
    </div>
  );
}
function Notification() {
  return (
    <div>
      <h1> Notification</h1>
    </div>
  );
}
function Messages() {
  return (
    <div>
      <h1> Messages</h1>
    </div>
  );
}
function Bookmarks() {
  return (
    <div>
      <h1> Bookmarks</h1>
    </div>
  );
}
function List() {
  return (
    <div>
      <h1> List</h1>
    </div>
  );
}
function Profile() {
  return (
    <div>
      <h1> Profile</h1>
    </div>
  );
}
