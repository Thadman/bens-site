import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <>
      <div className="column is-one-half-desktop">
        <form
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-large"
                type="text"
                placeholder="Name"
                name="Name"
                required
              />
              <span className="icon is-large is-left">
                <faUser />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-large"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <span className="icon is-large is-left">
                <faEnvelope />
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                name="message"
                className="textarea is-large has-fixed-size"
                placeholder="Your wishlist"
                rows="5"
                required
              />
            </div>
            <faEnvelope />
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select is-large"></div>
              <span className="icon is-large is-left">
                <faMobile />
              </span>
            </div>
          </div>
          <p className="control">
            <button className="button is-primary is-large" type="submit">
              Say hi
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
