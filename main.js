// main.js
// Entry point: wire up UI, advanceGame logic, and initial deal

import pc from 'picocolors';
import { splitDealDeck } from './game.js';
import { playRound } from './round.js';

// Deal and set up decks
const [player1Deck, player2Deck] = splitDealDeck();
console.log(`Starting Deck Sizes: ${player1Deck.length}, ${player2Deck.length}`);

/**
 * Advances the game by one round, updates console and disables button on game over.
 */
export function advanceGame() {
  if (player1Deck.length > 0 && player2Deck.length > 0) {
    playRound(player1Deck, player2Deck);
    console.log(`Deck lengths: ${pc.greenBright(player1Deck.length)} vs ${pc.greenBright(player2Deck.length)}`);
    return;
  }
  // game over
  if (player1Deck.length === 0) console.log(pc.bgRedBright('Player 2 Wins!'));
  else console.log(pc.bgRedBright('Player 1 Wins!'));

  // disable button
  const btn = document.getElementById('BTN');
  if (btn) btn.disabled = true;
}

// Attach listener
const btn = document.getElementById('BTN');
if (btn) btn.addEventListener('click', advanceGame);
