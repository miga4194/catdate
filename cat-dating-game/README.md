# Cat Dating Game

Welcome to the Cat Dating Game! This is a web-based interactive game where players can engage with various cat characters, make choices, and navigate through different story frames.

## Project Structure

```
cat-dating-game
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.css        # CSS styles for the game
│   ├── js
│   │   ├── game.js             # Main game logic
│   │   ├── Cat.js              # Cat class definition
│   │   ├── Player.js           # Player class definition
│   │   └── dialogues.js        # Dialogue objects for the game
│   ├── index.html              # Main HTML file
│   └── components
│       ├── DialogueBox.js      # Component for displaying dialogue
│       └── ChoiceButtons.js     # Component for choice buttons
├── package.json                 # npm configuration file
└── README.md                    # Project documentation
```

## Getting Started

To run the Cat Dating Game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cat-dating-game
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Open the game**:
   Open `src/index.html` in your web browser to start playing.

## Features

- Interactive dialogues with various cat characters.
- Choices that affect the outcome of the game.
- Dynamic updates to the game state based on player decisions.

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.