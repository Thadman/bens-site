import React from "react";
import logo from "./images/bvd-black.jpg";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="image-container">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/work">Work</Link>
        </div>
        <img src={logo} alt="this is the logo" />
      </div>
    </div>
  );
}
