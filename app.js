do { 
    computerScore = 0;
    userScore = 0;
    computerNumber = 0;
    userNumber = 0;

    do {
        var numbers = Math.floor(Math.random() * 10) +1;
        computerNumber = computerNumber + numbers;
        alert(`The Computer got ${numbers}. The Computers new total is ${computerNumber}`)
    } while (computerNumber <= 16)

    alert("It is now your turn!!!")

    do {
        var numbers = Math.floor(Math.random() * 10) +1;
        userNumber = userNumber + numbers;
        alert(`The number you got was ${numbers}. Your new total is ${userNumber}`)
        var play = prompt(`Would you like to go again? If so, type "Yes".`)
    } while ((userNumber <= 19) && (play == "Yes"))

    alert(`Computer: ${computerNumber}. User: ${userNumber}.`)

    if (computerNumber > userNumber) {
        alert(`The computer has won with a score of ${computerNumber}.`)
        computerScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else if (userNumber > computerNumber) {
        alert(`Congratulations! You won with a score of ${userNumber}`)
        userScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else {
        alert(`You drew with the bot no points for anyone!`)
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    }

} while exit = prompt(`Would you like to exit? If so, type "Yes".`)