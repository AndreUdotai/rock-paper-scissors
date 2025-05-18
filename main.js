let nameInput = document.querySelector('#nameInput');
let nameSubmitButton = document.querySelector('#nameSubmitButton');
let humanNameDisplay = document.querySelector('#humanNameDisplay');
let gamePage = document.querySelector('#gamePage');
let landingPage = document.querySelector('#landingPage');
let nameAlert = document.querySelector('#nameAlert');
let resultText = document.querySelector('#resultText');
let resultVariable = document.querySelector('#resultVariable');
let humanScoreDisplay = document.querySelector('#humanScoreDisplay');
let computerScoreDisplay = document.querySelector('#computerScoreDisplay');
let playerCountNumber = document.querySelector('#playerCountNumber');
let computerCountNumber = document.querySelector('#computerCountNumber');
let winResultPage = document.querySelector('#winResultPage');
let loseResultPage = document.querySelector('#loseResultPage');
let winRestart = document.querySelector('#winRestart');
let loseRestart = document.querySelector('#loseRestart');
let shakyHands = document.querySelector('#shakyHands');
let resultDisplay = document.querySelector('#resultDisplay');
let resultInfo = document.querySelector('#resultInfo');
let humanOptions = document.getElementById('humanOptions');
let playerChoiceDisplay = document.querySelector('#playerChoiceDisplay');
let computerChoiceDisplay = document.querySelector('#computerChoiceDisplay');

// Variables to store human and computer choices and scores
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let result;

// ********************************************************************************************
// A user should be able to enter a name and click on a button to continue the game
// ********************************************************************************************

let startGame = () => {
    // Get player name from input
    let playerName;
    if (nameInput.value === '') {
        playerName = 'Anon'
    } else {
        playerName = nameInput.value;
    }
    localStorage.setItem('playerName', playerName);
    humanNameDisplay.innerText = playerName;
    // const storedName = localStorage.getItem('playerName');
    //Hide landing page from view
    landingPage.classList.add('invisible');
    //Display game page
    gamePage.classList.remove('invisible');
};

// This 'continue' click event handler transitions the game from the landing page to the game page
nameSubmitButton.addEventListener('click', startGame);

// The user should also be able to continue to the game by pressing the return key on the keyboard
nameInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault();
        nameSubmitButton.click();
    }
});

// ********************************************************************************************

// Generare a random number between 1 and 3 to get the computer choice
let getComputerChoice = () => {
    let randomNumberBetween1and3 = Math.floor(Math.random() * 3 + 1);
    switch (randomNumberBetween1and3) {
        case 1:
            return (computerChoice = 'rock');
            break;
        case 2:
            return (computerChoice = 'paper');
            break;
        case 3:
            return (computerChoice = 'scissors');
            break;
    }
};

// A user should be able to choose by clicking on one of three icons (rock, paper or scissors)
let getHumanChoice = (event) => {
    // Check if the clicked element is one of the choice icons
    const clickedElement = event.target;
    console.log(clickedElement);
        // Determine which option was clicked based on ID
        switch (clickedElement.id) {
            case 'rockOption':
                humanChoice= 'rock';
                console.log(humanChoice);
                break;
            case 'paperOption':
                humanChoice = 'paper';
                break;
            case 'scissorsOption':
                humanChoice = 'scissors';
                break;
            default:
                humanChoice = 'unknown';
        }
};

let handleHumanOptionsClick = (event) => {
    getHumanChoice(event);
    getComputerChoice();

    // controls the display of choice icons, scores and result messages
    playRound(humanChoice, computerChoice);
};

// The function listens for a click event on the humanOptions element to run the game
humanOptions.addEventListener('click', handleHumanOptionsClick);

let addShakyHands = () => {
    shakyHands.classList.remove('invisible');
    humanOptions.classList.add('invisible');
}

let removeShakyHands = () => {
    setTimeout(() => {
        shakyHands.classList.add('invisible');
        humanOptions.classList.remove('invisible');
    }, 1000);
};


let displayPlayerAndComputerChoiceIcons = () => {
    // Makes human and computer choice icons appear in the DOM
    playerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${humanChoice} fa-flip-horizontal choiceIcons"></i>`;
    computerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${computerChoice} choiceIcons"></i>`;
};



// The function plays a round of the game and updates the score and displays the result message accordingly
let playRound = (humanChoice, computerChoice) => {
    displayPlayerAndComputerChoiceIcons();

    if (humanChoice === computerChoice) {
        resultText.innerText = 'Tie Game!';
        resultVariable.innerText = '';
        playerCountNumber.innerText = `${humanScore}`;
        computerCountNumber.innerText = `${computerScore}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        if (humanScore === 4) {
            setTimeout(function () {
                gamePage.classList.add('invisible');
                winResultPage.classList.remove('invisible');
            }, 2000);
        }
        resultText.innerText = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        playerCountNumber.innerText = `${humanScore}`;
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        if (computerScore === 4) {
            setTimeout(function () {
                gamePage.classList.add('invisible');
                loseResultPage.classList.remove('invisible');
            }, 2000);
        }
        resultText.innerText = `You lost! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        computerCountNumber.innerText = `${computerScore}`;
    }
    scoresMessages(humanScore, computerScore);
    // Makes the resultDisplay and resultInfo elements invisible in the DOM
    resultDisplay.classList.add('invisible');
    resultInfo.classList.add('invisible');

    // Makes shakyHands element appear in the DOM
    addShakyHands();
    // Removes shakyHands element from the DOM after 1s
    removeShakyHands();
    // Makes the humanScoreDisplay and computerScoreDisplay appear in the DOM after 1s
    displayScores();
    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
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
