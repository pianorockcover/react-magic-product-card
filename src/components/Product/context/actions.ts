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
    payload?: {
        inFavourite?: boolean,
    },
}

export const ToggleToCompareActionType = "ToggleToCompareAction";

type ActionAddToCompare = {
    type: typeof ToggleToCompareActionType,
    payload?: {
        inCompare?: boolean,
    },
}

export type Action = ActionAddToCard
    | ActionAddToFavourite
    | ActionAddToCompare;
