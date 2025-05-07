import chalk from 'chalk'; // Importing chalk for colored console output

const cardDeck = [ // Hard Coded Deck of Cards for simplicity

    { name: "Ace Club", value: 1, suit: "Clubs" },
    { name: "2 Club", value: 2, suit: "Clubs" },
    { name: "3 Club", value: 3, suit: "Clubs" },
    { name: "4 Club", value: 4, suit: "Clubs" },
    { name: "5 Club", value: 5, suit: "Clubs" },
    { name: "6 Club", value: 6, suit: "Clubs" },
    { name: "7 Club", value: 7, suit: "Clubs" },
    { name: "8 Club", value: 8, suit: "Clubs" },
    { name: "9 Club", value: 9, suit: "Clubs" },
    { name: "10 Club", value: 10, suit: "Clubs" },
    { name: "Jack Club", value: 11, suit: "Clubs" },
    { name: "Queen Club", value: 12, suit: "Clubs" },
    { name: "King Club", value: 13, suit: "Clubs" },

    { name: "Ace Diamond", value: 1, suit: "Diamonds" },
    { name: "2 Diamond", value: 2, suit: "Diamonds" },
    { name: "3 Diamond", value: 3, suit: "Diamonds" },
    { name: "4 Diamond", value: 4, suit: "Diamonds" },
    { name: "5 Diamond", value: 5, suit: "Diamonds" },
    { name: "6 Diamond", value: 6, suit: "Diamonds" },
    { name: "7 Diamond", value: 7, suit: "Diamonds" },
    { name: "8 Diamond", value: 8, suit: "Diamonds" },
    { name: "9 Diamond", value: 9, suit: "Diamonds" },
    { name: "10 Diamond", value: 10, suit: "Diamonds" },
    { name: "Jack Diamond", value: 11, suit: "Diamonds" },
    { name: "Queen Diamond", value: 12, suit: "Diamonds" },
    { name: "King Diamond", value: 13, suit: "Diamonds" },

    { name: "Ace Heart", value: 1, suit: "Hearts" },
    { name: "2 Heart", value: 2, suit: "Hearts" },
    { name: "3 Heart", value: 3, suit: "Hearts" },
    { name: "4 Heart", value: 4, suit: "Hearts" },
    { name: "5 Heart", value: 5, suit: "Hearts" },
    { name: "6 Heart", value: 6, suit: "Hearts" },
    { name: "7 Heart", value: 7, suit: "Hearts" },
    { name: "8 Heart", value: 8, suit: "Hearts" },
    { name: "9 Heart", value: 9, suit: "Hearts" },
    { name: "10 Heart", value: 10, suit: "Hearts" },
    { name: "Jack Heart", value: 11, suit: "Hearts" },
    { name: "Queen Heart", value: 12, suit: "Hearts" },
    { name: "King Heart", value: 13, suit: "Hearts" },

    { name: "Ace Spade", value: 1, suit: "Spades" },
    { name: "2 Spade", value: 2, suit: "Spades" },
    { name: "3 Spade", value: 3, suit: "Spades" },
    { name: "4 Spade", value: 4, suit: "Spades" },
    { name: "5 Spade", value: 5, suit: "Spades" },
    { name: "6 Spade", value: 6, suit: "Spades" },
    { name: "7 Spade", value: 7, suit: "Spades" },
    { name: "8 Spade", value: 8, suit: "Spades" },
    { name: "9 Spade", value: 9, suit: "Spades" },
    { name: "10 Spade", value: 10, suit: "Spades" },
    { name: "Jack Spade", value: 11, suit: "Spades" },
    { name: "Queen Spade", value: 12, suit: "Spades" },
    { name: "King Spade", value: 13, suit: "Spades" }, 
];

function getRandomNum(max) { // returns a random number between 0 and the length of the cardDeck -1
    return Math.floor(Math.random() * max ); 
};

function compareTwoCards(a, b) { // Compares two Card Objects
    if (a.value > b.value) {
        return true;
    };
    if (a.value < b.value) {
        return false;
    };
    if (a.value === b.value) {
        return null;
    }
};

function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = getRandomNum(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function splitDealDeck() {
    // Create a copy of the cardDeck to avoid modifying the original deck.
    const deckCopy = cardDeck.slice(); // shallow copy of the deck does not modify the original deck withb .slice()
    // Shuffle the deck.
    const shuffledDeck = shuffleDeck(deckCopy);
    // Split the shuffled deck in half.
    const mid = Math.floor(shuffledDeck.length / 2);
    let player1Deck = shuffledDeck.slice(0, mid);
    let player2Deck = shuffledDeck.slice(mid);
    return [player1Deck, player2Deck];
}

function startWar(p1Deck, p2Deck, p1Card, p2Card, acc1 = [], acc2 = []) {

  // build the two piles so far (trigger + any previous cards)
  const pile1 = [...acc1, p1Card];
  const pile2 = [...acc2, p2Card];

  // if someone can’t continue, the other takes all
  if (p1Deck.length < 4) {
    p2Deck.unshift(...pile1, ...pile2, ...p1Deck.splice(0));
    console.log(chalk.redBright("Player 1 does not have enough cards to go to War!"));
    return;
  }
  if (p2Deck.length < 4) {
    p1Deck.unshift(...pile1, ...pile2, ...p2Deck.splice(0));
    console.log(chalk.redBright("Player 2 does not have enough cards to go to War!"));
    return;
  }

  // each puts 3 face-down cards
  pile1.push(...p1Deck.splice(-3));
  pile2.push(...p2Deck.splice(-3));

  // now flip one face-up each, do not add to piles
  const newP1 = p1Deck.pop();
  const newP2 = p2Deck.pop();

  const res = compareTwoCards(newP1, newP2);

  console.log(chalk.redBright("⚔️  WAR IS DECLARED! ⚔️"));
  console.log(chalk.red("Each player MUST draw 3 cards face DOWN and 1 card FACE UP"));
  console.log(chalk.bgBlack(`PLAYER 1 Face Up CARD: ${newP1.name}`));
  console.log(chalk.bgBlack(`PLAYER 2 Face Up CARD: ${newP2.name}`));

  if (res === true) {
    // winner takes entire pile + this face-up

    p1Deck.unshift(...pile1, newP1, ...pile2, newP2);

    console.log(chalk.redBright("Player 1 WINS THE WAR!"));

  } else if (res === false) {


    p2Deck.unshift(...pile1, newP1, ...pile2, newP2);

    console.log(chalk.redBright("Player 2 WINS THE WAR!"));

  } else {
    // tie: recurse, FUTURE NOTE: *don’t* push newP1/newP2 into pile arrays here!
    console.log("\n");
    console.log(chalk.redBright("⚔️ THE CARDS ARE THE SAME ... AGAIN?!?!"));
    startWar(p1Deck, p2Deck, newP1, newP2, pile1, pile2);
  }
}

function playRound (player1Deck, player2Deck) {
    let player1Card = player1Deck.pop(); 
    let player2Card = player2Deck.pop();

    console.log("Player 1 Card: " + player1Card.name);
    console.log("Player 2 Card: " + player2Card.name);

    const result = compareTwoCards(player1Card, player2Card);

    if (result === true) { 
        console.log(chalk.blueBright("Player 1 Wins!"));
        player1Deck.unshift(player2Card);
        player1Deck.unshift(player1Card);
    } else if (result === false) {
        console.log(chalk.blueBright("Player 2 Wins!"));
        player2Deck.unshift(player1Card);
        player2Deck.unshift(player2Card);
    } else { // If the cards are equal, start a war (null)
        startWar(player1Deck, player2Deck, player1Card, player2Card);
    };
};





//__________________________________________________________________________________________________________________________________________


// GAME LOOP


// TESTING THE GAME
console.log("\n");
console.log("________________WAR CARD GAME________________");
console.log("\n");
let playersDecks = splitDealDeck();

let player1Deck = playersDecks[0]; // Player 1 Deck
let player2Deck = playersDecks[1]; // Player 2 Deck

console.log("Player 1 Deck:");
console.log(player1Deck);
console.log("\n");
console.log("\n");
console.log("Player 2 Deck:");
console.log(player2Deck);
console.log("\n");
console.log("Starting the game...");
console.log("\n");
console.log(`Players Starting Deck Lengths: ${player1Deck.length}, ${player2Deck.length}\n`);
console.log("\n");

while (player1Deck.length > 0 && player2Deck.length > 0) {

    playRound(player1Deck, player2Deck);
    console.log(`Player 1 Deck Length: ${chalk.greenBright(player1Deck.length)}`);
    console.log(`Player 2 Deck Length: ${chalk.greenBright(player2Deck.length)}\n`);
};

if (player1Deck.length === 0) {
    console.log(chalk.bgRedBright("Player 2 Wins the Game!"));
}
else if (player2Deck.length === 0) {
    console.log(chalk.bgRedBright("Player 1 Wins the Game!"));
} else {
    console.log("Game Over!, Possible ERROR");
}