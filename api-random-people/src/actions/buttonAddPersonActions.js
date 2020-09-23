//action for button
export const addPerson = (person) => {
  return {
    type: "ADD_PERSON",
    person: person,
  };
};
