import React from "react";
import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "./actions/action.js";
import { connect } from "react-redux";

const fetchProducts = () => {
  console.log("res.results");
  fetch("https://randomuser.me/api/?results=25")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res.results);
      this.props.dispatch(fetchProductsSuccess(res.results));
    });
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    error: state.error,
    isLoaded: state.isLoaded,
    users: state.users,
    count: state.count,
  };
};

const mapDispatchToProps = { fetchProducts };

export default connect(mapStateToProps, mapDispatchToProps)(fetchProducts);
