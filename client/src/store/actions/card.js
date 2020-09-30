import { createAction} from "@reduxjs/toolkit";
import { FETCH_CARDS_FAILED_MSG ,  FETCH_AVAILABLE_CARDS_FAILED_MSG} from "../../constants/constants"

export const onCardSelected = createAction("onCardSelected");
export const resetSelectedCards = createAction("resetSelectedCards");
export const onCardRemoved = createAction("onCardRemoved");
export const fetchCardsAction = createAction("fetchCards");
export const fetchCardDetailsAction = createAction("fetchCardDetails");
export const loadSelectedCards = createAction("loadSelectedCards");
export const fetchAvailableCardsAction = createAction("fetchAvailableCards");


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

export const fetchAvailableCards = (customer) => async (dispatch) => {
    return dispatch({
      type: "apiCallBegan",
      payload: {
        url : "/availableCards",
        method: "POST",
        data : customer,
        onSuccess: fetchAvailableCardsAction.type,
        onError: FETCH_AVAILABLE_CARDS_FAILED_MSG
      }
    })
};


