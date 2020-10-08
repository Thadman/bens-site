import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    message: "",
    hovering: false,
  };

  mouseOver(id) {
    this.setState({
      [id]: true,
    });
  }

  mouseOut(id) {
    console.log(this.state.hovering);
    this.setState({
      [id]: false,
    });
  }

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
    const { hovering } = this.state;
    return (
      <>
        <div className="section" id="contact">
          <div className="container">
            <div className="columns is-centered is-mobile">
              <div className="column is-half">
                <h2
                  onMouseOver={() => this.mouseOver("hovering")}
                  onMouseOut={() => this.mouseOut("hovering")}
                  style={styles.container}
                  className="is-size-4 pb-3"
                >
                  {hovering === true && (
                    <div style={styles.tooltip}>Get in touch</div>
                  )}
                  Get In Touch
                </h2>
                <form
                  method="POST"
                  data-netlify="true"
                  onSubmit={this.handleSubmit}
                  name="contact"
                >
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-medium"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="number"
                        name="number"
                        placeholder="Number"
                        value={this.state.number}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea is-medium"
                        type="message"
                        name="message"
                        value={this.state.message}
                        placeholder="Tell me a bit about the work..."
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-fullwidth"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
