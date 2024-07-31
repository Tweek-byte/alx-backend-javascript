/**
 * Checks if the set is complete.
 * @param {Set} set - uniqe items
 * @param {*} array - array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
