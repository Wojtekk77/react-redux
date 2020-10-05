import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Person.css";
import Page from "../layouts/Page";
import { Link } from "react-router-dom";
import { deletePerson } from "../actions/personActions";

const Person = (props) => {
  const store  = useSelector((state) => state);
  const isLoaded = store.isLoaded;
  const dispatch = useDispatch();

  // console.log(props.user.picture.thumbnail);

  const handleClick = (props) => {
    console.log(props.user);
  };

  const handleClickDelete = (props) => {
    console.log(props.user)
    console.log(store.users)
    const users = store.users.filter((user)=>{
      return (props.user != user)
    }); 
    dispatch(deletePerson(users))
  }
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
        <Link to={`/person/${props.user.login.username}`}>
          <button
            onClick={() => handleClick(props)}
            className="btn btn-primary"
          >
            Learn more
          </button>
        </Link>
        <button
            onClick={() => handleClickDelete(props)}
            className="btn btn-warning"
          >
            Delete person
        </button>
      </div>
    </div>
  );
};

export default Person;
