import React from "react";
import { connect } from "react-redux";
import "../styles/Footer.css";

export const Footer = () => (
  <footer className="fixed-bottom py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Your Website</small>
    </div>
  </footer>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
