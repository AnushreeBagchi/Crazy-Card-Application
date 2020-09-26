import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routers from "../src/Routers/Routers";
import configureStore from "../src/store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
