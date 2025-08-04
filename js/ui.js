// Functions to change the UI elements seen on screen

let messageBox   = document.getElementById('message');
let p1DeckSizeEl = document.getElementById('p1-deck-size');
let p2DeckSizeEl = document.getElementById('p2-deck-size');
let p1card = document.getElementById('p1-card');
let p2card = document.getElementById('p2-card');

export function updateMessage(newMSG) {
  messageBox.textContent = newMSG;
}

export function updateDeckSize(player, newSize) {
  // pick the right <p> based on player number
  const el = player === 1 ? p1DeckSizeEl : p2DeckSizeEl;
  el.textContent = `${newSize} Cards`;
}

export function updateCard(player, cardCode) {
  // pick the correct playing-card element
  const cardEl = player === 1 ? p1card : p2card;
  // set the 'cid' attribute so the custom element sees the change
  cardEl.setAttribute('cid', cardCode);
};




/*
placeNewCard(card, faceDownUp) {

    create new card element outside the body

    animate it into the position of the current card element with updateCard

    new card element becomes old card element
}

*/