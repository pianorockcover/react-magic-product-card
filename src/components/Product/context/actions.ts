export const AddToCardActionType = "AddToCardAction";

type ActionAddToCard = {
    type: typeof AddToCardActionType,
    payload: {
        amount: number,
    },
}

export const ToggleToFavouriteActionType = "ToggleToFavouriteAction";

type ActionAddToFavourite = {
    type: typeof ToggleToFavouriteActionType,
}

export const ToggleToCompareActionType = "ToggleToCompareAction";

type ActionAddToCompare = {
    type: typeof ToggleToCompareActionType,
}

export type Action = ActionAddToCard
    | ActionAddToFavourite
    | ActionAddToCompare;
