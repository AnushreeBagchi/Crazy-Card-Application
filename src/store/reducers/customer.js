import { createReducer } from "@reduxjs/toolkit";

const reducer = createReducer(
  {},
  {
    "addCustomer" : (customer, action) => {
        const key =  Object.keys(action.payload);
        customer[key] = action.payload[key];
    }
  }
);

export default reducer;
