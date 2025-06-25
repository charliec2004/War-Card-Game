// round.js
// Plays a single round (or triggers a war) of the War card game

import { compareTwoCards } from './game.js';
import { startWar } from './war.js';
import { updateCard } from './ui.js';

/**
 * Plays one round: each player pops a card, compares, awards cards or starts war.
 * @param {Array} deck1
 * @param {Array} deck2
 */

// TODO: IMPLEMENT RETURN VALS, for browser regognition of different states and outcomes.

export function playRound(deck1, deck2) {
  const card1 = deck1.pop();
  const card2 = deck2.pop();
  console.log(`Player 1 Card: ${card1.name}`);
  updateCard(1, card1.cid);
  console.log(`Player 2 Card: ${card2.name}`);
  updateCard(2, card2.cid);

  const result = compareTwoCards(card1, card2);

  if (result === true) {
    console.log('Player 1 Wins!');
    // winner gets both cards, preserving order
    deck1.unshift(card1, card2);

    return 1; // P1 Win

  } else if (result === false) {
    console.log('Player 2 Wins!');
    deck2.unshift(card2, card1);

    return 2; // P2 Win

  } else {
    console.log('WAR!');
    startWar(deck1, deck2, card1, card2);

    return 0; // War
  }
}
