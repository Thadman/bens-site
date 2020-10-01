import React from "react";
import logo from "./images/bvd-black.jpg";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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

export default function MainPage() {
  return (
    <div className="main-container">
      <FadeInDiv>
        <div className="image-container">
          <img src={logo} alt="this is the logo" />
        </div>
        <BounceDiv>
          <div className="navigation-arrow">
            <Link
              className="about"
              to="/about"
              activeClass="active"
              id="about"
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon icon={faArrowDown} size="3x" />
            </Link>
          </div>
        </BounceDiv>
      </FadeInDiv>
    </div>
  );
}
