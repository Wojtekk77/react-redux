import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import People from "../components/People";
import PersonPage from "../components/PersonPage";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={People} />
      <Route path="/person/:id" component={PersonPage} />
      {/* <Route path="/contact" component={ContactPage} />
  <Route path="/admin" component={AdminPage} />
  <Route path="/login" component={LoginPage} /> */}
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
