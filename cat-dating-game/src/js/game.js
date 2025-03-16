// This file serves as the main entry point for the game logic. It initializes the game, manages the game state, and handles transitions between different story frames and dialogues.

class Game {
    constructor() {
        this.player = null;
        this.currentCat = null;
        this.dialogues = [];
        this.currentDialogueIndex = 0;
    }

    init() {
        const startButton = document.getElementById('start-button');
        const nameInput = document.getElementById('player-name');
        const startScreen = document.getElementById('start-screen');
        const dialogueBox = document.getElementById('dialogue-box');
        const choiceButtons = document.getElementById('choice-buttons');

        startButton.addEventListener('click', () => {
            if (nameInput.value.trim()) {
                this.player = new Player(nameInput.value);
                startScreen.style.display = 'none';
                dialogueBox.style.display = 'block';
                choiceButtons.style.display = 'block';
                this.loadCats();
                this.loadDialogues();
                this.startDialogue();
            }
        });
    }

    loadCats() {
        // Load cat data (this can be expanded with actual Cat class instances)
        this.cats = [
            new Cat("Sapphire", "operas", "lavish lifestyle", "money bank"),
            new Cat("Bella", "hunting birds", "not boring", "selling on Ebay"),
            new Cat("Lucile", "watching anime", "hangout buddy", "game designer")
        ];
    }

    loadDialogues() {
        // Load dialogues from dialogues.js
        this.dialogues = dialogues; // Assuming dialogues.js exports an array of dialogue objects
    }

    startDialogue() {
        this.displayDialogue(this.dialogues[this.currentDialogueIndex]);
    }

    displayDialogue(dialogue) {
        const dialogueBox = document.getElementById("dialogue-box");
        dialogueBox.innerHTML = ''; // Clear previous content
        
        // Create and append text
        const textElement = document.createElement('p');
        textElement.textContent = dialogue.text;
        dialogueBox.appendChild(textElement);
        
        // Create and append image if it exists
        if (dialogue.image) {
            const imageElement = document.createElement('img');
            imageElement.src = dialogue.image;
            imageElement.alt = "Character";
            imageElement.classList.add('dialogue-image');
            dialogueBox.appendChild(imageElement);
        }
    
        // Handle choices
        this.displayChoices(dialogue.choices);
    }

    displayChoices(choices) {
        const choiceButtons = document.getElementById("choice-buttons");
        choiceButtons.innerHTML = ""; // Clear previous choices

        choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => this.handleChoice(index);
            choiceButtons.appendChild(button);
        });
    }

    handleChoice(choiceIndex) {
        const currentDialogue = this.dialogues[this.currentDialogueIndex];
        const choice = currentDialogue.choices[choiceIndex];
        
        // Use nextId instead of nextDialogueIndex
        const nextDialogueId = choice.nextId;
        
        // Find the next dialogue by its ID
        const nextDialogueIndex = this.dialogues.findIndex(d => d.id === nextDialogueId);
        
        if (nextDialogueIndex !== -1) {
            this.currentDialogueIndex = nextDialogueIndex;
            this.startDialogue();
        } else {
            console.error(`Could not find dialogue with id ${nextDialogueId}`);
        }
    }
}

// Initialize the game when the window loads
window.onload = () => {
    const game = new Game();
    game.init();
};