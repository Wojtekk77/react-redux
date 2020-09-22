import React, { useState } from "react";
import { useSelector } from "react-redux";

const Person = () => {
  const store = useSelector((state) => state);
  const people = store.users.map((person) => {
    console.log("person", person);
  });
  return (
    <div className="col-md-3">
      <div className="box_header">Header</div>
      <div className="box_main">Main</div>
      <div className="box_footer">Footer</div>
    </div>
  );
};

export default Person;
