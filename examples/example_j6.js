// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "y"){
//     var answer = prompt("are we there yet?");
// }

// alert("YAY!! We made it!");


// VERSION 2

var answer = prompt("are we there yet!");

while(answer.indexOf("yes") === -1){
    var answer = prompt("are we there yet!");
}
alert("YAY!! We made it!");