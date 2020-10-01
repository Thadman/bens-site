import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faMobile,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { Form, Input } from "react-bulma-components";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { name, email, message, number } = this.state;
    e.preventDefault();
    console.log(`
      ${name}
      ${email}
      ${number}
      ${message}
    `);
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  }

  render() {
    return (
      <>
        <div className="main-contact-container" id="contact">
          <div className="contact-form-container">
            <h2>Get In Touch</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="input-container">
                {/* <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="number"
                  placeholder="New Zealand number (+64 27 123 4567)"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <textarea
                  type="text"
                  name="message"
                  value={this.state.message}
                  placeholder="Tell me a bit about the work..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
