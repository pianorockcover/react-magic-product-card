import { Dispatch } from "react";
import { SimpleProductCardProps } from "../..";
import { useAfterMountEffect } from "../../untils/useAfterMountEffect";
import {
  Action, AddToCardActionType, ToggleToFavouriteActionType, ToggleToCompareActionType,
} from "./context/actions";

type ExternalValues = Pick<
  SimpleProductCardProps,
  "buyAmount" | "inCompare" | "inFavourite"
>;

/**
 * Hook to update product card state by changing
 * buyAmount, inCompare and inFavourite props
 *
 * @param param0
 * @param dispatch
 */
export const useExternalValues = (
  { buyAmount, inCompare, inFavourite }: ExternalValues,
  dispatch: Dispatch<Action>,
) => {
  useAfterMountEffect(() => {
    dispatch({ type: AddToCardActionType, payload: { amount: buyAmount || 0 } });
  }, [buyAmount]);

  useAfterMountEffect(() => {
    dispatch({ type: ToggleToCompareActionType, payload: { inCompare } });
  }, [inCompare]);

  useAfterMountEffect(() => {
    dispatch({ type: ToggleToFavouriteActionType, payload: { inFavourite } });
  }, [inFavourite]);
};
