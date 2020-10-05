const initialState = {
  users: [{ gender: "male" }, { gender: "female" }],
  isLoaded: false,
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      //   console.log("in peopleReduer", action);
      return { ...state, users: state.users.concat(action.person) };
    case "GENERATE_NEW_PEOPLE":
      console.log("generate new people");
      return { ...state, users: action.people, isLoaded: true };
    case "DELETE_PERSON":
      console.log("generate new people");
      return { ...state, users: action.people};
    default:
      return state;
  }
};
