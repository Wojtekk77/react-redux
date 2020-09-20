import React from "react";
import { createStore } from "redux";
import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "./actions/action";

const initialState = {
  error: null,
  isLoaded: false,
  users: [],
  count: 0,
  pending: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "GET_API":
      return {
        ...state,
        count: state.count - 1,
        isLoaded: true,
        users: [{ gender: "wadiojwd", name: "wiojhtek" }],
      };
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        users: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      console.log("success", action.users);
      return {
        ...state,
        pending: false,
        users: action.users,
        isLoaded: true,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;

export default store;
