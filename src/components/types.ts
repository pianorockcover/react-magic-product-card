export interface SimpleProductCardProps {
    inline?: boolean;
    defaultBuyAmount?: number;
    defaultInFavourite?: boolean;
    defaultInCompare?: boolean;
}

export type SimpleProductCardColor =
    "default" | "primary" | "contrast" | "warning" | "success";
