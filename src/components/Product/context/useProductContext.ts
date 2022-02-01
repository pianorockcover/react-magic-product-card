import { createContext, Dispatch, useCallback, useMemo, useReducer } from "react";
import { SimpleProductCardProps } from "../../types";
import { Action, AddToCardActionType } from "./actions";
import { reducer } from "./reducer";
import { getInitialState, SimpleProductCardInitialState, SimpleProductCardState } from "./state";

const noop = () => null;

interface ProductContextProps {
    dispatch: Dispatch<Action>;
    state: SimpleProductCardState;
    onBuyClick: (amount: number) => void;
}

export const ProductContext = createContext<ProductContextProps>({
    state: getInitialState({}),
    dispatch: noop,
    onBuyClick: noop,
});

export const useProductContext = (params: SimpleProductCardInitialState) => {
    const [state, dispatch] = useReducer(reducer, getInitialState(params));

    return { state, dispatch };
}