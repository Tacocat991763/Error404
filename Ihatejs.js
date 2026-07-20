console.clear();

console.log(
    "%c🎮 Secret Game Loaded!",
    "font-size: 20px; color: lime;"
);
console.log("Type start() to begin.");

let secretNumber;
let attempts;

function start() {
    console.log("Welcome!");
    startGame();
}

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    console.clear();
    console.log("================================");
    console.log(" NUMBER GUESSER");
    console.log("================================");
    console.log("I picked a number from 1 to 100.");
    console.log("Type guess(number) to make a guess.");
    console.log("Example: guess(42)");
    console.log("Type restart() to start over.");
}

function guess(number) {
    if (typeof number !== "number" || Number.isNaN(number)) {
        console.log("That is not a number. Try something like guess(42).");
        return;
    }

    if (!Number.isInteger(number)) {
        console.log("Whole numbers only, you decimal-loving criminal.");
        return;
    }

    if (number < 1 || number > 100) {
        console.log("The number must be between 1 and 100.");
        return;
    }

    attempts++;

    if (number < secretNumber) {
        console.log(`${number} is too low.`);
    } else if (number > secretNumber) {
        console.log(`${number} is too high.`);
    } else {
        console.log(`Correct! The number was ${secretNumber}.`);
        console.log(`You got it in ${attempts} attempts.`);
        console.log("Type restart() to play again.");
    }
}

function restart() {
    startGame();
}