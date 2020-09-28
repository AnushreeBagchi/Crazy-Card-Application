import { createReducer } from "@reduxjs/toolkit";
import {
  addCustomer,
  getValidations,
  validateField,
} from "../actions/customer";

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
            income: "Required",
          },
        };
      }
    },
    [validateField.type]: (customer, action) => {
      let data = action.payload;
      let errors = customer.errors;
      switch (data.field) {
        case "income":
          if (isNaN(Number(data.value))) {
            errors.income = "Must be a number";
          } else if (data.value == "") {
            errors.income = "Required";
          } else {
            errors.income = "";
          }
          break;
        case "name":
        case "address":
          errors[data.field] =
            data.value.length < 5 ? "Length must be 5 characters long! " : "";
          break;
        case "city":
        case "postal":
          errors[data.field] =
            data.value.length < 3
              ? "City must be atlest 3 characters long! "
              : "";
          break;
        default:
          break;
      }
    },
  }
);

export default reducer;
