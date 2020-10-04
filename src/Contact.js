import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  handleChange = (e) => {
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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
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
            <form
              method="POST"
              data-netlify="true"
              onSubmit={this.handleSubmit}
            >
              <div className="input-container">
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
                  type="number"
                  name="number"
                  placeholder="New Zealand number (+64 27 123 4567)"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-container">
                <textarea
                  type="message"
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
