import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CARD_DETAILS } from "../../constants/constants";
import { ThemeConsumer } from "../../contexts/theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 133,
    backgroundSize: "contain",
    marginTop: 10,
  },
  inline: {
    display: "inline",
  },
});

const DisplayCard = (props) => {
  const classes = useStyles();
  const { card, hideAddBtn, hideRemoveBtn, selectCard, removeCard } = props;
  const cardDetails = CARD_DETAILS;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Card className={`theme-${theme}`} key={card.name} elevation={3}>
          <CardMedia image={card.image} className={classes.media} />
          <CardContent>
            <Typography
              className="cardName"
              gutterBottom
              variant="h5"
              component="h2"
            >
              <center>{card.name}</center>
            </Typography>
            <Divider variant="middle" />
            <List component="nav" aria-label="main mailbox folders">
              {cardDetails &&
                cardDetails.map((detail) => (
                  <React.Fragment key={detail.name}>
                    <ListItem key={detail.name}>
                      <ListItemText
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {detail.text}
                            </Typography>
                            <br />
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textSecondary"
                            >
                              {card[detail.name]}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider component="li" key={`divider-${detail.name}`} />
                  </React.Fragment>
                ))}
            </List>
          </CardContent>
          <CardActions className={classes.actions}>
            <>
              {!hideAddBtn && (
                <Button
                  className="add-btn"
                  variant="contained"
                  size="medium"
                  color="primary"
                  onClick={selectCard}
                >
                  ADD Card
                </Button>
              )}
              {!hideRemoveBtn && (
                <Button
                  className="remove-btn"
                  variant="contained"
                  size="medium"
                  color="default"
                  onClick={removeCard}
                >
                  Remove Card
                </Button>
              )}
            </>
          </CardActions>
        </Card>
      )}
    </ThemeConsumer>
  );
};
export default DisplayCard;
