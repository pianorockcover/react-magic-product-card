import { useEffect, useRef } from "react";

export const useAfterMountEffect = (
    effect: () => void,
    deps: any[],
) => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;

            return;
        }

        effect();
    }, deps);
}