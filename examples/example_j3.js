// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if (age < 0) {
    alert("Come back once you're out of the womb");
    console.log("Come back once you're out of the womb");
}

// If age is 21  
if (age === 21) {
    alert("Happy 21st Birthday!");
    console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if (age % 2 !== 0) {
    alert("Your age is odd!");
    console.log("Your age is odd!");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
    alert("Your age is a perfect square!");
    console.log("Your age is a perfect square!");
}

