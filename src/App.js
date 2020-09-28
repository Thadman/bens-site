import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import "./App.css";
import Contact from "./Contact";
import About from "./About";
import Work from "./Work";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <div className="navbar-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/work">Work</Link>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
          </div>
        </Switch>
      </BrowserRouter>
      {/* <Nav />
      <MainPage /> */}
    </div>
  );
}

export default App;
