import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addPerson } from "../actions/buttonAddPersonActions";
import { generatePeople } from "../actions/personActions";

const Person = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  // const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.results;
      })
      .then((person) => {
        dispatch(generatePeople(person));
      });
  }, []);

  return (
    <div>
      <h1>Person</h1>
    </div>
  );
};
export default Person;
// const mapStateToProps = (state) => {
//   // current state of our store
//   console.log("state", state);
//   return { users: state.users };
// };
// const mapDipatchToProps = (dispatch) =>
//   dispatch(generatePeople({ kupa: "!23" }));
// export default connect(mapStateToProps, mapDipatchToProps)(Person);
// // export default connect(mapStateToProps)(RandomPeople);
