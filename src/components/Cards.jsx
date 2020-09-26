import React from "react";
import "../../app/index.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Student Life Card",
          image: "../src/images/cards/studentLife.png",
          apr: "18.9%",
          balanceOfferDuration: "0 months",
          purchaseOfferDuration: "6 months",
          credit: "£1200",
          
        },
        {
          name: "Anywhere Card",
          image: "../src/images/cards/anywhere.png",
          apr: "33.9%",
          balanceOfferDuration: "0 months",
          purchaseOfferDuration: "0 months",
          credit: "£300",
        },
        {
          name: "Liquid Card",
          image: "../src/images/cards/liquid.png",
          apr: "33.9%",
          balanceOfferDuration: "12 months",
          purchaseOfferDuration: "6 months",
          credit: "£3000",
          minIncome : 16000
        }
      ],
      cardDetails: [
        {
          name: "apr",
          text: "Representative % APR (variable)",
        },
        {
          text: "Balance Transfer Offer Duration",
          name: "balanceOfferDuration",
        },
        {
          text: "Purchase Offer Duration",
          name: "purchaseOfferDuration",
        },
        {
          text: "Credit Available",
          name: "credit",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.cards.map((card) => (
          <Card key={card.name} className="card">
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <div className="flex media-div">
            <CardMedia className="media" image={card.image} />
            <CardActionArea>
              <CardContent className="card-content">
                {this.state.cardDetails.map((detail) => (
                  <div key={detail.name} className="content">
                    <Typography variant="body2" color="textSecondary" component="p" >
                      {detail.text}
                    </Typography>
                    <Typography className="detail-value" variant="h6" color="textSecondary" component="p" >
                      {card[detail.name]}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </CardActionArea>
            </div>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </>
    );
  }
}

export default Cards;
