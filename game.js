//Random Number Guessing Game

//generating a random number from 1 to 2
 const randomNumber =  (Math.floor(Math.random() * 2) + 1)

//asking users for their guesses using prompt and storing it in a variable
 const guessedNumber = parseInt(prompt("Welcome to my number guessing game, Type in a random number from 1 to 2"));

 function checkGuess(){
  if(guessedNumber === randomNumber){
        alert(`Oh yes your guess was ${guessedNumber}, You got it right!😎😎`)
    }
    else if(guessedNumber < randomNumber){
        alert(`Oh no your guess was ${guessedNumber}, It's too low you can try again!☹☹`)
    }
    else if(guessedNumber > randomNumber){
        alert(`Oh no your guess was ${guessedNumber}, It's too high you can try again!☹☹`)
    }else {
        alert(`No number was inputed, Please input a number to play the game!😳😳`)
    }
 }

checkGuess();
