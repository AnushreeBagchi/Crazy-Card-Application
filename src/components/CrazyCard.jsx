import React from "react";
import "../../app/index.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const CrazyCards = (props) => {
  let card = props.card;
  let cardDetails = props.cardDetails;
  const selectCard = () => {
    props.onSelect(props.card);
  }
  return (
    <>
        <Card key={card.name} className="card">
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            
            <div className="flex media-div">
            <CardMedia className="media" image={card.image} />
            <CardActionArea>
              <CardContent className="card-content">
                {cardDetails.map((detail) => (
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
              <Button size="medium" color="primary" onClick={selectCard}>
                ADD Card
              </Button>
            </CardActions>
          </Card>
      </>
  )
}
export default CrazyCards ;
