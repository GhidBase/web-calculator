
let currentInput = 0;
let lastInput = null;
let operator = null;
let screen = document.querySelector(".screen");

function add() {
    operator = "add";
}

function subtract() {
    operator = "subtract";
}

function multiply() {
    operator = "multiply";
}

function divide() {
    operator = "divide";
}

function updateScreen(text) {
    screen.textContent = text;
}

function operate() {
    let a = +lastInput;
    let b = +currentInput;
    switch (operator) {
        case "/":
            return a / b;
        case "*":
            return a * b;
        case "-":
            return a - b;
        case "+":
            return a + b;  
    }
}

function numberPress(button) {
    let number = button.textContent;
    if(currentInput == 0) {
        currentInput = number;
        console.clear();
        console.log("lastInput: " + lastInput);
        console.log("currentInput: " + currentInput);
        updateScreen(currentInput);
        return;
    }

        currentInput += number.toString();
        currentInput = +currentInput;
        console.clear();
        console.log("lastInput: " + lastInput);
        console.log("currentInput: " + currentInput);
        updateScreen(currentInput);
}

function operatorPressed(button) {
    let operatorInput = button.textContent;
    if (currentInput == null) {
        return;
    }
    
    if (operatorInput == "AC") {
        lastInput = null;
        currentInput = 0;
        operator = null;
        console.clear();
        console.log("operator pressed " + button.textContent)
        console.log("lastInput: " + lastInput);
        console.log("currentInput: " + currentInput);
        return;
    }

    if (lastInput == null) {
        operator = operatorInput;
        lastInput = currentInput;
        currentInput = 0;
        console.clear();
        console.log("operator pressed " + button.textContent)
        console.log("lastInput: " + lastInput);
        console.log("currentInput: " + currentInput);
        return;
    }

    currentInput = operate();

    lastInput = currentInput;
    updateScreen(currentInput);
    currentInput = 0;
    operator = operatorInput;


    console.clear();
    console.log("operator pressed " + button.textContent)
    console.log("lastInput: " + lastInput);
    console.log("currentInput: " + currentInput);
}
