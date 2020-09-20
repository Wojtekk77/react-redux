import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore } from "redux";
import { bankingReducer } from "./reducers/bankingReducers";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/combinedReducers";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
