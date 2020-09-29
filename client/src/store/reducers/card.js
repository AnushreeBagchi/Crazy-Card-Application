import { createReducer } from "@reduxjs/toolkit";
import { onCardSelected, resetSelectedCards, onCardRemoved, fetchCardsAction, fetchCardDetailsAction , loadSelectedCards} from "../actions/card";

const reducer = createReducer(
  {},
  {
    [onCardSelected.type] : (card, action) => {
      card.selectedCards.push(action.payload) ;
    },
    [loadSelectedCards.type] : (card, action) => {
      card.selectedCards = []
    },
    [resetSelectedCards.type] : (card, action) => {
      card.length = 0;
    },
    [onCardRemoved.type]: (card, action) => {
       card.selectedCards= card.selectedCards.filter(e=>e.name !== action.payload.name);
    },
    [fetchCardsAction.type] : (card, action) => {
      card.cards = action.payload.cards;
    },
    [fetchCardDetailsAction.type] : (card, action) => {
      card.cardDetails = action.payload.cardDetails;
    }
  }
);

export default reducer;
