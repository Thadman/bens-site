import React from "react";
import logo from "./images/bvd-black.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import { bounce } from "react-animations";

const FadeInAnimation = keyframes`${fadeInDown}`;
const FadeInDiv = styled.div`
  animation: 1 3s ${FadeInAnimation};
`;

const bounceAnimation = keyframes`${bounce}`;
const BounceDiv = styled.div`
  animation: 10s ${bounceAnimation};
`;

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="small-icon-main" onClick={() => scroll.scrollToTop()}>
        <img src={logo} alt="this is the menu logo" />
      </div>
      <FadeInDiv>
        <div className="image-container">
          <img src={logo} alt="this is the logo" />
        </div>
        <BounceDiv>
          <div className="navigation-arrow">
            <Link
              className="about"
              to="about"
              activeClass="active"
              id="about"
              smooth={true}
              duration={600}
            >
              <FontAwesomeIcon icon={faArrowDown} size="3x" />
            </Link>
          </div>
        </BounceDiv>
      </FadeInDiv>
    </div>
  );
};

export default MainPage;
