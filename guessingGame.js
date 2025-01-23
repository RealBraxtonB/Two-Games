//declare variables
let rand = 1 + Math.floor(Math.random() * 100);
let guessNum = 0;

//grab elements from the dom
const game = document.querySelector('#second');
const guess = document.querySelector('#guess');
const previousGuesses =  document.querySelector('.previous');
const feedback = document.querySelector('.feedback');


const reset = resetButton => { // function that resets the game

    let test = resetButton.getAttribute('id') // grabs the id name

    if (test === 'button') { // so it doesn't remove random stuff
        resetButton.remove(); // removes the button
        
        guessNum = 0; //resets the number of guesses
        previousGuesses.textContent = 'Previous guesses: '; // gets rid of all the text of previous guesses

        feedback.setAttribute('class', 'feedback') // clears the feedback text
        feedback.textContent = '';
        
        rand = 1 + Math.floor(Math.random() * 100); // new random number

        guess.text.disabled = false; // re-enables the text box
        guess.text.focus(); // takes the curser to the textbox
    }
}
    

    

const gameOver = () => { // function that is called when the game is over lol
    const resetButton = document.createElement('button'); // sets up the button and adds it to the end
    resetButton.textContent = 'Start new game';
    resetButton.setAttribute('id', 'button')
    game.append(resetButton);

    guess.text.disabled = true; // disables the text box
    resetButton.focus(); // takes the curse to the reset button

    game.addEventListener('click', e => { // calls the reset function when pushed
        reset(e.target); // sends the button to the reset function
    });
};


guess.addEventListener('submit', e => {
    e.preventDefault(); // stops the form from refreshing the page
    
    let userGuess = Number(guess.text.value); // grabs the users guess
    previousGuesses.textContent += userGuess + "  "; // adds the users guess to the previous guesses
    guessNum++; // increments guess number
    guess.text.value = ''; // clears out the text box

    // if statements checking on the users guess and providing feedback
    if (userGuess === rand) {
        feedback.textContent = 'Congratulations! You got it right!';
        feedback.setAttribute('class', 'justRight');
        gameOver();
    }else if (guessNum === 10) {
        feedback.textContent = '!!! Too many attempts, GAME OVER !!!';
        feedback.setAttribute('class', 'tooMany');
        guess.value = '';
        gameOver();
    }else if (userGuess > rand) {
        feedback.textContent = 'WRONG, that guess was too big';
        feedback.setAttribute('class', 'tooBig');
    }else if (userGuess < rand) {
        feedback.textContent = 'WRONG, that guess was too small';
        feedback.setAttribute('class', 'tooSmall');
    }
});