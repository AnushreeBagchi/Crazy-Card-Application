import { createReducer } from "@reduxjs/toolkit";

const reducer = createReducer(
  {},
  {
    "onCardSelected" : (card, action) => {
        const key =  Object.keys(action.payload);
        card[key] = action.payload[key];
    }
  }
);

export default reducer;
