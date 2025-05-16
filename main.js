let nameInput           = document.querySelector('#nameInput');
let nameSubmitButton    = document.querySelector('#nameSubmitButton');
let playerName1         = document.querySelector('#playerName1');
let playerName2         = document.querySelector('#playerName2');
let playerName3         = document.querySelector('#playerName3');
let gamePage            = document.querySelector('#gamePage');
let landingPage         = document.querySelector('#landingPage');
let nameAlert           = document.querySelector('#nameAlert');
let resultText          = document.querySelector('#resultText');
let resultVariable      = document.querySelector('#resultVariable');
let playerScores        = document.querySelector('#playerScores');
let computerScores      = document.querySelector('#computerScores');
let playerCountNumber   = document.querySelector('#playerCountNumber');
let computerCountNumber = document.querySelector('#computerCountNumber');
let winResultPage       = document.querySelector('#winResultPage');
let loseResultPage      = document.querySelector('#loseResultPage');
let winRestart          = document.querySelector('#winRestart');
let loseRestart         = document.querySelector('#loseRestart');
let shakyHands          = document.querySelector('#shakyHands')
let resultDisplay       = document.querySelector('#resultDisplay');
let resultInfo          = document.querySelector('#resultInfo');
let rockOption          = document.querySelector('#rockOption');
let paperOption         = document.querySelector('#paperOption');
let scissorsOption      = document.querySelector('#scissorsOption');
let playerChoice        = document.querySelector('#playerChoice');
let computerChoice      = document.querySelector('#computerChoice');

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