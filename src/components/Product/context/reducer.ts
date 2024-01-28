import {
  Action, AddToCardActionType, ToggleToCompareActionType, ToggleToFavouriteActionType,
} from "./actions";
import { MagicProductCardState } from "./state";

export const reducer = (
  state: MagicProductCardState,
  action: Action,
): MagicProductCardState => {
  switch (action.type) {
    case AddToCardActionType:
      return {
        ...state,
        buyAmount: action.payload.amount,
      };
    case ToggleToFavouriteActionType:
      return {
        ...state,
        inFavourite: action?.payload ? !!action?.payload.inFavourite
          : !state.inFavourite,
      };
    case ToggleToCompareActionType:
      return {
        ...state,
        inCompare: action?.payload ? !!action?.payload.inCompare
          : !state.inCompare,
      };
    default:
      return state;
  }
};
