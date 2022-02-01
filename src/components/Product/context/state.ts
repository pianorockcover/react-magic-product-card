import { SimpleProductCardProps } from "../../types";

export interface SimpleProductCardState {
    buyAmount: number;
    inFavourite: boolean;
    inCompare: boolean;
}

export type SimpleProductCardInitialState = Pick<
    SimpleProductCardProps,
    'buyAmount' | 'inCompare' | 'inFavourite'
>;

export const getInitialState = (props: SimpleProductCardInitialState) => ({
    buyAmount: props.buyAmount || 0,
    inFavourite: props.inFavourite || false,
    inCompare: props.inCompare || false,
});