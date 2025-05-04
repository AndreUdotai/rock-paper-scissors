let nameInput = document.getElementById('nameInput');
let nameSubmitButton = document.getElementById('nameSubmitButton');
let humanNameDisplay = document.getElementById('humanNameDisplay');
let gamePage = document.getElementById('gamePage');
let landingPage = document.getElementById('landingPage');
let nameAlert = document.getElementById('nameAlert');
let resultText = document.getElementById('resultText');
let resultVariable = document.getElementById('resultVariable');
let humanScoreDisplay = document.getElementById('humanScoreDisplay');
let computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerCountNumber = document.getElementById('playerCountNumber');
let computerCountNumber = document.getElementById('computerCountNumber');
let winResultPage = document.getElementById('winResultPage');
let loseResultPage = document.getElementById('loseResultPage');
let winRestart = document.getElementById('winRestart');
let loseRestart = document.getElementById('loseRestart');
let shakyHands = document.getElementById('shakyHands');
let resultDisplay = document.getElementById('resultDisplay');
let resultInfo = document.getElementById('resultInfo');
let humanOptions = document.getElementById('humanOptions');
let playerChoiceDisplay = document.getElementById('playerChoice');
let computerChoiceDisplay = document.getElementById('computerChoice');

// Variables to store human and computer choices and scores
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let result;

// The function handles human name display and game page transition
nameSubmitButton.addEventListener('click', () => {
    if (nameInput.value === '') {
        humanNameDisplay.innerText = 'Anon';
    } else {
        humanNameDisplay.innerText = nameInput.value;
    }
    //Hide landing page from view
    landingPage.classList.add('invisible');
    //Display game page
    gamePage.classList.remove('invisible');
});

// The function generates a random number between 1 and 3 for computer choice
let getComputerChoice = () => {
    let randomNumberBetween1and3 = Math.floor(Math.random() * 3 + 1);
    if (randomNumberBetween1and3 === 1) {
        computerChoice = 'rock';
    } else if (randomNumberBetween1and3 === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
};

// The function gets the human choice based on the clicked element
let getHumanChoice = () => {
    // Check if the clicked element is one of the choice icons
    const clickedElement = event.target;
    if (clickedElement.classList.contains('choiceIcons')) {
        // Determine which option was clicked based on ID
        let choice;
        switch (clickedElement.id) {
            case 'rockOption':
                choice = 'rock';
                break;
            case 'paperOption':
                choice = 'paper';
                break;
            case 'scissorsOption':
                choice = 'scissors';
                break;
            default:
                choice = 'unknown';
        }

        humanChoice = choice;
    }
    return humanChoice;
};

// The function handles the click event on human options
let handleHumanOptionsClick = (event) => {
    getHumanChoice();
    getComputerChoice();

    // controls the display of choice icons, scores and result messages
    playRound(humanChoice, computerChoice);
};

// The function listens for a click event on the humanOptions element to run the game
humanOptions.addEventListener('click', handleHumanOptionsClick);

// The function plays a round of the game and updates the score and displays the result message accordingly
let playRound = (playerChoice, computerChoice) => {
    // Assigns playerChoiceDisplay and computerChoiceDisplay icons to the elements' innerHTML
    playerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${playerChoice} fa-flip-horizontal choiceIcons"></i>`;
    computerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${computerChoice} choiceIcons"></i>`;

    if (playerChoice === computerChoice) {
        resultText.innerText = 'Tie Game!';
        resultVariable.innerText = '';
        playerCountNumber.innerText = `${humanScore}`;
        computerCountNumber.innerText = `${computerScore}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        if (humanScore === 4) {
            setTimeout(function () {
                gamePage.classList.add('invisible');
                loseResultPage.classList.remove('invisible');
            }, 2000);
        }
        resultText.innerText = `You won! ${playerChoice} beats ${computerChoice}`;
        humanScore++;
        playerCountNumber.innerText = `${humanScore}`;
    } else if (
        (computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ) {
        if (computerScore === 4) {
            setTimeout(function () {
                gamePage.classList.add('invisible');
                loseResultPage.classList.remove('invisible');
            }, 2000);
        }
        resultText.innerText = `You lost! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
        computerCountNumber.innerText = `${computerScore}`;
    }
    scoresMessages(humanScore, computerScore);
    // Makes the resultDisplay and resultInfo elements invisible in the DOM
    resultDisplay.classList.add('invisible');
    resultInfo.classList.add('invisible');

    // Makes shakyHands element appear in the DOM
    shakyHands.classList.remove('invisible');

    // Removes shakyHands element from the DOM after 1s
    removeShakyHands();

    // Makes the humanScoreDisplay and computerScoreDisplay appear in the DOM after 1s
    displayScores();

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
};

// Function to reset the game state
function resetGame() {
    winResultPage.classList.add('invisible');
    loseResultPage.classList.add('invisible');
    gamePage.classList.remove('invisible');
    playerChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultText.innerText = '';
    humanScore = 0;
    computerScore = 0;
    playerCountNumber.innerText = '';
    computerCountNumber.innerText = '';
    humanScoreDisplay.classList.add('invisible');
    computerScoreDisplay.classList.add('invisible');
    resultVariable.innerText = '';
}

// Event listeners for restart buttons
winRestart.addEventListener('click', resetGame);
loseRestart.addEventListener('click', resetGame);

// the variable messages
let scoresMessages = (playerScore, computerScore) => {
    resultVariable.innerText = '';
    if (playerScore === 1 && computerScore === 0) {
        resultVariable.innerText = 'Lets go!!!';
    } else if (playerScore - computerScore === 2) {
        resultVariable.innerText = "You're pretty good at this.";
    } else if (computerScore === 1 && playerScore === 0) {
        resultVariable.innerText = 'Oh no.';
    } else if (computerScore === 2 && computerScore > playerScore) {
        resultVariable.innerText = 'Arghh. Give it another shot';
    } else if (playerScore === 3 && playerScore > computerScore) {
        resultVariable.innerText = "You're proving humans are better.";
    } else if (playerScore === computerScore && playerScore > 2) {
        resultVariable.innerText = "It's ok. You got this.";
    } else if (computerScore === 4) {
        resultVariable.innerText =
            "Oh no. It's match point. Don't let us down.";
    } else if (playerScore === 4) {
        resultVariable.innerText = 'One more and you are a hero.';
    } else if (playerScore === computerScore) {
        resultVariable.innerText = '';
    } else {
        resultVariable.innerText = 'You can do this!';
    }
};

// Removes shakyHands element from the DOM after 1s
let removeShakyHands = () => {
    setTimeout(() => {
        shakyHands.classList.add('invisible');
    }, 1000);
};

// Makes humanScoreDisplay and computerScoreDisplay elements appear on the DOM after 1s
let displayScores = () => {
    setTimeout(() => {
        humanScoreDisplay.classList.remove('invisible');
        computerScoreDisplay.classList.remove('invisible');
    }, 1000);
};

// Makes the result appear after 1s
let displayResult = () => {
    setTimeout(() => {
        resultDisplay.classList.remove('invisible');
        resultInfo.classList.remove('invisible');
    }, 1000);
};
