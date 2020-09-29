import React from "react";
import "../../app/index.css";
import { connect } from "react-redux";
import CrazyCard from "./CrazyCard.jsx";
import {
  onCardSelected,
  resetSelectedCards,
  onCardRemoved,
  fetchCards,
  fetchCardDetails,
  loadSelectedCards,
} from "../store/actions/card";
import Button from "@material-ui/core/Button";
import SelectGrid from "./SelectGrid";
import { HOME_BTN_TEXT,LIQUID_INCOME_RANGE, CARD_DETAILS } from "../constants/constants";

class Cards extends React.Component {
  async componentDidMount() {
    await this.props.fetchCards();
    this.props.loadSelectedCards();
  }

  getAvailableCards(customer) {
    if (this.props.state.card.cards) {
      let available = ["Anywhere Card"];
      if (customer.income >= LIQUID_INCOME_RANGE) {
        available.push("Liquid Card");
      }
      if (customer.empStatus === "Student") {
        available.push("Student Life Card");
      }
      return this.props.state.card.cards.filter((card) =>
        available.includes(card.name)
      );
    }
  }

  goToHome() {
    this.props.resetSelectedCards();
    this.props.history.push({
      pathname: "/",
    });
  }

  render() {
    let customer = this.props.location.state
      ? this.props.location.state.customer
      : this.goToHome();
    let availableCards = customer ? this.getAvailableCards(customer) : null;
    return (
      <>
        <div className="page">
          <div className="card-div">
            {availableCards &&
              availableCards.map((card) => (
                <CrazyCard
                  key={card.name}
                  card={card}
                  cardDetails={CARD_DETAILS}
                  onSelect={(card) => this.props.onCardSelected(card)}
                  onRemove={(card) => this.props.onCardRemoved(card)}
                />
              ))}
          </div>
          {this.props.state.card.selectedCards && (
            <SelectGrid selectedCards={this.props.state.card.selectedCards} />
          )}
          <Button
            size="medium"
            color="primary"
            className="home-btn flex-end"
            onClick={() => this.goToHome()}
          >
            {HOME_BTN_TEXT}
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  onCardSelected: (card) => {
    dispatch(onCardSelected(card));
  },
  onCardRemoved: (card) => {
    dispatch(onCardRemoved(card));
  },
  resetSelectedCards: (card) => {
    dispatch(resetSelectedCards(card));
  },
  fetchCards: () => {
    dispatch(fetchCards());
  },
  fetchCardDetails: () => {
    dispatch(fetchCardDetails());
  },
  loadSelectedCards: () => {
    dispatch(loadSelectedCards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
