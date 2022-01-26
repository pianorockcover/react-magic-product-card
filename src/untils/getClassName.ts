import clsx, { ClassValue } from 'clsx';

/**
 * Adds prefix to className which were composed by clxs
 * 
 * @param {string | undefined} postfix - class postfix
 * @param {ClassValue[]} classes - clsx classes
 * 
 * @returns {string}
 */
export const getClassName = (postfix?: string, ...classes: ClassValue[]) =>
    `${String(classPrefix)}${postfix ? `-${postfix}` : ""} ${clsx(classes)}`;