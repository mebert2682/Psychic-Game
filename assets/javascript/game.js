
   // Guess what letter I'm thinking of.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "u", "v", "w", "x", "y", "z"];

   // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    console.log(computerPick);

   // Creating variables to hold the number of wins, losses, guesses left and guessed letters. Wins/Losses start at 0. guessesLeft starts at 9. And guessedLetters starts with no value.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetters = [];

    
   // Create variables that hold references to the places in the HTML where we want to display things.
    
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var guessedLettersText = document.getElementById ("guessedletters-text");
    

   // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      // Creates stored list of letters guessed so far.
      guessedLetters.push(userGuess);
     
      //console.log(userGuess);
      //console.log(guessedLetters)
     
      // Only run the following code block if the user's guess matches the computer's pick.
      if ((userGuess === computerPick)) {
        wins++;        
        guessesLeft = 9;
        guessedLetters = [];
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //console.log(computerPick);
      }



      // Only run the following code block if the user guess does not match the computer's pick.
      if ((userGuess !== computerPick)) {
        
        if((guessesLeft > 0)){
            guessesLeft--;
          }

        if((guessesLeft === 0)){
            losses++;
            guessesLeft = 9;
            guessedLetters = [];
          } 


      }

      // Display the user and computer guesses, and wins/losses/guesses left/guesses so far.
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      guessesLeftText.textContent = "guesses left: " + guessesLeft;
      guessedLettersText.textContent = "Your guesses so far: " + guessedLetters;

    };

      winsText.textContent = "wins: 0";
      lossesText.textContent = "losses: 0";
      guessesLeftText.textContent = "guesses left: 9";
      guessedLettersText.textContent = "Your guesses so far: ";



