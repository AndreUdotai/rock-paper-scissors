let nameInput           = document.getElementById('nameInput');
let nameSubmitButton    = document.getElementById('nameSubmitButton');
let playerName1         = document.getElementById('playerName1');
let playerName2         = document.getElementById('playerName2');
let playerName3         = document.getElementById('playerName3');
let gamePage            = document.getElementById('gamePage');
let landingPage         = document.getElementById('landingPage');
let nameAlert           = document.getElementById('nameAlert');
let resultText          = document.getElementById('resultText');
let resultVariable      = document.getElementById('resultVariable');
let playerScores        = document.getElementById('playerScores');
let computerScores      = document.getElementById('computerScores');
let playerCountNumber   = document.getElementById('playerCountNumber');
let computerCountNumber = document.getElementById('computerCountNumber');
let winResultPage             = document.getElementById('winResultPage');
let loseResultPage            = document.getElementById('loseResultPage');
let winRestart          = document.getElementById('winRestart');
let loseRestart         = document.getElementById('loseRestart');

let shakyHands          = document.getElementById('shakyHands')

let resultDisplay       = document.getElementById('resultDisplay');
let resultInfo          = document.getElementById('resultInfo');

let rockOption          = document.getElementById('rockOption');
let paperOption         = document.getElementById('paperOption');
let scissorsOption      = document.getElementById('scissorsOption');

let playerChoice        = document.getElementById('playerChoice');
let computerChoice      = document.getElementById('computerChoice');

let playerSelection;
let computerOpton;
let result;
let playerCounter = 0
let computerCounter = 0


// Logic after clicking the 'continue' button
nameSubmitButton.addEventListener('click', () => {
    // playerName is made to appear in the game page
    playerName1.innerText = nameInput.value;

    //makes the landing page to disappear from DOM
	landingPage.classList.add('invisible');

    //makes the game page appear in DOM
    gamePage.classList.remove('invisible');
});

//Generates random choices for Cyborg
let computerPlay = () => {
    switch (Math.floor(Math.random() * (3) + 1)){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break
    }
}

// When player chooses Rock icon
rockOption.addEventListener('click', () => {
    // assigns the 'Rock' to playerOpton variable
    playerOpton = 'rock';
    // assigns the random value from computerPlay function to computerOpton variable
    computerOpton = computerPlay();

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
    playRound(playerOpton, computerOpton);

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
})

// When player chooses paper icon
paperOption.addEventListener('click', () => {
    // assigns the 'Paper' to playerOpton variable 
    playerOpton = 'paper';
    // assigns the random value from computerPlay function to computerOpton variable
    computerOpton = computerPlay();

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
    playRound(playerOpton, computerOpton);

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
});

// When player chooses scissors option
scissorsOption.addEventListener('click', () => {
    // assigns the 'scissors' to playerOpton variable
    playerOpton = 'scissors';

    // assigns the random value from computerPlay function to computerOpton variable
    computerOpton = computerPlay();

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
    playRound(playerOpton, computerOpton);

    // Makes the result appear after shakyHands disappear from the DOM
    displayResult();
});

//
let playRound = (playerOpton, computerOpton) => {
    // Assigns playerChoice and computerChoice icons to the elements' innerHTM 
    playerChoice.innerHTML      = `<i class="fas fa-hand-${playerOpton} fa-flip-horizontal choiceIcons"></i>`;
    computerChoice.innerHTML    = `<i class="fas fa-hand-${computerOpton} choiceIcons"></i>`;   
         
    if(playerOpton === computerOpton){
                resultText.innerText =  'Tie Game!';
                resultVariable.innerText = '';        
    } else if ((playerOpton === 'rock' && computerOpton === 'scissors') || (playerOpton === 'scissors' && computerOpton === 'paper') || (playerOpton === 'paper' && computerOpton === 'rock')){
        if(playerCounter === 4){
            gamePage.classList.add('invisible');
            winResultPage.classList.remove('invisible');
            playerName2.innerText = nameInput.value;
        }
        resultText.innerText =  `You won! ${playerOpton} beats ${computerOpton}`;
        playerCounter++
        playerCountNumber.innerText = `${playerCounter}`;    
    } else if ((computerOpton === 'rock' && playerOpton === 'scissors') || (computerOpton === 'scissors' && playerOpton === 'paper') || (computerOpton === 'paper' && playerOpton === 'rock')){
        if(computerCounter === 4){
            gamePage.classList.add('invisible');
            loseResultPage.classList.remove('invisible');
            playerName3.innerText = nameInput.value;
        }
        resultText.innerText =  `You lost! ${computerOpton} beats ${playerOpton}`;
        computerCounter++
        computerCountNumber.innerText = `${computerCounter}`;
    }
    scoresMessages(playerCounter, computerCounter);   
}

//the restart button after winning the game
winRestart.addEventListener('click', () => {
    winResultPage.classList.add('invisible');
    gamePage.classList.remove('invisible');
    playerChoice.innerHTML = '';
    computerChoice.innerHTML = '';
    resultText.innerText = '';
    playerCounter = 0;
    computerCounter = 0;
    playerCountNumber.innerText = '';
    computerCountNumber.innerText = ''
    playerScores.classList.add('invisible');
    computerScores.classList.add('invisible');
    resultVariable.innerText = '';
});

//the restart buffon after losing the game
loseRestart.addEventListener('click', () => {
    loseResultPage.classList.add('invisible');
    gamePage.classList.remove('invisible');
    playerChoice.innerHTML = '';
    computerChoice.innerHTML = '';
    resultText.innerText = '';
    playerCounter = 0;
    computerCounter = 0;
    playerCountNumber.innerText = '';
    computerCountNumber.innerText = ''
    playerScores.classList.add('invisible');
    computerScores.classList.add('invisible');
    resultVariable.innerText = '';
})

// the variable messages
let scoresMessages = (playerScore, computerScore) => {
    resultVariable.innerText = '';
    if(playerScore === 1 && computerScore === 0){
        resultVariable.innerText = 'Lets go!!!';
    } else if (playerScore  - computerScore === 2){
        resultVariable.innerText = 'You\'re pretty good at this.'
    } else if (computerScore === 1 && playerScore === 0){
        resultVariable.innerText = 'Oh no.'
    } else if (computerScore === 2 && computerScore > playerScore){
        resultVariable.innerText = 'Arghh. Give it another shot'
    } else if (playerScore === 3 && playerScore > computerScore){
        resultVariable.innerText = 'You\'re proving humans are better.'
    } else if (playerScore === computerScore && playerScore > 2){
        resultVariable.innerText = 'It\'s ok. You got this.'
    } else if (computerScore === 4){
        resultVariable.innerText = 'Oh no. It\'s match point. Don\'t let us down.'
    } else if (playerScore === 4){
        resultVariable.innerText = 'One more and you are a hero.'
    } else if (playerScore === computerScore){
        resultVariable.innerText = '';
    } else {
        resultVariable.innerText = 'You can do this!'
    }
}

// Removes shakyHands element from the DOM after 1s
let removeShakyHands = () => {
    setTimeout( () => {
        shakyHands.classList.add('invisible')
    }, 1000)
}

// Makes playerScores and computerScores elements appear on the DOM after 1s
let displayScores = () => {
    setTimeout(() => {
        playerScores.classList.remove('invisible');
        computerScores.classList.remove('invisible');
    }, 1000)
}

// Makes the result appear after 1s
let displayResult = () => {
    setTimeout(() => {
        resultDisplay.classList.remove('invisible');
        resultInfo.classList.remove('invisible');
    }, 1000)
}