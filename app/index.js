import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Customer from "../components/Customer.jsx"
import Cards from "../components/Cards.jsx";


class App extends React.Component {

  render() {
    return (
      <>
        {/* <Customer/> */}
        <Cards/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
