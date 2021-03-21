import React from "react";
import Button from "@material-ui/core/Button";
import { Route, NavLink, Switch, Router } from "react-router-dom";
import Pizza from "./Pizza";
import Nav from "./Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/pizza" component={Pizza} />
    </div>
  );
};
export default App;
