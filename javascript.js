
let currentInput;
let lastInput;
let operator;

function add() {
    if (!currentInput)
        return "No input";
    operator = "add";
    storeCurrentInput();
}

function subtract() {
    if (!currentInput)
        return "No input";
    operator = "subtract";
    storeCurrentInput();
}

function multiply() {
    if (!currentInput)
        return "No input";
    operator = "multiply";
    storeCurrentInput();
}

function divide() {
    if (!currentInput)
        return "No input";
    operator = "divide";
    storeCurrentInput();
}

function operate(a, b) {
    switch (operator) {
        case "divide":
            return a / b;
        case "multiply":
            return a * b;
        case "subtract":
            return a - b;
        case "add":
            return a + b;       
    }
}

function storeCurrentInput() {
    if (!lastInput) {
        lastInput = currentInput;
        currentInput = null;
    }   
}

/*
    The steps are like so
    - Put in a currentInput
    - Press an operator
        - store the currentInput as the lastInput
        - clear the currentInput
    - type another currentInput

    A.
    - press equal
        - currentInput = operate()

    B.
    - press another operator
        - lastInput = operate()
        - currentInput = null
*/
