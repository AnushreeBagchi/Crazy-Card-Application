import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Typography,
  Grid,
  Divider,
  Button,
  CardActions,
} from "@material-ui/core";
import { NO_CARD_TEXT, HOME_BTN_TEXT } from "../../constants/constants";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeConsumer } from "../../contexts/theme";

const useStyles = makeStyles((theme) => ({
  rowGrid: {
    marginTop: 10,
  },
}));

function SelectGrid(props) {
  const classes = useStyles();

  const getTotalCredit = () => {
    return props.selectedCards.reduce((total, card) => {
      return (total += Number(card.credit.slice(1)));
    }, 0);
  };

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Card className={`theme-${theme}`} elevation={3}>
          <Grid container justify="center">
            <Typography gutterBottom variant="h5" component="h2">
              Selected Cards
            </Typography>
          </Grid>
          <Divider variant="middle" />
          <CardContent>
            {props.selectedCards.length === 0 ? (
              <Grid container justify="center">
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.rowGrid}
                >
                  {NO_CARD_TEXT}
                </Typography>
              </Grid>
            ) : (
              <div>
                {props.selectedCards.map((card) => (
                  <Grid
                    key={card.name}
                    direction="row"
                    container
                    className={classes.rowGrid}
                  >
                    <Grid item lg={10} md={10} sm={10} xs={10}>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        component="p"
                      >
                        {card.name}
                      </Typography>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2}>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        component="p"
                      >
                        {card.credit}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </div>
            )}
            <Divider variant="middle" />
            <Grid container direction="row" className={classes.rowGrid}>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Total
                </Typography>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  component="p"
                >
                  £{getTotalCredit()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => props.reset()}
            >
              Reset
            </Button>
          </CardActions>
        </Card>
      )}
    </ThemeConsumer>
  );
}

export default SelectGrid;
