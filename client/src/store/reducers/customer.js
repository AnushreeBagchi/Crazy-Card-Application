import { createReducer } from "@reduxjs/toolkit";
import {
  addCustomer,
  getValidations,
} from "../actions/customer";
import {INCOME_REQUIRED_MSG } from "../../constants/constants";

const reducer = createReducer(
  {},
  {
    [addCustomer.type]: (customer, action) => {
      const key = Object.keys(action.payload);
      customer[key] = action.payload[key];
    },
    [getValidations.type]: (customer, action) => {
      if (!customer.errors) {
        return {
          errors: {
            income: INCOME_REQUIRED_MSG,
          },
        };
      }
    }
  }
);

export default reducer;
