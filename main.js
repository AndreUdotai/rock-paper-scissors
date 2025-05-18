let nameInput = document.querySelector('#nameInput');
let continueButton = document.querySelector('#continueButton');
let humanNameDisplay = document.querySelector('#humanNameDisplay');
let gamePage = document.querySelector('#gamePage');
let landingPage = document.querySelector('#landingPage');
let nameAlert = document.querySelector('#nameAlert');
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
let resultInfo = document.querySelector('#resultInfo');
let resultText = document.querySelector('#resultText');
let humanOptions = document.getElementById('humanOptions');
let makeYourChoice = document.querySelector('#makeYourChoice');
let resultMessage = document.querySelector('#resultMessage');

// Variables to store human and computer choices and scores
let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let result;

// The winning combinations for the game
const winningCombos = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
};

// ********************************************************************************************
// A user should be able to enter a name and click on a button to continue the game
// ********************************************************************************************

let getPlayerName = () => {
    let playerName;
    if (nameInput.value === '') {
        playerName = 'Anon';
    } else {
        playerName = nameInput.value;
    }
    return playerName;
};

let enterGamePage = () => {
    //Display game page
    gamePage.classList.remove('invisible');
    const playerName = getPlayerName();
    humanNameDisplay.innerText = playerName;
    //Hide landing page from view
    landingPage.classList.add('invisible');
};

// This 'continue' click event handler transitions the game from the landing page to the game page
continueButton.addEventListener('click', enterGamePage);

// The user should also be able to continue to the game by pressing the return key on the keyboard
nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        continueButton.click();
    }
});

// ********************************************************************************************
// A user should be able to choose by clicking on one of three icons (rock, paper or scissors)
// When the user selects a choice, the computer should randomly make a choice automatically
// ********************************************************************************************

// Generate a random number between 1 and 3 to get the computer choice
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
    // Determine which option was clicked based on ID
    switch (clickedElement.id) {
        case 'rockOption':
            humanChoice = 'rock';
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

    // controls the display of choice icons, scores and result messages for valid human choices
    if (humanChoice !== 'unknown') {
        makeYourChoice.classList.add('invisible');
        playRound(humanChoice, computerChoice);
    }
};

// The function listens for a click event on the humanOptions element to run the game
humanOptions.addEventListener('click', handleHumanOptionsClick);

let displayShakyHands = () => {
    shakyHands.classList.remove('invisible');
    resultInfo.classList.add('invisible');
    resultMessage.classList.add('invisible');
    humanOptions.classList.add('invisible');
};

let removeShakyHands = () => {
    setTimeout(() => {
        shakyHands.classList.add('invisible');
        resultInfo.classList.remove('invisible');
        resultMessage.classList.remove('invisible');
        humanOptions.classList.remove('invisible');
        // Makes human and computer choice icons appear in the DOM
        resultInfo.querySelector(
            '#playerChoiceDisplay',
        ).innerHTML = `<i class="fas fa-hand-${humanChoice} fa-flip-horizontal choiceIcons"></i>`;
        resultInfo.querySelector(
            '#computerChoiceDisplay',
        ).innerHTML = `<i class="fas fa-hand-${computerChoice} choiceIcons"></i>`;
    }, 1000);
};

// The function plays a round of the game and updates the score and displays the result message accordingly
let playRound = (humanChoice, computerChoice) => {
    // Makes shakyHands element appear in the DOM
    displayShakyHands();
    // Removes shakyHands element from the DOM after 1s
    removeShakyHands();

    if (humanChoice === computerChoice) {
        resultText.innerText = 'Tie Game!';
        resultVariable.innerText = '';
        playerCountNumber.innerText = `${humanScore}`;
        computerCountNumber.innerText = `${computerScore}`;
    } else if ( winningCombos[humanChoice] === computerChoice) {
        if (humanScore === 4) {
            setTimeout(function () {
                gamePage.classList.add('invisible');
                winResultPage.classList.remove('invisible');
            }, 2000);
        }
        resultText.innerText = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        playerCountNumber.innerText = `${humanScore}`;
    } else if (winningCombos[computerChoice] === humanChoice){
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
};

let gameReset = () => {
    gamePage.classList.remove('invisible');
    humanScore = 0;
    computerScore = 0;
    resultInfo.classList.add('invisible');
    resultVariable.innerText = '';
    winResultPage.classList.add('invisible');
    loseResultPage.classList.add('invisible');
    makeYourChoice.classList.remove('invisible');
}

winRestart.addEventListener('click', gameReset);
loseRestart.addEventListener('click', gameReset);

// the variable messages
let scoresMessages = (playerScore, computerScore) => {
    let message;
    if (playerScore === 1 && computerScore === 0) {
        message = 'Lets go!!!';
    } else if (playerScore - computerScore === 2) {
        message = "You're pretty good at this.";
    } else if (computerScore === 1 && playerScore === 0) {
        message = 'Oh no.';
    } else if (computerScore === 2 && computerScore > playerScore) {
        message = 'Arghh. Give it another shot';
    } else if (playerScore === 3 && playerScore > computerScore) {
        message = "You're proving humans are better.";
    } else if (playerScore === computerScore && playerScore > 2) {
        message = "It's ok. You got this.";
    } else if (computerScore === 4) {
        message =
            "Oh no. It's match point. Don't let us down.";
    } else if (playerScore === 4) {
        message = 'One more and you are a hero.';
    } else if (playerScore === computerScore) {
        message = 'Take the lead!';
    } else {
        message = 'You can do this!';
    }
    return resultVariable.innerText = message;
};
