import React from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../actions/buttonAddPersonActions";

const ButtonAddPerson = () => {
  const dispatch = useDispatch();
  const handleAddPerson = () => {
    console.log("add");

    fetch("https://randomuser.me/api/?results=1")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.results[0];
      })
      .then((person) => dispatch(addPerson(person)));
  };
  return <button onClick={handleAddPerson}>Add person</button>;
};

export default ButtonAddPerson;
