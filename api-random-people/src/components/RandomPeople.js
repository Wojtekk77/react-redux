import React from "react";
import { connect } from "react-redux";
import fetchProducts from "../fetchProducts";
import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "../actions/action.js";

class RandomPeople extends React.Component {
  increment = () => {
    console.log("INCREMENT");
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    console.log("DECREMENT");
    this.props.dispatch({ type: "DECREMENT" });
  };

  fetchProducts = () => {
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

  componentDidMount() {
    console.log("component did mount");
    this.fetchProducts();
    console.log("component did mount2");
    // this.props.dispatch({ type: "GET_API" });
  }

  render() {
    const { isLoaded, users, count } = this.props;
    const userList = users.map((user) => {
      return <li>{user.cell}</li>;
    });
    return (
      <div>
        <h1>RandomPeople</h1>
        <ul>{isLoaded ? userList : <div>loading...</div>}</ul>
        <button onClick={this.decrement}>decrement -</button>
        <span>{count}</span>
        <button onClick={this.increment}>increment +</button>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    error: state.error,
    isLoaded: state.isLoaded,
    users: state.users,
    count: state.count,
  };
};

// const mapDispatchToProps = { increment, decrement };

// export default connect(mapStateToProps, mapDispatchToProps)(RandomPeople);
export default connect(mapStateToProps)(RandomPeople);
