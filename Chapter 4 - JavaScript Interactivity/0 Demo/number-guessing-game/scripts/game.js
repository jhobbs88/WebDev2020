const difficultyLevel = sessionStorage.getItem('difficulty-level');
if (!difficultyLevel) {
    location.href = 'index.html';
}

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const responseParagraph = document.getElementById('response');
const guessCountParagraph = document.getElementById('guess-count');
const previousGuessesParagraph = document.getElementById('previous-guesses');
const briefParagraph = document.getElementById('brief');

const previousGuesses = [];
let guessCount = 0;

const maxNumber = 10 ** difficultyLevel;
const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

briefParagraph.textContent = briefParagraph.textContent.replace('_maximum_', maxNumber);

const thinkingString = 'Hmmm...';
let thinkingCharCount = 0;

submitButton.onclick = function submitGuess() {
    disableInput();
    
    responseParagraph.textContent = '';
    thinkingCharCount = 0;
    
    think();
}

function think() {
    responseParagraph.textContent += thinkingString.charAt(thinkingCharCount);
    
    thinkingCharCount++;
    
    if (thinkingCharCount < thinkingString.length) {
        setTimeout(think, 200);
    } else {
        setTimeout(checkGuess, 700);
    }
}
    
function checkGuess() {
    enableInput();
    
    const guess = guessInput.value;
    guessInput.value = '';
    
    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
        responseParagraph.textContent = `You must submit a number between 1 and ${maxNumber}.`;
        return;
    }

    guessCount++;
    
    if (guess == randomNumber) {
        responseParagraph.textContent = `Correct! The number is ${randomNumber}!`;
        guessCountParagraph.textContent = `It took you ${guessCount} guesses!`;
        gameOver();
        return;
    }
    
    let hint;
    if (guess < randomNumber) {
        hint = 'low';
    } else {
        hint = 'high';
    }
    responseParagraph.textContent = `Wrong! ${guess} is too ${hint}.`;
    guessCountParagraph.textContent = `You have ${10 - guessCount} guesses left.`;
    
    previousGuesses.push(guess);
    previousGuessesParagraph.textContent = `Previous guesses: ${previousGuesses.join(', ')}`;
    
    if (guessCount == 10) {
        responseParagraph.textContent += ' It\'s GAME OVER!';
        gameOver();
    }
}

function gameOver() {
    disableInput();
    
    const restart = document.createElement('button');
    restart.textContent = 'Restart';
    restart.onclick = function restartGame() {
        location.href = 'index.html';
    }
    document.body.appendChild(restart);
}

function disableInput() {
    guessInput.disabled = true;
    submitButton.disabled = true;
}

function enableInput() {
    guessInput.disabled = false;
    submitButton.disabled = false;
}