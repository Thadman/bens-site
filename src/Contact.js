import React from "react";

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
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="number"
              placeholder="New Zealand number (+64 27 123 4567)"
              value={this.state.number}
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              name="message"
              value={this.state.message}
              placeholder="Tell me a bit about the work..."
              onChange={this.handleChange}
            />
            <div className="submit-form">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  }
}
