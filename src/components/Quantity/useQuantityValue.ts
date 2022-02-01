import { useState, useMemo, useCallback, useEffect, useRef } from "react";
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
    const [value, setValue] = useState(defaultValue || 0);
    const max = useMemo(() => restProps.max || Infinity, [restProps.max]);
    const min = useMemo(() => restProps.min || 0, [restProps.min]);

    const validate = useCallback((nextValue: number) => (
        nextValue < min ? min : nextValue > max ? max : nextValue
    ), [min, max]);

    const onChange = useCallback((nextValue: number, decrement?: boolean) => {
        const validValue = validate(
            decrement === undefined ? nextValue
                : decrement === true ? value - nextValue
                    : value + nextValue
        );
        setValue(validValue);
        restProps.onChange?.(validValue);
    }, [validate, restProps.onChange, value]);

    const [animationType, setAnimationType] = useState<AnimationType>();

    const prevValue = useRef(value);

    useEffect(() => {
        if (value !== prevValue.current) {
            setAnimationType(
                value > prevValue.current ? "adding"
                    : "removing"
            );

            setTimeout(() => setAnimationType(undefined), quantityAnimationDuration);

            prevValue.current = value;
        }
    }, [value]);

    return {
        onChange,
        addDisabled: value === max,
        removeDisabled: value === min,
        value,
        animationType,
    };
};
