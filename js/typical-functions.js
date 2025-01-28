function appendValue(value) {
    currentInput += value;
    screen1.value = currentInput;
    screen2.value = currentInput;
}

function sgn() {
    if (currentInput.charAt(0) === '-') {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    screen1.value = currentInput;
    screen2.value = currentInput;
}

function dot(){
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    screen1.value = currentInput;
    screen2.value = currentInput;
}

function removeLastChar() {
    currentInput = currentInput.slice(0, -1);
    screen1.value = currentInput;
    screen2.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function inverse() {
    let result;
    if (operator || currentInput === '') return;
    if (currentInput === '0') {
        result = 'Cannot divide by zero'
    } else result = 1 / parseFloat(currentInput);
    screen1.value = result;
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function power_of_two() {
    if (operator || currentInput === '') return;
    let result = parseFloat(currentInput) ** 2;
    screen1.value = result;
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function sqrt() {
    if (operator || currentInput === '') return;
    let result = Math.sqrt(parseFloat(currentInput));
    screen1.value = result;
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function calculate() {
    if (!operator || currentInput === '') return;
    const secondOperand = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if(secondOperand === '0') {
                result = 'Cannot divide by zero';
                break;
            }
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '^':
            result = parseFloat(firstOperand) ** parseFloat(secondOperand);
            break;
        case 'log':
            if(parseFloat(firstOperand) < 0) {
                result = 'Base cannot be less than zero';
                break;
            }
            if(firstOperand === '1'){
                result = 'Base cannot be one';
                break;
            }
            if(parseFloat(secondOperand) < 0){
                result = 'Argument cannot be lass than zero';
                break;
            }
            result = Math.log(parseFloat(secondOperand)) / Math.log(parseFloat(firstOperand));
            break;
        case 'mod':
            if(secondOperand === '0'){
                result = 'Cannot take mod by zero';
                break;
            }
            result = parseFloat(firstOperand) % parseFloat(secondOperand);
            break;
    }
    screen1.value = result;
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function clearScreen() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    screen1.value = '';
    screen2.value = '';
}