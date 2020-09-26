import React from "react";
import "../../app/index.css";
import { connect } from "react-redux";
import CrazyCard from "./CrazyCard.jsx";
import { onCardSelected } from "../store/actions/card";

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
    console.log(customer);
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
    this.props.history.push({
      pathname: "/"
    });
  }

  onSelect(card) {
    onCardSelected(card);
  }

  render() {
    debugger;
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
                onSelect= {this.onSelect}
              />
            ))}
        </div>
        <div className="selected-div"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cards: state });
const mapDispatchToProps = (dispatch) => ({
  onCardSelected : (card) => {
    dispatch(onCardSelected(card));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
