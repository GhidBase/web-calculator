
let currentInput;
let lastInput;
let operator;

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

function operate() {
    let a = lastInput;
    let b = currentInput;
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

function numberPress(number) {
    if(operator == null) {
        currentInput += number.toString();
        return;
    }

    if(operator == "=") {
        lastInput = null;
        operator = null;
        currentInput = number;
        return;
    }

    lastInput = currentInput;
    currentInput = number;
}

function operatorPressed(operatorInput) {
    if (currentInput == null) {
        return;
    }        

    if (lastInput == null) {
        operator = operatorInput;
        return;
    }

    currentInput = operate();

    operator = operatorInput;
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


        HANDLING CLEARING AND NULL
            Don't use null for current number. Always put 0. If choosing a number
            when it's 0, overwrite 0 with the new number. Previous number can
            be null

        HANDLING NUMBER PRESSES
            If a number is pressed with no queued operator, add a digit to
            the number.

            If a number is pressed while the operator is set to something other than "="
            store the current number as previous number, and change the current number
            to the pressed number

            If the a number is pressed while the operator is set to "=", null the
            previous number, null the operator, set the current number to the pressed
            number
        
        HANDLING OPERATORS
            If an operator is pressed while there is no previous input but there is
            a current input, set the operator and keep the current input.

            If an operator is pressed while there is a previous and current input
            do the math for those two inputs based on the last chosen operator
            store the result as the current input. Set the new operator

        HANDLING THE EQUAL SIGN
            If the equal sign is pressed while there is a set operator, solve the equation.
            Set the operator to =

        
*/
