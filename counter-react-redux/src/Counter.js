import React from "react";
import "./Counter.css";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    console.log("increment");
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    console.log("decrement");
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="wrapper">
        <span>counter</span>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
});
export default connect(mapStateToProps)(Counter);
