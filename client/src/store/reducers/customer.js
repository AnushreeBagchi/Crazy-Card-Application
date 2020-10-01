import { createReducer } from "@reduxjs/toolkit";
import {
  addCustomer
} from "../actions/customer";

const reducer = createReducer(
  {},
  {
    [addCustomer.type]: (customer, action) => {
      const key = Object.keys(action.payload);
      customer[key] = action.payload[key];
    }
  }
);

export default reducer;
