import React from "react";
import "../../app/index.css";
import { connect } from "react-redux";
import CrazyCard from "./CrazyCard.jsx";
import {
  onCardSelected,
  resetSelectedCards,
  onCardRemoved,
  fetchCards,
  loadSelectedCards,
  fetchAvailableCards
} from "../store/actions/card";
import Button from "@material-ui/core/Button";
import SelectGrid from "./SelectGrid";
import { HOME_BTN_TEXT, CARD_DETAILS } from "../constants/constants";

class Cards extends React.Component {
  async componentDidMount() {
    await this.props.fetchCards();

    let customer = this.props.location.state.customer;
    await this.props.fetchAvailableCards(customer );
    this.props.loadSelectedCards();
  }

  goToHome() {
    this.props.resetSelectedCards();
    this.props.history.push({
      pathname: "/",
    });
  }

  render() {

    let availableCards = this.props.state.card.availableCards ;
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
  loadSelectedCards: () => {
    dispatch(loadSelectedCards());
  },
  fetchAvailableCards: (customer) => {
    dispatch(fetchAvailableCards(customer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
