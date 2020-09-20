import React from "react";
import { useSelector } from "react-redux";
const AccountStatus = () => {
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <div>
      <h1>
        {store.banking.isSavingsAccount ? "saving account" : "interest account"}
      </h1>
    </div>
  );
};

export default AccountStatus;
