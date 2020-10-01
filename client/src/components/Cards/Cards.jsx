import React from "react";
import { connect } from "react-redux";
import CrazyCard from "../CrazyCard/CrazyCard.jsx";
import SelectGrid from "../SelectedGrid/SelectGrid.jsx";
import {
  onCardSelected,
  resetSelectedCards,
  onCardRemoved,
  fetchCards,
  loadSelectedCards,
  fetchAvailableCards,
} from "../../store/actions/card";

import { Grid, Container } from "@material-ui/core";
import PropTypes from "prop-types";

class Cards extends React.Component {
  async componentDidMount() {
    await this.props.fetchCards();
    let customer =  this.props.location.state.customer;
    await this.props.fetchAvailableCards(customer);
    this.props.loadSelectedCards();
  }

  goToHome = ()  => {
    this.props.resetSelectedCards();
    this.props.history.push({
      pathname: "/",
    });
  }

  render() {
    let availableCards = this.props.state.card.availableCards;
    return (
      <Container>
        <Grid container direction="row" spacing={4}>
          <Grid item lg={8} md={6} sm={12} xs={12} >
            <Grid container direction="row" spacing={4}>
              {availableCards &&
                availableCards.map((card) => (
                  <Grid key={card.name} item lg={5}>
                    <CrazyCard
                      key={card.name}
                      card={card}
                      
                      onSelect={(card) => this.props.onCardSelected(card)}
                      onRemove={(card) => this.props.onCardRemoved(card)}
                    />
                  </Grid>
                ))}
            </Grid>
            
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            {this.props.state.card.selectedCards && (
              <SelectGrid selectedCards={this.props.state.card.selectedCards} reset={this.goToHome}/>
            )}
     
          </Grid>
        </Grid>
      </Container>
    );
  }
}
Cards.propTypes = {
  fetchAvailableCards : PropTypes.func, 
  fetchCards : PropTypes.func,
  loadSelectedCards : PropTypes.func,
  resetSelectedCards:PropTypes.func,
  onCardRemoved:PropTypes.func,
  onCardSelected: PropTypes.func
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
  },
});

export {Cards};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
