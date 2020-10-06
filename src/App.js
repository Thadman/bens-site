import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.css";
import Contact from "./Contact";
import About from "./About";

// can you import these here and then pass them as props to the other components so they don't have to all be class components?
// for example <About FontAwesomeIcon icon={faArrowDown} size="3x" />
// const icons = FontAwesomeIcon icon={faArrowDown} size="3x"
// and then pass icons={this.icons} through to other components?
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <MainPage />
      <About />
      <Contact />
    </div>
  );
}

export default App;
