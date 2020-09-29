import { createAction} from "@reduxjs/toolkit";

export const addCustomer = createAction("addCustomer");
export const getValidations = createAction("getValidations");
export const validateField = createAction("validateField");

export const hasComponentError = (state) => {
    let returnValue = false;
    let errors = state.customer.errors;
    if (errors) {
      Object.keys(errors).forEach((e) => {
        if (errors[e]) {
          returnValue = true;
        }
      });
    }
    return returnValue;
}
