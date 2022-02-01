import React, { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import { AngleIcon } from "../../icons/AngleIcon";
import { parseIntegerValue } from "../../untils/parseIntegerValue";
import { pclsx } from "../../untils/pclsx";
import { IconButton } from "../IconButton/IconButton";
import "./style.less";
import { useQuantityValue } from "./useQuantityValue";

export const quantityAnimationDuration = 600;

export interface QuantityProps {
    defaultValue?: number;
    max?: number;
    min?: number;
}

/**
 * Amount counter
 * 
 * @param {QuantityProps} props
 * @returns {JSX.element} 
 */
export const Quantity: FC<QuantityProps> = ({
    ...restProps
}) => {
    const {
        onChange,
        addDisabled,
        removeDisabled,
        value,
        animationType,
    } = useQuantityValue(restProps);

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => (
        onChange(parseIntegerValue(e.target.value))
    ), [onChange]);

    const onButtonClick = useCallback((decrement?: boolean) => () => (
        onChange(1, decrement)
    ), [onChange]);

    const arrowStyle = useMemo(() => ({
        animationDuration: `${quantityAnimationDuration}ms`,
    }), []);

    return (
        <div className={pclsx("quantity", {
            [`quantity-${animationType}`]: animationType,
        })}>
            <IconButton
                icon="MinusIcon"
                hoverColor="contrast"
                disabled={removeDisabled}
                onClick={onButtonClick(true)}
            />
            <input
                className={pclsx("quantity-amount")}
                value={value}
                onChange={onInputChange}
            />
            <IconButton
                icon="PlusIcon"
                hoverColor="success"
                disabled={addDisabled}
                onClick={onButtonClick(false)}
            />
            <AngleIcon
                className={pclsx("quantity-arrow")}
                style={arrowStyle}
            />
        </div>
    );
};
