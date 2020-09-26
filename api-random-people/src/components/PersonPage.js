import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addPerson } from "../actions/buttonAddPersonActions";
import { generatePeople } from "../actions/personActions";
import { Link } from "react-router-dom";
import Person from "./Person.js";

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
      <div>
        <Person key={sp.email} user={sp} />
        <p>cos mojego{match.params.id}</p>
      </div>
    </>
  );
};

export default PersonPage;
