import { createReducer } from "@reduxjs/toolkit";
import {
  addCustomer,
  getValidations,
  validateField,
} from "../actions/customer";
import {INCOME_ERROR_MSG,INCOME_REQUIRED_MSG, MIN_LENGTH_MSG } from "../../constants/constants";

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
    },
    [validateField.type]: (customer, action) => {
      let data = action.payload;
      let errors = customer.errors;
      // switch (data.field) {
      //   case "income":
      //     if (isNaN(Number(data.value))) {
      //       errors.income = INCOME_ERROR_MSG;
      //     } else if (data.value == "") {
      //       errors.income = INCOME_REQUIRED_MSG;
      //     } else {
      //       errors.income = "";
      //     }
      //     break;
      //   case "name":
      //   case "address":
      //     errors[data.field] =
      //       data.value.length < 5 ? MIN_LENGTH_MSG : "";
      //     break;
      //   case "city":
      //   case "postal":
      //     errors[data.field] =
      //       data.value.length < 3
      //         ? MIN_LENGTH_MSG
      //         : "";
      //     break;
      //   default:
      //     break;
      // }
    },
  }
);

export default reducer;
