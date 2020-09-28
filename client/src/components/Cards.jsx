import React from "react";
import "../../app/index.css";
import { connect } from "react-redux";
import CrazyCard from "./CrazyCard.jsx";
import { onCardSelected, resetSelectedCards, onCardRemoved } from "../store/actions/card";
import  Button  from '@material-ui/core/Button';
import SelectGrid from "./SelectGrid";


class Cards extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cards: [
        {
          id: 1,
          name: "Student Life Card",
          image: "../src/images/cards/studentLife.png",
          apr: "18.9%",
          balanceOfferDuration: "0 months",
          purchaseOfferDuration: "6 months",
          credit: "£1200",
        },
        {
          id: 2,
          name: "Anywhere Card",
          image: "../src/images/cards/anywhere.png",
          apr: "33.9%",
          balanceOfferDuration: "0 months",
          purchaseOfferDuration: "0 months",
          credit: "£300",
        },
        {
          id: 3,
          name: "Liquid Card",
          image: "../src/images/cards/liquid.png",
          apr: "33.9%",
          balanceOfferDuration: "12 months",
          purchaseOfferDuration: "6 months",
          credit: "£3000",
          minIncome: 16000,
        },
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
  getAvailableCards(customer) {
    let available = ["Anywhere Card"];
    if (customer.income >= 16000) {
      available.push("Liquid Card");
    }
    if (customer.empStatus === "Student") {
      available.push("Student Life Card");
    }
    return this.state.cards.filter((card) => available.includes(card.name));
  }

  goToHome() {
    this.props.resetSelectedCards();
    this.props.history.push({
      pathname: "/"
    });
  }
  handleSelect(card){
    let index = this.props.state.card.indexOf(card);
    if (index === -1){
      this.props.onCardSelected(card);
    }
  }
  handleRemove(card){
    let index = this.props.state.card.indexOf(card);
    if (index !== -1){
      this.props.onCardRemoved(card);
    }
  }

  render() {
    let customer = this.props.location.state
      ? this.props.location.state.customer
      : this.goToHome();
    let availableCards = customer ? this.getAvailableCards(customer) : null;
    return (
      <div className="page">
        <div className="card-div">
          {availableCards &&
            availableCards.map((card) => (
              <CrazyCard
                key={card.name}
                card={card}
                cardDetails={this.state.cardDetails}
                onSelect= {(card) => this.handleSelect(card)}
                onRemove= {card => this.handleRemove(card)}
              />
            ))}
        </div>
          <SelectGrid selectedCards = {this.props.state.card}/>
          <Button size="medium" color="primary" className="home-btn flex-end" onClick={()=>this.goToHome()}>
              Navigate to Home
          </Button>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  onCardSelected : (card) => {
    dispatch(onCardSelected(card));
  },
  onCardRemoved : card => {
    dispatch(onCardRemoved(card));
  },
  resetSelectedCards : (card) => {
    dispatch(resetSelectedCards(card));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
