import React from "react";
import MainPage from "./MainPage";
import "./App.css";
import Contact from "./Contact";
import About from "./About";
// import { ThemeProvider } from "./Theme";
// import Nav from "./Nav";

class App extends React.Component {
  state = {
    theme: "dark",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "dark" ? "light" : "dark",
      }));
    },
  };
  render() {
    return (
      // <ThemeProvider value={this.state}>
      <div className={this.state.theme}>
        {/* <div> */}
        {/* <Nav /> */}
        <MainPage />
        <About />
        <Contact />
        {/* </div> */}
      </div>
      // </ThemeProvider>
    );
  }
}

export default App;
