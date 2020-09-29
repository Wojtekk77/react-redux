import React from "react";
import { connect } from "react-redux";
import "../styles/Footer.css";
export const Footer = () => (
  <div className="container-fluid">
    <div className="row footerWrapper bg-primary text-white">
      <div className="col-md-4 text-center">footer1</div>
      <div className="col-md-4 text-center">footer2</div>
      <div className="col-md-4 text-center">footer3</div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
