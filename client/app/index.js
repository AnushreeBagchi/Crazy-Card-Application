import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routers from "../src/Routers/Routers";
import configureStore from "../src/store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "../src/contexts/theme";
import { Container } from "@material-ui/core";

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
            <Routers />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
