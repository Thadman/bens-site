import React from "react";
import logo from "./images/bvd-black.jpg";

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={logo} alt="this is the logo" />
      </div>
    </div>
  );
}
