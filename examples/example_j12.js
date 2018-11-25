
var b = document.querySelector("button");
//var isPurple = false;
var body = document.querySelector("body");

//b.addEventListener("click", function(){
//    if (isPurple) {
//        body.style.backgroundColor = "white";
//    }
//    else {
//        body.style.backgroundColor = "purple";
//    }
//    isPurple = !isPurple;
//});
b.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});