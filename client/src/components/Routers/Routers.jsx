import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cards from "../Cards/Cards.jsx";
import Customer from "../Customer/Customer.jsx";
import NotFound from '../NotFound.jsx';


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