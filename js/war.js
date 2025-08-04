// war.js
// Handles "war" ties by recursively collecting and comparing face-down/up cards

import { compareTwoCards } from './game.js';

/**
 * Conducts a "war" when two cards tie: each player places 3 face-down and 1 face-up.
 * Winner takes all piles; if another tie, recurse.
 */
export function startWar(p1Deck, p2Deck, p1Card, p2Card, acc1 = [], acc2 = []) {
  // build current piles
  const pile1 = [...acc1, p1Card];
  const pile2 = [...acc2, p2Card];

  // if either can't continue, award all piles
  if (p1Deck.length < 4) {
    p2Deck.unshift(...pile1, ...pile2, ...p1Deck.splice(0));
    console.log(
      `Player 1 cannot continue the war → Player 2 collects ${pile1.length + pile2.length + p1Deck.length} cards.`
    );
    return 4; // Player 1 goes broke
  }
  if (p2Deck.length < 4) {
    p1Deck.unshift(...pile1, ...pile2, ...p2Deck.splice(0));
    console.log(
      `Player 2 cannot continue the war → Player 1 collects ${pile1.length + pile2.length + p2Deck.length} cards.`
    );
    return 3; // Player 2 goes broke
  }

  // face-down: take last 3
  pile1.push(...p1Deck.splice(-3));
  pile2.push(...p2Deck.splice(-3));

  // face-up: pop last
  const newP1 = p1Deck.pop();
  const newP2 = p2Deck.pop();
  pile1.push(newP1);
  pile2.push(newP2);

  // compare face-up
  const res = compareTwoCards(newP1, newP2);
  if (res === true) {
    // player 1 wins this war
    p1Deck.unshift(...pile1, ...pile2);
    console.log(
      `Player 1 wins the war and takes ${pile1.length + pile2.length} cards.`
    );
    return 1; // P1 Wins
  } else if (res === false) {
    // player 2 wins this war
    p2Deck.unshift(...pile1, ...pile2);
    console.log(
      `Player 2 wins the war and takes ${pile1.length + pile2.length} cards.`
    );
    return 2; // P2 Wins
  } else {
    // tie → recurse
    console.log(
      `War tied again with ${pile1.length + pile2.length} cards on the line → another war begins.`
    );
    startWar(p1Deck, p2Deck, newP1, newP2, pile1, pile2);
  }
}
