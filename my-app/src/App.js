import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Password from "./Password.js";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my form</h1>
        </header>
        <Password />
      </div>
    );
  }
}

export default App;
