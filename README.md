# lab-02-guess-number

STATE
- Tracking the number of guesses the user has used

DERIVED FROM STATE
- Copy/instructions
- Guess counter
- Too High or Too Low messages
- Win or lose messsage

HTML ELES
- Span/div/setion - Copy/rules 
- User input box (type = number)
- Button, that on click: 
    - decrements the number of guessses by 1 (in state and the DOM)
    - produces a random number
    - a second button to reset the game
- Span/div/setion - Displays number of guesses remaining 
- Span/div/setion - Guess results messages (in state and the DOM)
- Span/div/setion - Win or lose messsage

ON BUTTON CLICK
- Decrements the number of guessses by 1 (update DOM as state changes)
- Check if number of guesses has reached 4 
    - After the 4th guess, end or lose messsage appears
    - After the 4th guess, disable further input
- Second button to reset the game


