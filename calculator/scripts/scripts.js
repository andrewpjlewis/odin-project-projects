const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const negation = document.querySelector('#negation');
const percent = document.querySelector('#percent');
const operators = document.querySelectorAll('.operator');
const operands = document.querySelectorAll('.operand');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');

// Operator functions
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let num1 = '';
let num2 = '';
let operator = '';
let isOperatorSelected = false;

// Function for number and decimal button clicks
const handleOperandClick = (value) => {
    if (isOperatorSelected) {
        num2 += value;
        display.innerHTML = num2;
    } else {
        num1 += value;
        display.innerHTML = num1;
    }
};

// Function for operator button clicks
const handleOperatorClick = (op) => {
    if (num1 !== '') {
        operator = op;
        isOperatorSelected = true;
    }
};

// Function for the equals button
const operate = () => {
    if (num1 !== '' && num2 !== '' && operator !== '') {
        let result;
        let number1 = parseFloat(num1);
        let number2 = parseFloat(num2);

        switch (operator) {
            case '+':
                result = add(number1, number2);
                break;
            case '-':
                result = subtract(number1, number2);
                break;
            case '*':
                result = multiply(number1, number2);
                break;
            case '/':
                result = divide(number1, number2);
                break;
        }

        display.innerHTML = result;
        num1 = result.toString();
        num2 = '';
        operator = '';
        isOperatorSelected = false;
    }
};

// Function for the negation button
const toggleNegation = () => {
    if (isOperatorSelected && num2 !== '') {
        num2 = (-parseFloat(num2)).toString();
        display.innerHTML = num2;
    } else if (!isOperatorSelected && num1 !== '') {
        num1 = (-parseFloat(num1)).toString();
        display.innerHTML = num1;
    }
};

// Add event listeners for operand buttons
operands.forEach(button => {
    button.addEventListener('click', () => handleOperandClick(button.value));
});

// Add event listener for the zero button
zero.addEventListener('click', () => handleOperandClick(zero.value));

// Add event listener for the decimal button
decimal.addEventListener('click', () => {
    if (isOperatorSelected && !num2.includes('.')) {
        num2 += '.';
        display.innerHTML = num2;
    } else if (!isOperatorSelected && !num1.includes('.')) {
        num1 += '.';
        display.innerHTML = num1;
    }
});

// Add event listeners for operator buttons
operators.forEach(button => {
    button.addEventListener('click', () => handleOperatorClick(button.value));
});

// Add event listener for the equals button
equals.addEventListener('click', operate);

// Add event listener for the clear button
clear.addEventListener('click', () => {
    display.innerHTML = '0';
    num1 = '';
    num2 = '';
    operator = '';
    isOperatorSelected = false;
});

// Add event listener for the negation button
negation.addEventListener('click', toggleNegation);

const percentToggle = () => {
    if (isOperatorSelected && num2 !== '') {
        num2 = (num2 * 0.1).toString();
        display.innerHTML = num2;
    } else if (!isOperatorSelected && num1 !== '') {
        num1 = (num1 * 0.1).toString();
        display.innerHTML = num1;
    }
}

percent.addEventListener('click', percentToggle);