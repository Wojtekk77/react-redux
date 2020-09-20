import React from "react";
import Auth from "./components/Auth.jsx";
import Balance from "./components/Balance.jsx";
import Banking from "./components/Banking.jsx";
import AccountStatus from "./components/AccountStatus.jsx";
const App = () => {
  return (
    <div>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
};

export default App;
