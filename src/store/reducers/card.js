import { createReducer } from "@reduxjs/toolkit";
import { onCardSelected, resetSelectedCards, onCardRemoved } from "../actions/card";

const reducer = createReducer(
  [],
  {
    [onCardSelected.type] : (card, action) => {
      card.push( action.payload);
    },
    [resetSelectedCards.type] : (card, action) => {
      card.length = 0;
    },
    [onCardRemoved.type]: (card, action) => {
      return card.filter(e=>e.name !== action.payload.name);
      
    }
  }
);

export default reducer;
