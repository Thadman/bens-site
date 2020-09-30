import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.css";
import Contact from "./Contact";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
      {/* <About FontAwesomeIcon icon={faArrowDown} size="3x" />
      <Contact /> */}
    </div>
  );
}

export default App;
