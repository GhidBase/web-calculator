
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

function updateScreen() {
    let displayText = lastInput == null ? currentInput : lastInput + " " + operator + " " + currentInput
    screen.textContent = displayText;
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
    if(!currentInput) {
        currentInput = number;
        updateScreen();
        return;
    }

        currentInput += number.toString();
        currentInput = currentInput;
        updateScreen();
}

function toggleNegative() {
    currentInput *= -1;
    updateScreen();
}

function operatorPressed(button) {
    let operatorInput = button.textContent;

    if (operatorInput == "=" && !operator) {
        return;
    }
    if (currentInput == null) {
        updateScreen();
        return;
    }
    
    if (operatorInput == "AC") {
        lastInput = null;
        currentInput = 0;
        operator = null;
        updateScreen();
        return;
    }

    if (lastInput == null) {
        operator = operatorInput;
        lastInput = currentInput;
        currentInput = 0;
        updateScreen();
        return;
    }

    currentInput = operate();
    lastInput = currentInput;
    currentInput = 0;
    operator = operatorInput;

    if (operatorInput == "=") {
        operator = null;
        currentInput = lastInput;
        lastInput = null;
    }
    
    updateScreen();
}
