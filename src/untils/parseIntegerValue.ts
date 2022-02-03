/**
 * Parses integer value from a string
 *
 * @param {string} value
 * @returns {number}
 */
export const parseIntegerValue = (value: string) => Number((value || "")
  .replace(/[^\d]/g, "") || 0);
