import { createContext, Dispatch, useMemo, useReducer } from "react";
import { SimpleProductCardProps } from "../../types";
import { Action } from "./actions";
import { reducer } from "./reducer";
import { getInitialState, SimpleProductCardInitialState, SimpleProductCardState } from "./state";

interface ProductContextProps {
    dispatch: Dispatch<Action>;
    state: SimpleProductCardState;
}

export const ProductContext = createContext<ProductContextProps>({
    state: getInitialState({}),
    dispatch: () => null,
});

export const useProductContext = (params: SimpleProductCardInitialState) => {
    const [state, dispatch] = useReducer(reducer, getInitialState(params));

    return { state, dispatch };
}