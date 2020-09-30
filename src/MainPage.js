import React from "react";
import logo from "./images/bvd-black.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const FadeInAnimation = keyframes`${fadeInDown}`;
const FadeInDiv = styled.div`
  animation: 1 3s ${FadeInAnimation};
`;

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="navbar">
        <div>
          {/* <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Get In Touch</NavLink> */}
        </div>
      </div>
      <FadeInDiv>
        <div className="image-container">
          <img src={logo} alt="this is the logo" />
        </div>
        <div className="navigation-arrow">
          <NavLink to="/about">
            <FontAwesomeIcon icon={faArrowDown} size="3x" />
          </NavLink>
        </div>
      </FadeInDiv>
    </div>
  );
}
