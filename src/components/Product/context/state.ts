import { MagicProductCardProps } from "../../types";

export interface MagicProductCardState {
  buyAmount: number;
  inFavourite: boolean;
  inCompare: boolean;
}

export type MagicProductCardInitialState = Pick<
  MagicProductCardProps,
  "buyAmount" | "inCompare" | "inFavourite"
>;

export const getInitialState = (props: MagicProductCardInitialState) => ({
  buyAmount: props.buyAmount || 0,
  inFavourite: props.inFavourite || false,
  inCompare: props.inCompare || false,
});
