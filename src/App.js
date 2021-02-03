import React from "react";
import MainPage from "./MainPage";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
// import ThankYou from "./ThankYou";
import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <div> */}
        {/* <Nav /> */}
        <MainPage />
        <About />
        <Contact />
        {/* <ThankYou /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;

// to sort out context and color

// import { ThemeProvider } from "./Theme";
// import Nav from "./Nav";

// state = {
//   theme: "dark",
//   toggleTheme: () => {
//     this.setState(({ theme }) => ({
//       theme: theme === "dark" ? "light" : "dark",
//     }));
//   },
// };
