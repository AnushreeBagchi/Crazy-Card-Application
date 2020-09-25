import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cards from "./Cards.jsx";
import NotFound from "./NotFound";
import Customer from "./Customer.jsx";


export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Customer}/>
            <Route exact path="/cards" component={Cards}/>
            <Route exact component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}