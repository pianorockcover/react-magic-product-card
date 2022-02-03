import React, { FC, useCallback, useMemo } from "react";
import { SimpleProductCardProps } from "../types";
import { classPrefix, pclsx } from "../../untils/pclsx";
import { Label } from "../Label/Label";
import { Tag } from "../Tag/Tag";
import { Rate } from "../Rate/Rate";
import { Anchor } from "../Anchor/Anchor";
import { Gallery } from "../Gallery/Gallery";
import { Quantity } from "../Quantity/Quantity";
import { ProductContext, useProductContext } from "./context/useProductContext";
import { SideActions } from "./SideAction";
import { AddToCardActionType } from "./context/actions";
import { BuyButton } from "./BuyButton";
import "./style/index.less";
import { Price } from "../Price/Price";
import { useExternalValues } from "./useExternalValues";

/**
 * Product card
 *
 * @param {SimpleProductCardProps} props
 * @returns {JSX.Element}
 */
export const SimpleProductCard: FC<SimpleProductCardProps> = ({
  buyAmount,
  category,
  href,
  images,
  inCompare,
  inFavourite,
  inline,
  labels,
  maxAmount,
  name,
  oldPrice,
  price,
  rate,
  onInFavouriteClick,
  onInCompareClick,
  tags,
  vendor,
  ...restProps
}) => {
  const { state, dispatch } = useProductContext({
    buyAmount,
    inCompare,
    inFavourite,
  });

  const onBuyClick = useCallback((amount: number) => {
    dispatch({ type: AddToCardActionType, payload: { amount } });
    restProps.onBuyClick?.(amount > 0, amount);
  }, [restProps.onBuyClick]);

  const providerValue = useMemo(() => ({
    state,
    dispatch,
    onBuyClick,
  }), [state, dispatch, onBuyClick]);

  useExternalValues({
    inCompare,
    inFavourite,
    buyAmount,
  }, dispatch);

  return (
    <ProductContext.Provider value={providerValue}>
      <div className={pclsx(classPrefix, {
        inline,
      })}
      >
        <div className={pclsx("content")}>
          {labels && (
            <div className={pclsx("labels")}>
              {labels.map(({ color, title }, i) => (
                <Label color={color} key={i}>
                  {title}
                </Label>
              ))}
            </div>
          )}
          <SideActions
            onInCompareClick={onInCompareClick}
            onInFavouriteClick={onInFavouriteClick}
          />
          <Gallery items={images} />
          <div className={pclsx("details")}>
            <div className={pclsx("top")}>
              <Anchor
                className={pclsx("category")}
                to={category.href}
                color="default"
                title={category.title}
              >
                {category.title}
              </Anchor>
              <div className={pclsx("by")}>
                by
                {vendor && (
                  <Anchor
                    className={pclsx("by-link")}
                    to={vendor.href}
                    title={vendor.title}
                  >
                    {vendor.title}
                  </Anchor>
                )}
              </div>
            </div>
            <Anchor
              className={pclsx("title")}
              to={href}
              color="default"
            >
              {name}
            </Anchor>
            {rate && <Rate amount={rate} />}
            <Price value={price} oldValue={oldPrice} />
            {tags && (
              <div className={pclsx("tags")}>
                {tags.map((tag, i) => (
                  <Tag key={i}>
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
            <div className={pclsx("buttons")}>
              <BuyButton />
              <Quantity defaultValue={state.buyAmount} max={maxAmount} />
            </div>
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
};
