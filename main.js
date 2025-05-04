let nameInput = document.getElementById('nameInput');
let nameSubmitButton = document.getElementById('nameSubmitButton');
let playerName1 = document.getElementById('playerName1');
let playerName2 = document.getElementById('playerName2');
let playerName3 = document.getElementById('playerName3');
let gamePage = document.getElementById('gamePage');
let landingPage = document.getElementById('landingPage');
let nameAlert = document.getElementById('nameAlert');
let resultText = document.getElementById('resultText');
let resultVariable = document.getElementById('resultVariable');
let playerScores = document.getElementById('playerScores');
let computerScores = document.getElementById('computerScores');
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
// let rockOption          = document.getElementById('rockOption');
// let paperOption         = document.getElementById('paperOption');
// let scissorsOption      = document.getElementById('scissorsOption');

let playerChoiceDisplay = document.getElementById('playerChoice');
let computerChoiceDisplay = document.getElementById('computerChoice');

let humanChoice;
let computerChoice;
let result;
let playerCounter = 0;
let computerCounter = 0;

// Logic after clicking the 'continue' button
nameSubmitButton.addEventListener('click', () => {
    // playerName is made to appear in the game page
    playerName1.innerText = nameInput.value;

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
        console.log('Human choice is: ' + humanChoice);
    }
});

// When player chooses Rock icon
rockOption.addEventListener('click', () => {
    // assigns the 'Rock' to playerChoice variable
    playerChoice = 'rock';

    // getHumanChoice();

    getComputerChoice();

    // Makes the resultDisplay and resultInfo elements invisible in the DOM
    resultDisplay.classList.add('invisible');
    resultInfo.classList.add('invisible');

    // Makes shakyHands element appear in the DOM
    shakyHands.classList.remove('invisible');
    // Removes shakyHands element from the DOM after 1s
    removeShakyHands();

    // Makes the playerScores and computerScores appear in the DOM after 1s
    displayScores();

    // controls the display of choice icons, scores and result messages
    playRound(playerChoice, computerChoice);

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
});

// When player chooses paper icon
paperOption.addEventListener('click', () => {
    // assigns the 'Paper' to playerChoice variable
    playerChoice = 'paper';

    getComputerChoice();

    // Makes the resultDisplay and resultInfo elements invisible in the DOM
    resultDisplay.classList.add('invisible');
    resultInfo.classList.add('invisible');

    // Makes shakyHands element appear in the DOM
    shakyHands.classList.remove('invisible');
    // Removes shakyHands element from the DOM after 1s
    removeShakyHands();

    // Makes the playerScores and computerScores appear in the DOM after 1s
    displayScores();

    // controls the display of choice icons, scores and result messages
    playRound(playerChoice, computerChoice);

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
});

// When player chooses scissors option
scissorsOption.addEventListener('click', () => {
    // assigns the 'scissors' to playerChoice variable
    playerChoice = 'scissors';

    getComputerChoice();

    // Makes the resultDisplay and resultInfo elements invisible in the DOM
    resultDisplay.classList.add('invisible');
    resultInfo.classList.add('invisible');

    // Makes shakyHands element appear in the DOM
    shakyHands.classList.remove('invisible');
    // Removes shakyHands element from the DOM after 1s
    removeShakyHands();

    // Makes the playerScores and computerScores appear in the DOM after 1s
    displayScores();

    // controls the display of choice icons, scores and result messages
    playRound(playerChoice, computerChoice);

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
});

//
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
        if (playerCounter === 4) {
            gamePage.classList.add('invisible');
            winResultPage.classList.remove('invisible');
            playerName2.innerText = nameInput.value;
        }
        resultText.innerText = `You won! ${playerChoice} beats ${computerChoice}`;
        playerCounter++;
        playerCountNumber.innerText = `${playerCounter}`;
    } else if (
        (computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ) {
        if (computerCounter === 4) {
            gamePage.classList.add('invisible');
            loseResultPage.classList.remove('invisible');
            playerName3.innerText = nameInput.value;
        }
        resultText.innerText = `You lost! ${computerChoice} beats ${playerChoice}`;
        computerCounter++;
        computerCountNumber.innerText = `${computerCounter}`;
    }
    scoresMessages(playerCounter, computerCounter);
    // console.log('computer choice is: ' + computerChoice);
    // console.log('player choice is: ' + humanChoice);
};

//the restart button after winning the game
winRestart.addEventListener('click', () => {
    winResultPage.classList.add('invisible');
    gamePage.classList.remove('invisible');
    playerChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultText.innerText = '';
    playerCounter = 0;
    computerCounter = 0;
    playerCountNumber.innerText = '';
    computerCountNumber.innerText = '';
    playerScores.classList.add('invisible');
    computerScores.classList.add('invisible');
    resultVariable.innerText = '';
});

//the restart buffon after losing the game
loseRestart.addEventListener('click', () => {
    loseResultPage.classList.add('invisible');
    gamePage.classList.remove('invisible');
    playerChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultText.innerText = '';
    playerCounter = 0;
    computerCounter = 0;
    playerCountNumber.innerText = '';
    computerCountNumber.innerText = '';
    playerScores.classList.add('invisible');
    computerScores.classList.add('invisible');
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

// Makes playerScores and computerScores elements appear on the DOM after 1s
let displayScores = () => {
    setTimeout(() => {
        playerScores.classList.remove('invisible');
        computerScores.classList.remove('invisible');
    }, 1000);
};

// Makes the result appear after 1s
let displayResult = () => {
    setTimeout(() => {
        resultDisplay.classList.remove('invisible');
        resultInfo.classList.remove('invisible');
    }, 1000);
};
