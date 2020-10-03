import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addPerson } from "../actions/buttonAddPersonActions";
import { generatePeople } from "../actions/personActions";
import { Link } from "react-router-dom";
import Person from "./Person.js";
import "../styles/PersonPage.css";

const PersonPage = ({ match }) => {
  const store = useSelector((state) => state);
  console.log("i am behingsaojid", store);
  const singlePerson = store.users.filter(
    (user) => user.login.username === match.params.id
  );
  console.log("single person", singlePerson);
  const sp = singlePerson[0];
  return (
    <>
      <div className="container single_page_person">
        <div className="row justify-content-center">
          <div className="box_person_page col-md-3">
            <div className="box_header_person_page">
              <p className="name">
                {sp.name.first} {sp.name.last}
              </p>

              <img src={sp.picture.medium} />
            </div>
            <div className="box_main_person_page">
              <ul>
                <li>Phone: {sp.phone}</li>
                <li className="email">
                  Email: <br /> <span>{sp.email}</span>
                </li>
                <li>Location: {sp.location.city}</li>
                <li>Country: {sp.location.country}</li>
              </ul>
            </div>
            <div className="box_footer_person_page">
              <Link to={`/`}>
                <button className="btn btn-primary">Back to list</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonPage;
