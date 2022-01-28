import clsx, { ClassValue } from "clsx";

/**
 * Adds prefix to className which were composed by clxs
 * 
 * @param {ClassValue[]} classes - clsx classes
 * 
 * @returns {string}
 */
export const getClassName = (...classes: ClassValue[]) => {
    if (classes?.length) {
        return clsx(classes).split(" ")
            .map((className) => `${classPrefix}-${className}`).join(" ");
    }

    return classPrefix;
}