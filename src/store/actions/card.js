import { createAction} from "@reduxjs/toolkit";

export const onCardSelected = createAction("onCardSelected");
export const resetSelectedCards = createAction("resetSelectedCards");
export const onCardRemoved = createAction("onCardRemoved");

