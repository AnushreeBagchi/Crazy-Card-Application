import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Routers/Routers.jsx";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "../contexts/theme";
import { Container, Grid } from "@material-ui/core";
import Nav from "./Nav/Nav.jsx";


const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
     
        <Provider store={store}>
          <ThemeProvider value={this.state}>
            <Grid container>
              <Nav></Nav>
            </Grid>
            <Container >
            <Routers />
            </Container>
          </ThemeProvider>
        </Provider>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
