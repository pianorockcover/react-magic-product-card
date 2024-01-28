import { Dispatch } from "react";
import {
  Action, AddToCardActionType, ToggleToFavouriteActionType, ToggleToCompareActionType,
} from "./context/actions";
import { useAfterMountEffect } from "../../utils/useAfterMountEffect";
import { MagicProductCardProps } from "../types";

type ExternalValues = Pick<
  MagicProductCardProps,
  "buyAmount" | "inCompare" | "inFavourite"
>;

/**
 * Hook to update product card state by changing
 * buyAmount, inCompare and inFavourite props
 *
 * @param {ExternalValues} props
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
