/**
 * A weak map of endpoints and the calls number
 */
export const weakMap = new WeakMap();

/**
 * max calls
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the calls number
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
