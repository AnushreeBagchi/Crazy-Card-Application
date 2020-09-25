import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routers from '../components/Routers';
import { Provider } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <>
        <Routers/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
