import { useEffect, useRef } from "react";

/**
 * Effect hook which miss the first mount
 *
 * @param {() => void} effect - callback
 * @param {any[]} deps - dapandencies
 */
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
};
