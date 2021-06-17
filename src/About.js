import React from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";

export default class About extends React.Component {
  componentDidMount() {
    const options = {
      strings: ["Hi, I'm Ben 👋"],
      typeSpeed: 40,
      backSpeed: 40,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section
          className="hero is-fullheight"
          style={{ background: "#535458" }}
        >
          <div className="hero-body" id="about">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-two-thirds">
                  <h2 className="is-size-3 pb-4 about-paragraph">
                    <span
                      ref={(el) => {
                        this.el = el;
                      }}
                    />
                  </h2>
                  <p className="is-size-5 is-mobile about-paragraph">
                    Hi, i'm Ben. I am a{" "}
                    <span style={{ textDecorationLine: "line-through" }}>
                      slightly
                    </span>
                    , heavily balding middle aged man just trying to make his
                    way in the world. I think i am a bad boy, and pretend to
                    ride dirt bikes to prove this - mainly just run around the
                    rugby field hurting myself and losing hair. Need a house
                    drawn up - should probs talk to Kyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-arrow pb-4">
            <Link
              className="contact"
              to="contact"
              activeClass="active"
              // id="contact"
              smooth={true}
              duration={500}
            >
              <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}
