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
      <div className="box_main_person">
        <ul>
          <li>Phone: {props.user.phone}</li>
          <li className="email">
            Email: <br /> <span>{props.user.email}</span>
          </li>
          <li>Location: {props.user.location.city}</li>
          <li>Country: {props.user.location.country}</li>
        </ul>
      </div>
      <div className="box_footer_person">
        <button className="btn btn-primary">Learn more</button>
      </div>
    </div>
  );
};

export default Person;
