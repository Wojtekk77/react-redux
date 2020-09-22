export const generatePeople = (people) => {
  return {
    type: "GENERATE_NEW_PEOPLE",
    people: people,
  };
};
