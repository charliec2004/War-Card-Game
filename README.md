# War Card Game

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A simple browser version of the classic War card game. It uses ES6 modules, bundled with Parcel, and logs game events in the browser console.

## Features

- Shuffles a standard 52-card deck and deals it evenly.
- Standard play: draw cards and the higher card wins.
- Ties trigger a “war”: each player places three cards face-down and one card face-up.
- Modular code organized into ES6 files (`deck.js`, `utils.js`, `game.js`, `war.js`, `round.js`, `main.js`).
- Live development server with hot reload via Parcel.
- Minimal HTML/CSS interface with a single **Play Round** button.
- **Still in development, Game UI will come!**

## Prerequisites

- Node.js v14+ and npm

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd War-Card-Game
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Open the app in your browser at <http://localhost:1234>.

## Production Build

```bash
npm run build
```

Deploy the contents of the `dist/` folder to any static hosting service.

## File Structure

```text
.
├── deck.js       # Deck data (52 cards)
├── utils.js      # Randomness and shuffle helpers
├── game.js       # Core logic (compare cards, deal decks)
├── war.js        # Recursive war logic for ties
├── round.js      # Single-round play logic
├── main.js       # Entry point and UI hookup
├── index.html    # Web page with Play Round button
├── style.css     # Basic layout and centering
├── package.json  # npm scripts and dependencies
└── README.md     # Project overview and instructions
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is released under the MIT License. See the `LICENSE` file for details.
