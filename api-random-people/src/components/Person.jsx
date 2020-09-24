import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Person.css";
const Person = (props) => {
  // const store = useSelector((state) => state);
  console.log(props.user.picture.thumbnail);
  return (
    <div className="box_person col-md-3">
      <div className="box_header_person">
        Header {props.user.cell}
        {props.user.cell}
      </div>
      <div className="box_main_person">Main {props.user.email}</div>
      <div className="box_footer_person">Footer {props.user.gender}</div>
    </div>
  );
};

export default Person;
