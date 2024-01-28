import clsx, { ClassValue } from "clsx";

export const CLASS_PREFIX = 'rmpc'

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
          : className.includes(CLASS_PREFIX) ? className
            : `${CLASS_PREFIX}-${className}`
      )).join(" ");
  }

  return CLASS_PREFIX;
};
