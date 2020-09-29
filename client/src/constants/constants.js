export const DETAILS = {
    textFields: [
      { name: "name", label: "Name", type: "text" },
      { name: "dob", label: "Birthday", type: "date" },
      { name: "address", label: "Address", type: "text" },
      { name: "city", label: "City", type: "text" },
      { name: "postal", label: "Postal", type: "text" },
      { name: "income", label: "Annual Income", type: "text" },
    ],
  }

export const  LIQUID_INCOME_RANGE = 16000;
export const DOB_DEFAULT_VALUE = "2017-05-24";
export const EMP_STATUS_LABEL  = "Employment Status";
export const TITLE_LABEL = "Title";
export const TITLE_DROPDOWN = ["Mr", "Mrs", "Ms"];
export const EMP_STATUS_DROPDOWN = ["Full Time", "Part Time", "Student"];
export const HOME_BTN_TEXT = "Navigate to Home";
export const NO_CARD_TEXT = "No Card Selected";
export const INCOME_ERROR_MSG= "Must be a number";
export const INCOME_REQUIRED_MSG= "Required";
export const MIN_LENGTH_MSG= "Length must be atleast 3 characters long! ";

export const FETCH_CARDS_FAILED_MSG = "Fetch Cards Action Failed";
export const FETCH_CARD_DETAILS_FAILED_MSG = "Fetch Card Details Action Failed";

export const baseURL = "http://localhost:3000";
