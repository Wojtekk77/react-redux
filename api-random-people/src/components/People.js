import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addPerson } from "../actions/buttonAddPersonActions";
import { generatePeople, deletePerson } from "../actions/personActions";
import Person from "./Person.js";
import { Link } from "react-router-dom";
const People = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  // const [count, setCount] = useState(0);
  useEffect(() => {
    if (store.users.length < 3) {
      fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((res) => res.results)
        .then((person) => dispatch(generatePeople(person)));
    }
  }, []);

  const people = store.users.map((user) => {
    return <Person key={user.email} user={user} />;
  });
  return (
    <div className="container people_box">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h1 className="pt-5 pb-4">People</h1>
        </div>
        {store.isLoaded ? people : <h2>Loading...</h2>}
      </div>
    </div>
  );
};
export default People;
// const mapStateToProps = (state) => {
//   // current state of our store
//   console.log("state", state);
//   return { users: state.users };
// };
// const mapDipatchToProps = (dispatch) =>
//   dispatch(generatePeople({ kupa: "!23" }));
// export default connect(mapStateToProps, mapDipatchToProps)(Person);
// // export default connect(mapStateToProps)(RandomPeople);
