import clsx, { ClassValue } from "clsx";

export const classPrefix = "spc-product";

/**
 * Adds prefix to className which were composed by clxs
 *
 * @param {ClassValue[]} classes - clsx classes
 *
 * @returns {string}
 */
export const pclsx = (...classes: ClassValue[]) => {
  if (classes?.length) {
    return clsx(classes).split(" ")
      .map((className) => (
        !className ? ""
          : className.includes(classPrefix) ? className
            : `${classPrefix}-${className}`
      )).join(" ");
  }

  return classPrefix;
};
