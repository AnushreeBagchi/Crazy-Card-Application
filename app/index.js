import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "../components/Card.jsx"



class App extends React.Component {

  render() {
    return (
      <>
        <Card/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
