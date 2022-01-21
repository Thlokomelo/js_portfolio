function guessNumber() {
    var secret = 7;
    var guess;
    guess = prompt("Please guess the secret number (1-10)");

    while (guess < secret) {
        window.alert("Incorrect, too low!");

        if(guess > 0) 
        guessNumber()
    }
    while (guess > secret) {
        window.alert("Incorrect, too high!");

        if(guess > 0) 
        guessNumber()
  
    }
    if (guess == secret) {
        window.alert("Correct!, Congratulations you won!");
       Stop;

    } else {
        window.alert("Sorry Incorrect!");

        guess++;
    } 
        alert("Invalid Input!")

        if(guess > 0) 
        guessNumber()
    }
    
