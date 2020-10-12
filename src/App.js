import React from "react";
import MainPage from "./MainPage";
import Contact from "./Contact";
import About from "./About";
import "bulma/css/bulma.css";

// import { ThemeProvider } from "./Theme";
// import Nav from "./Nav";

class App extends React.Component {
  // state = {
  //   theme: "dark",
  //   toggleTheme: () => {
  //     this.setState(({ theme }) => ({
  //       theme: theme === "dark" ? "light" : "dark",
  //     }));
  //   },
  // };
  render() {
    return (
      <div>
        {/* <div> */}
        {/* <Nav /> */}
        <MainPage />
        <About />
        <Contact />
        {/* </div> */}
      </div>
    );
  }
}

export default App;
