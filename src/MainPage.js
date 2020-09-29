import React from "react";
import logo from "./images/bvd-black.jpg";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="image-container">
        <img src={logo} alt="this is the logo" />
      </div>
    </div>
  );
}
