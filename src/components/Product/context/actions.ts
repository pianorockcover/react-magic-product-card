export const AddToCardAactionType = "AddToCardAction";
export const RemoveFromCardActionType = "RemoveFromCardAction";

type CardActionPayload = {
    payload: {
        amount: number,
    }
}

type ActionAddToCard = CardActionPayload & {
    type: typeof AddToCardAactionType,
}

type ActionRemoveFromCard = CardActionPayload & {
    type: typeof RemoveFromCardActionType,
}

export const AddToFavouriteActionType = "AddToFavouriteAction";
export const RemoveFromFavouriteActionType = "RemoveFromFavouriteAction";

type ActionAddToFavourite = {
    type: typeof AddToFavouriteActionType,
}

type ActionRemoveFromFavourite = {
    type: typeof RemoveFromFavouriteActionType,
}

export const AddToCompareActionType = "AddToCompareAction";
export const RemoveFromCompareActionType = "RemoveFromCompareAction";

type ActionAddToCompare = {
    type: typeof AddToCompareActionType,
}

type ActionRemoveFromCompare = {
    type: typeof RemoveFromCompareActionType,
}

export type Action = ActionAddToCard
    | ActionRemoveFromCard
    | ActionAddToFavourite
    | ActionRemoveFromFavourite
    | ActionAddToCompare
    | ActionRemoveFromCompare;
