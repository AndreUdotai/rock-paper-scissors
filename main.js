let nameInput = document.getElementById('nameInput');
let nameSubmitButton = document.getElementById('nameSubmitButton');
let humanName = document.getElementById('humanName');
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

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let result;

// Logic after clicking the 'continue' button
nameSubmitButton.addEventListener('click', () => {
    // playerName is made to appear in the game page
    humanName.innerText = nameInput.value;

    //makes the landing page to disappear from DOM
    landingPage.classList.add('invisible');

    //makes the game page appear in DOM
    gamePage.classList.remove('invisible');
});

// The function generates a random number between 1 and 3,
// and assigns the corresponding choice to computerChoice
let getComputerChoice = () => {
    // let computerChoice
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

// The function listens for a click event on the humanOptions element to determine the player's choice
// and assigns the corresponding choice to humanChoice
humanOptions.addEventListener('click', function (event) {
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

        getComputerChoice();

        // Makes the resultDisplay and resultInfo elements invisible in the DOM
        resultDisplay.classList.add('invisible');
        resultInfo.classList.add('invisible');

        // Makes shakyHands element appear in the DOM
        shakyHands.classList.remove('invisible');
        // Removes shakyHands element from the DOM after 1s
        removeShakyHands();

        // Makes the humanScoreDisplay and computerScoreDisplay appear in the DOM after 1s
        displayScores();

        // controls the display of choice icons, scores and result messages
        playRound(humanChoice, computerChoice);

        // Makes the result appear after shakyHands disappear from the DOM
        displayResult();
    }
});

// The function plays a round of the game based on the player's choice and the computer's choice
// It updates the score and displays the result message accordingly
// It also checks for win/lose conditions and updates the UI accordingly
let playRound = (playerChoice, computerChoice) => {
    // Assigns playerChoiceDisplay and computerChoiceDisplay icons to the elements' innerHTML
    playerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${playerChoice} fa-flip-horizontal choiceIcons"></i>`;
    computerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${computerChoice} choiceIcons"></i>`;

    if (playerChoice === computerChoice) {
        resultText.innerText = 'Tie Game!';
        resultVariable.innerText = '';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        if (humanScore === 4) {
            gamePage.classList.add('invisible');
            winResultPage.classList.remove('invisible');
            // playerName2.innerText = nameInput.value;
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
            gamePage.classList.add('invisible');
            loseResultPage.classList.remove('invisible');
            // playerName3.innerText = nameInput.value;
        }
        resultText.innerText = `You lost! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
        computerCountNumber.innerText = `${computerScore}`;
    }
    scoresMessages(humanScore, computerScore);
};

//the restart button after winning the game
winRestart.addEventListener('click', () => {
    winResultPage.classList.add('invisible');
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
});

//the restart buffon after losing the game
loseRestart.addEventListener('click', () => {
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
});

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
