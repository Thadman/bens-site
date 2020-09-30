import React from "react";
import logo from "./images/bvd-black.jpg";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const FadeInAnimation = keyframes`${fadeInDown}`;
const FadeInDiv = styled.div`
  animation: 1 4s ${FadeInAnimation};
`;

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <FadeInDiv>
        <div className="image-container">
          <img src={logo} alt="this is the logo" />
        </div>
      </FadeInDiv>
    </div>
  );
}
