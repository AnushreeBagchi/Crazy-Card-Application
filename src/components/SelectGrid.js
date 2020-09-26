import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../../app/index.css";

function SelectGrid(props) {
  const getTotalCredit = () => {
    return props.selectedCards.reduce((total, card) => {
      console.log(card.credit.trim("£"));
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
              No Card Selected
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
