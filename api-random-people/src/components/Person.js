import React from "react";
import { useSelector } from "react-redux";
import "../styles/Person.css";
const Person = (props) => {
  const isLoaded = useSelector((state) => state.isLoaded);
  // console.log(props.user.picture.thumbnail);

  return (
    <div className="box_person col-md-3">
      <div className="box_header_person">
        <p className="name">
          {props.user.name.first} {props.user.name.last}
        </p>

        <img src={props.user.picture.medium} />
      </div>
      <div className="box_main_person">Main {props.user.email}</div>
      <div className="box_footer_person">Footer {props.user.gender}</div>
    </div>
  );
};

export default Person;
