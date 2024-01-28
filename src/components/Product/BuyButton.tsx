import React, { FC, useCallback, useContext } from "react";
import { Button } from "../Button/Button";
import { ProductContext } from "./context/useProductContext";
import { pclsx } from "../../utils/pclsx";

/**
 * Add to card Button
 *
 * @returns {JSX.Element}
 */
export const BuyButton: FC = () => {
  const { state, onBuyClick } = useContext(ProductContext);

  const onAddClick = useCallback(() => onBuyClick(1), [onBuyClick]);
  const onRemoveClick = useCallback(() => onBuyClick(0), [onBuyClick]);

  return !state.buyAmount ? (
    <Button color="primary" icon="BagIcon" onClick={onAddClick} className={pclsx("buy")}>
      Buy
    </Button>
  )
    : (
      <Button color="success" icon="CheckIcon" onClick={onRemoveClick}>
        Added
      </Button>
    );
};
