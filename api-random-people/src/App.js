import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import RandomPeople from "./components/RandomPeople.js";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RandomPeople />
      </div>
    </Provider>
  );
}

export default App;
