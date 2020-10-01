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
        <div className="about-main-container" id="about">
          <div className="about-small-container">
            <h2>
              <span
                ref={(el) => {
                  this.el = el;
                }}
              />
            </h2>
            <p>
              Ea duis Lorem Lorem magna consectetur qui nulla exercitation est
              ipsum in pariatur. Ea velit fugiat consequat excepteur anim
              ullamco sint nostrud. Nisi eiusmod quis reprehenderit sint. Ex
              nisi velit velit duis minim qui nulla amet fugiat cillum. Et nisi
              fugiat culpa aliqua in aliquip elit voluptate nulla voluptate
              commodo tempor veniam labore. Veniam dolore proident sit
              consectetur sint aute in proident qui nostrud incididunt id
              officia. Mollit nostrud pariatur anim velit sit sit est laborum
              culpa nostrud eiusmod ad. Exercitation sit cillum consequat cillum
              cupidatat in et. Velit mollit mollit ad mollit fugiat et
              reprehenderit. Nisi mollit eiusmod mollit excepteur cupidatat esse
              quis aliqua occaecat non veniam id aute dolor. Deserunt sint
              incididunt cupidatat laboris mollit. Proident nostrud eu
              adipisicing qui culpa laboris cupidatat. Ea cillum et amet
              exercitation.
            </p>
            <div className="navigation-arrow">
              <Link
                className="contact"
                to="contact"
                activeClass="active"
                id="contact"
                smooth={true}
                duration={500}
              >
                <FontAwesomeIcon icon={faArrowDown} size="3x" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
