import { Action, AddToCardAactionType, AddToCompareActionType, AddToFavouriteActionType, RemoveFromCardActionType, RemoveFromCompareActionType, RemoveFromFavouriteActionType } from "./actions";
import { SimpleProductCardState } from "./state";

export const reducer = (
    state: SimpleProductCardState,
    action: Action,
): SimpleProductCardState => {
    switch (action.type) {
        case AddToCardAactionType:
            return {
                ...state,
                buyAmount: state.buyAmount + action.payload.amount,
            }
        case RemoveFromCardActionType:
            return {
                ...state,
                buyAmount: state.buyAmount - action.payload.amount,
            }
        case AddToFavouriteActionType:
            return {
                ...state,
                inFavourite: true,
            }
        case RemoveFromFavouriteActionType:
            return {
                ...state,
                inFavourite: false,
            }
        case AddToCompareActionType:
            return {
                ...state,
                inCompare: true,
            }
        case RemoveFromCompareActionType:
            return {
                ...state,
                inCompare: false,
            }
        default:
            return state;
    }
}