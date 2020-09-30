import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.css";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </BrowserRouter>
      <About />
      <Contact />
    </div>
  );
}

export default App;
