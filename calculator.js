let currentNumber = '';
let currentOperator = '';
let previousResult = null;
let newOperation = true;

function updateScreen(value) {
    document.getElementById('screen').textContent = value;
}

function addNumber(number) {
    if (newOperation) {
        currentNumber = '';
        newOperation = false;
    }
    // Prevent multiple decimal points
    if (number === '.' && currentNumber.includes('.')) {
        return;
    }
    currentNumber += number;
    updateScreen(currentNumber);
}

function addOperator(operator) {
    if (currentNumber === '' && previousResult === null) {
        return;
    }

    if (currentNumber !== '') {
        if (previousResult !== null) {
            calculate();
        } else {
            previousResult = parseFloat(currentNumber);
        }
    }

    currentOperator = operator;
    newOperation = true;
}

function calculate() {
    if (currentOperator === '' || currentNumber === '') {
        return;
    }

    const currentNum = parseFloat(currentNumber);
    let result;

    switch (currentOperator) {
        case '+':
            result = previousResult + currentNum;
            break;
        case '-':
            result = previousResult - currentNum;
            break;
        case '*':
            result = previousResult * currentNum;
            break;
        case '/':
            if (currentNum === 0) {
                clear();
                updateScreen('Error');
                return;
            }
            result = previousResult / currentNum;
            break;
    }

    // Round to avoid decimal precision issues
    result = Math.round(result * 1000000) / 1000000;

    updateScreen(result);
    previousResult = result;
    currentNumber = result.toString();
    currentOperator = '';
    newOperation = true;
}

function clear() {
    currentNumber = '';
    currentOperator = '';
    previousResult = null;
    newOperation = true;
    updateScreen('0');
}