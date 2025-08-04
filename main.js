// main.js
// Entry point: wire up UI, advanceGame logic, and initial deal

import { splitDealDeck } from './js/game.js';
import { playRound } from './js/round.js';
import { updateMessage, updateDeckSize } from './js/ui.js';

// Attach nxt round button
const btn = document.getElementById('next-round-btn');

// Deal and set up decks
const [player1Deck, player2Deck] = splitDealDeck();
updateDeckSize(1, player1Deck.length);
updateDeckSize(2, player2Deck.length);
console.log(`Starting Deck Sizes: ${player1Deck.length}, ${player2Deck.length}`);

/**
 * Advances the game by one round, updates console and disables button on game over.
 */
export function advanceGame() {

  // Check that players are eligible for a round -> play round -> log deck lengths after round
  if (player1Deck.length > 0 && player2Deck.length > 0) {
    // ↓ Will return 1, 2, 0(war)
    let roundResult = playRound(player1Deck, player2Deck);


    if (roundResult === 1) {
        updateMessage("Player 1 Won the Round")
    };
    if (roundResult === 2) {
        updateMessage("Player 2 Won the Round")
    };
    if (roundResult === 0) {
        updateMessage("WAR!!!")
    };


    /* TODO:
        updateDeckLengths(); // import from ui.js
        
    */
    updateDeckSize(1, player1Deck.length);
    updateDeckSize(2, player2Deck.length);
    console.log(`Deck lengths: ${player1Deck.length} vs ${player2Deck.length}`);
    return;
  }

  // check if any players won after the round -> log winners
  if (player1Deck.length === 0) console.log('Player 2 Wins!');
  else console.log('Player 1 Wins!');

  // disable the next round btn if a player won
  if (btn) btn.disabled = true;
}

// Logic for next round btn
if (btn) btn.addEventListener('click', advanceGame);


