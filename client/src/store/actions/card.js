import { createAction} from "@reduxjs/toolkit";
import { FETCH_CARDS_FAILED_MSG , FETCH_CARD_DETAILS_FAILED_MSG} from "../../constants/constants"

export const onCardSelected = createAction("onCardSelected");
export const resetSelectedCards = createAction("resetSelectedCards");
export const onCardRemoved = createAction("onCardRemoved");
export const fetchCardsAction = createAction("fetchCards");
export const fetchCardDetailsAction = createAction("fetchCardDetails");
export const loadSelectedCards = createAction("loadSelectedCards");


export const fetchCards = () => async (dispatch) => {
    return dispatch({
      type: "apiCallBegan",
      payload: {
        url : "/cards",
        onSuccess: fetchCardsAction.type,
        onError: FETCH_CARDS_FAILED_MSG
      }
    })
};

export const fetchCardDetails = () => async (dispatch) => {
    return dispatch({
      type: "apiCallBegan",
      payload: {
        url : "/cardDetails",
        onSuccess: fetchCardDetailsAction.type,
        onError: FETCH_CARD_DETAILS_FAILED_MSG
      }
    })
};


