import { GalleryProps } from "./Gallery/Gallery";

export interface SimpleProductCardProps {
    inline?: boolean;
    onBuyClick?: (add: boolean, amount: number) => void;
    onInFavouriteClick?: (value: boolean) => void;
    onInCompareClick?: (value: boolean) => void;
    buyAmount?: number;
    inFavourite?: boolean;
    inCompare?: boolean;
    labels?: {
        color?: SimpleProductCardColor;
        title: string;
    }[];
    images: GalleryProps["items"];
    vendor?: {
        title: string;
        href: string;
    };
    category: {
        title: string;
        href: string;
    };
    name: string;
    href: string;
    rate?: number;
    price: string;
    oldPrice?: string;
    tags?: string[];
    maxAmount?: number;
}

export type SimpleProductCardColor =
    "default" | "primary" | "contrast" | "warning" | "success";
