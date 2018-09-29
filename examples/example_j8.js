function isEven(num){
    return (num % 2 === 0);
}

function factorial(num){
    var res = 1;
    for(var i=2; i<= num; i++){
        res *= i; 
    }
    return res;
}

function kebabToSnake(str){
    return str.replace(/-/g, "_");    
}