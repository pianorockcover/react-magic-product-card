import { SimpleProductCardProps } from "../../types";

export interface SimpleProductCardState {
    buyAmount: number;
    inFavourite: boolean;
    inCompare: boolean;
}

export type SimpleProductCardInitialState = Pick<
    SimpleProductCardProps,
    'defaultBuyAmount' | 'defaultInCompare' | 'defaultInFavourite'
>;

export const getInitialState = (props: SimpleProductCardInitialState) => ({
    buyAmount: props.defaultBuyAmount || 0,
    inFavourite: props.defaultInFavourite || false,
    inCompare: props.defaultInCompare || false,
});