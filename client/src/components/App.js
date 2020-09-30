import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Routers from "./Routers/Routers";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "../contexts/theme";
import { Container } from "@material-ui/core";
import Nav from "./Nav";

const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light"
        }));
      },
    };
  }
  render() {
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider value={this.state}>
            <Nav></Nav>
            <Routers />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
