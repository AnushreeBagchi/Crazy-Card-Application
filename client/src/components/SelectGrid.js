import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../app/index.css";
import { NO_CARD_TEXT } from "../constants/constants";

function SelectGrid(props) {
  const getTotalCredit = () => {
    return props.selectedCards.reduce((total, card) => {
      return (total += Number(card.credit.slice(1)));
    }, 0);
  };
  return (
    <Card className="selected-div">
      <Typography
        className="center header"
        gutterBottom
        variant="h5"
        component="h2"
      >
        Selected Cards
      </Typography>

      <CardActionArea>
        <CardContent>
          {props.selectedCards.length === 0 ? (
            <Typography
              className=" header select-card-div"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {NO_CARD_TEXT}
            </Typography>
          ) : <div className="  header select-card-div" >
            {
            props.selectedCards.map((card) => (
              <div key={card.name} className="flex">
                <Typography variant="body1" color="textSecondary" component="p">
                  {card.name}
                </Typography>
                <Typography
                  className="flex-end"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {card.credit}
                </Typography>
              </div>
            ))
          }
            </div>}
          
          <hr
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <div className="flex ">
            <Typography variant="body1" color="textSecondary" component="p">
              Total
            </Typography>
            <Typography
              className="flex-end"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              £{getTotalCredit()}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SelectGrid;
