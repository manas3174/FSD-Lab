function input(){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    return [x,y];
}

function add(){
    let userInput = input();
    let result = userInput[0] + userInput[1];
    document.getElementById("result").value =  result;
}

function subtract(){
    let userInput = input();
    let result = userInput[0] - userInput[1];
    document.getElementById("result").value =  result;
}

function multiply(){
    let userInput = input();
    let result = userInput[0] * userInput[1];
    document.getElementById("result").value =  result;
}

function divide(){
    let userInput = input();
    let result = userInput[0] / userInput[1];
    document.getElementById("result").value =  result;
}