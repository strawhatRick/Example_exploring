//create secret number
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number!"));
//check if guess is right

if (guess === secretNumber) {
    alert("Got it right!!");
}
else if (guess > secretNumber) {
    alert("Too high! Guess lower");
}
else {
    alert("Too low! Guess higher");
}
