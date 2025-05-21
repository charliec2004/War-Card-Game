// utils.js
// Utility functions for randomness and shuffling

/**
 * Returns a random integer in [0, max)
 * @param {number} max
 * @returns {number}
 */
export function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Performs an in-place Fisher-Yates shuffle on the provided array.
 * @param {Array} array
 * @returns {Array}
 */
export function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomNum(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
