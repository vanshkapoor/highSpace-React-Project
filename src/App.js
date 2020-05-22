import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "animate.css";

import All from "./components/Landing/landing";

import firebase from "./firebase.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Route exact path="/SignIn" component={SignIn} /> */}
          <Route exact path="/" component={All} />
        </div>
      </Router>
    );
  }
}
export default App;
