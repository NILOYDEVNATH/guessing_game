let randomNUmber = Math.ceil(Math.random() * 10)
const submit = document.getElementById('submit');
const userInput = document.getElementById('guessField');
const guessSlot = document.getElementById('guesses');
const remaining = document.getElementById('lastResult');
const startOver = document.getElementById('resultParas');
const lowOrhi = document.getElementById('lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuess = 1;
let playGame = true;

//console.log(randomNUmber)

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please valid Number')
    } else if(guess < 1){
        alert('please number greater then 1')
    } else if(guess > 11){
        alert('please enter e less then 11')
    } else {
        previousGuesses.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over The Number${randomNUmber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNUmber){
        displayMessage(`you guessed correctly`);
        endGame();
    } else if(guess < randomNUmber){
        displayMessage(`Low try`);
    } else if(guess > randomNUmber){
        displayMessage(`Too High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
          p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNUmber = Math.ceil(Math.random() * 10);
        previousGuesses = [];
        numGuess = 1;
        playGame = true;
        guessSlot.innerHTML = ''
        lowOrhi.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}