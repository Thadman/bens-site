import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.css";
import Contact from "./Contact";
import About from "./About";
// import Form from "./Form";

// can you import these here and then pass them as props to the other components so they don't have to all be class components?
// for example <About FontAwesomeIcon icon={faArrowDown} size="3x" />
// const icons = FontAwesomeIcon icon={faArrowDown} size="3x"
// and then pass icons={this.icons} through to other components?
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      {/* <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      </Switch> */}
      {/* </BrowserRouter> */}
      <MainPage />
      <About />
      <Contact />
      {/* <Form /> */}
    </div>
  );
}

export default App;
