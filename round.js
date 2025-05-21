// round.js
// Plays a single round (or triggers a war) of the War card game

import { compareTwoCards } from './game.js';
import { startWar } from './war.js';

/**
 * Plays one round: each player pops a card, compares, awards cards or starts war.
 * @param {Array} deck1
 * @param {Array} deck2
 */
export function playRound(deck1, deck2) {
  const card1 = deck1.pop();
  const card2 = deck2.pop();
  console.log(`Player 1 Card: ${card1.name}`);
  console.log(`Player 2 Card: ${card2.name}`);

  const result = compareTwoCards(card1, card2);
  if (result === true) {
    console.log('Player 1 Wins!');
    // winner gets both cards, preserving order
    deck1.unshift(card1, card2);

  } else if (result === false) {
    console.log('Player 2 Wins!');
    deck2.unshift(card2, card1);

  } else {
    console.log('WAR!');
    startWar(deck1, deck2, card1, card2);
  }
}
