import {
  createContext, Dispatch, useReducer,
} from "react";
import {
  Action,
} from "./actions";
import { reducer } from "./reducer";
import { getInitialState, MagicProductCardInitialState, MagicProductCardState } from "./state";

const noop = () => null;

interface ProductContextProps {
  dispatch: Dispatch<Action>;
  state: MagicProductCardState;
  onBuyClick: (amount: number) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  state: getInitialState({}),
  dispatch: noop,
  onBuyClick: noop,
});

export const useProductContext = ({
  buyAmount,
  inCompare,
  inFavourite,
}: MagicProductCardInitialState) => {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState({ buyAmount, inCompare, inFavourite }),
  );

  return { state, dispatch };
};
