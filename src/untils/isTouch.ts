/**
 * Returns true on touch devices
 */
export const isTouch = () => "ontouchstart" in window || ((window as any).DocumentTouch
    && document instanceof (window as any).DocumentTouch)
    || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
