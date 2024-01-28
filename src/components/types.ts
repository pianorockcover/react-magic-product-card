import { GalleryProps } from "./Gallery/Gallery";

export interface MagicProductCardProps {
  /**
   * Inline mode
   */
  inline?: boolean;
  /**
   * Click on Buy/Remove button
   */
  onBuyClick?: (add: boolean, amount: number) => void;
  /**
   * Click on Add in favoutite icon button
   */
  onInFavouriteClick?: (value: boolean) => void;
  /**
   * Click on Add in compare icon button
   */
  onInCompareClick?: (value: boolean) => void;
  /**
   * Amount of items to buy
   */
  buyAmount?: number;
  /**
   * Is product in favourite
   */
  inFavourite?: boolean;
  /**
   * Is product in compare
   */
  inCompare?: boolean;
  /**
   * Product labeld, lise "NEW", "BIG SALE", etc.
   */
  labels?: {
    /**
     * Label color
     */
    color?: MagicProductCardColor;
    /**
     * Label title
     */
    title: string;
  }[];
  /**
   * Product images
   */
  images: GalleryProps["items"];
  /**
   * Vendor information
   */
  vendor?: {
    /**
     * Vendor name
     */
    title: string;
    /**
     * Link to vendor's website
     */
    href: string;
  };
  /**
   * Product's catalog category
   */
  category: {
    /**
     * Category name
     */
    title: string;
    /**
     * Link to category page
     */
    href: string;
  };
  /**
   * Product name
   */
  name: string;
  /**
   * Product page link
   */
  href: string;
  /**
   * Product rate
   */
  rate?: number;
  /**
   * Actual price
   */
  price: string;
  /**
   * Old price
   */
  oldPrice?: string;
  /**
   * Product tags, like "free delivery", "not availabale", etc.
   */
  tags?: string[];
  /**
   * Max available items to buy
   */
  maxAmount?: number;
  /**
   * Buy button label
   */
  buyLabel: string
  /**
   * Added text 
   */
  addedLabel: string
}

export type MagicProductCardColor =
  "default" | "primary" | "contrast" | "warning" | "success";
