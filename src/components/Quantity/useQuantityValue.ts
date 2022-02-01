import { useState, useMemo, useCallback, useEffect, useRef, useContext } from "react";
import { AddToCardActionType } from "../Product/context/actions";
import { ProductContext } from "../Product/context/useProductContext";
import { quantityAnimationDuration, QuantityProps } from "./Quantity";

type AnimationType = "adding" | "removing";

interface UseQuantityValueReturns {
    onChange: (value: number, decrement?: boolean) => void;
    addDisabled?: boolean;
    removeDisabled?: boolean;
    value: number;
    animationType?: AnimationType;
}

/**
 * Quantity onChange logic hook
 * 
 * @param {QuantityProps} params
 * @returns {UseQuantityValueReturns}
 */
export const useQuantityValue = ({
    defaultValue,
    ...restProps
}: QuantityProps): UseQuantityValueReturns => {
    const { state, onBuyClick } = useContext(ProductContext);
    const max = useMemo(() => restProps.max || Infinity, [restProps.max]);
    const min = useMemo(() => restProps.min || 0, [restProps.min]);

    const validate = useCallback((nextValue: number) => (
        nextValue < min ? min : nextValue > max ? max : nextValue
    ), [min, max]);

    const onChange = useCallback((nextValue: number, decrement?: boolean) => {
        const validValue = validate(
            decrement === undefined ? nextValue
                : decrement === true ? state.buyAmount
                    - nextValue
                    : state.buyAmount
                    + nextValue
        );
        onBuyClick(validValue);
    }, [
        validate, state.buyAmount,
    ]);

    const [animationType, setAnimationType] = useState<AnimationType>();

    const prevValue = useRef(state.buyAmount
    );

    useEffect(() => {
        if (state.buyAmount
            !== prevValue.current) {
            setAnimationType(
                state.buyAmount
                    > prevValue.current ? "adding"
                    : "removing"
            );

            setTimeout(() => setAnimationType(undefined), quantityAnimationDuration);

            prevValue.current = state.buyAmount
                ;
        }
    }, [state.buyAmount
    ]);

    return {
        onChange,
        addDisabled: state.buyAmount
            === max,
        removeDisabled: state.buyAmount
            === min,
        value: state.buyAmount
        ,
        animationType,
    };
};
