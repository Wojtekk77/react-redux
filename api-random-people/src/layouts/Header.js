import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonAddPerson from "../components/ButtonAddPerson";

export const Header = () => {
  return (
    <div className="constainer-fluid navWrapper">
      <ButtonAddPerson />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
