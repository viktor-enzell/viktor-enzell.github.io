import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Fallback from "./404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route component={Fallback} />
    </Switch>
  );
}
