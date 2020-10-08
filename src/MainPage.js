import React from "react";
import logo from "./images/bvd-black.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
// import Nav from "./Nav";
// import { ThemeConsumer } from "./Theme";

const FadeInAnimation = keyframes`${fadeInDown}`;
const FadeInDiv = styled.div`
  animation: 1 3s ${FadeInAnimation};
`;

const MainPage = () => {
  return (
    <>
      <div className="small-icon-main" onClick={() => scroll.scrollToTop()}>
        <img src={logo} alt="this is the menu logo" />
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered is mobile">
            <div className="column is-half">
              <figure className="image is-256x256">
                <FadeInDiv>
                  <img src={logo} alt="this is the logo" />
                </FadeInDiv>
              </figure>
              <div className="navigation-arrow">
                <Link
                  className="about"
                  to="about"
                  activeClass="active"
                  smooth={true}
                  duration={500}
                >
                  <FontAwesomeIcon icon={faArrowDown} size="2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
