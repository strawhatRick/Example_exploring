var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningScore = 5;

p1button.addEventListener("click", function () {
    if(!gameover){
        p1score++;
        if(p1score === winningScore){
            p1Display.classList.add("winner");
            gameover = true;
        }
        p1Display.textContent = p1score;
    }
    
});



p2button.addEventListener("click", function () {
    if (!gameover) {
        p2score++;
        if (p2score === winningScore) {
            p2Display.classList.add("winner");
            gameover = true;
        }
        p2Display.textContent = p2score;
    }
});



resetButton.addEventListener("click", function(){
    reset();
});


function reset(){
    p1score = 0;
    p1Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2score = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove("winner");
    gameover = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = Number(this.value);
    winningScore = Number(this.value);
    reset();
});