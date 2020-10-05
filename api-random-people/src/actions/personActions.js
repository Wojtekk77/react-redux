export const generatePeople = (people) => {
  return {
    type: "GENERATE_NEW_PEOPLE",
    people: people,
  };
};

export const deletePerson = (people) => {
  return {
    type: "DELETE_PERSON",
    people: people,
  };
};