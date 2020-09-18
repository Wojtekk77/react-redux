import React from "react";
import "./App.css";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
