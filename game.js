// game.js
// Core game mechanic functions: compare cards and initial deal

import { cardDeck } from './deck.js';
import { shuffleDeck } from './utils.js';

/**
 * Compares two card objects by value.
 * @param {{value:number}} a
 * @param {{value:number}} b
 * @returns {boolean|null} true if a>b, false if a<b, null if equal
 */
export function compareTwoCards(a, b) {
  if (a.value > b.value) return true;
  if (a.value < b.value) return false;
  return null;  // tie
}

/**
 * Shuffles the full deck and splits into two player decks.
 * @returns {[Array,Array]} [player1Deck, player2Deck]
 */
export function splitDealDeck() {
  // clone original deck so we don't mutate it
  const deckCopy = [...cardDeck];
  const shuffled = shuffleDeck(deckCopy);
  const mid = Math.floor(shuffled.length / 2);
  const player1Deck = shuffled.slice(0, mid);
  const player2Deck = shuffled.slice(mid);
  return [player1Deck, player2Deck];
}
