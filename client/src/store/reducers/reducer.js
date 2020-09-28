import { combineReducers } from "redux";
import customerReducer from "./customer";
import cardReducer from "./card";


export default combineReducers({
    customer : customerReducer,
    card : cardReducer
});