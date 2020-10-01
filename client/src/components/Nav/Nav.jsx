import React from "react";
import { ThemeConsumer } from "../../contexts/theme";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    marginTop: 10,
    marginBottom: 10
  },
  btn: {
      fontSize: 30
  }
}));
export default function Nav() {
  const classes = useStyles();
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Crazy Card Application
              </Typography>
              <Button
                className={classes.btn}
                color="inherit"
                onClick={toggleTheme}
              >
                {theme === "light" ? "🔦" : "💡"}
              </Button>
            </Toolbar>
          </AppBar>
        </>

      )}
    </ThemeConsumer>
  );
}
