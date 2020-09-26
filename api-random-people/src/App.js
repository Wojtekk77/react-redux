import React, { Component } from "react";
import ButtonAddPerson from "./components/ButtonAddPerson.js";
import People from "./components/People.js";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./layouts/Page.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          hello world
          <ButtonAddPerson />
          {<Page />}
        </div>
      </Router>
    );
  }
}

export default App;
