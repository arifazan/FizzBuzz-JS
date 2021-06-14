// Main of the FizzBuzz Calculation Fuction
function findFizzBuzz(){
    var inputCount = parseInt(document.getElementById("inputNum").value);
    var result = [];
    for(var i = 1; i <= inputCount;i++){
        if (i%3 === 0 && i%5 !== 0){
            console.log(i + " Fizz");
            result.push(i + " Fizz");
        }else if(i%5 === 0 && i%3 !== 0){
            console.log(i + " Buzz");
            result.push(i + " Buzz");
        }else if(i%5 === 0 && i%3 === 0){
            console.log(i + " FizzBuzz");
            result.push(i + " FizzBuzz");
        }
        else{
            console.log(i);
            result.push(i);
        }
    }
    console.log(result);
    document.getElementById("resultLabel").innerText = result;
}

function clearLast(){
    console.clear();
    document.getElementById("resultLabel").innerText = "";
}