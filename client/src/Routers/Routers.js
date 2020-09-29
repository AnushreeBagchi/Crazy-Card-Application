import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cards from "../components/Cards.jsx";
import Customer from "../components/Customer/Customer.jsx";
import NotFound from '../components/NotFound.js';


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