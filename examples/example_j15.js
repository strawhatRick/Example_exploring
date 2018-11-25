var tds = document.querySelectorAll("td code a");
var count = 0;
for(var i = 0; i<tds.length; i++){
    if(tds[i].textContent !== null){
        count++;
    }
}
console.log(count);