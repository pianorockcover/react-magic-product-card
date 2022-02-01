export interface SimpleProductCardProps {
    inline?: boolean;
    defaultBuyAmount?: number;
    defaultInFavourite?: boolean;
    defaultInCompare?: boolean;
    onBuyClick?: (add: boolean, amount: number) => void;
    buyAmount?: number;
}

export type SimpleProductCardColor =
    "default" | "primary" | "contrast" | "warning" | "success";
