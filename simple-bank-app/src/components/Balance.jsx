import React from "react";
import { useSelector } from "react-redux";
const Balance = () => {
  const store = useSelector((state) => state);
  // const balance = useSelector((state)=> state.balance);

  return (
    <div>
      <h1>${store.banking.balance}</h1>
    </div>
  );
};

export default Balance;
