function power_of_three() {
    if (operator || currentInput === '') return;
    let result = parseFloat(currentInput) ** 3;
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function abs(){
    if (operator || currentInput === '') return;
    let result = Math.abs(parseFloat(currentInput));
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function exp(){
    if (operator || currentInput === '') return;
    let result = Math.exp(parseFloat(currentInput));
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function factorial(){
    if (operator || currentInput === '') return;
    let result = 1;
    if (currentInput !== '0'){
        while (currentInput) {
            result *= currentInput--;
        }
    }
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function cbrt(){
    if (operator || currentInput === '') return;
    let result = Math.cbrt(parseFloat(currentInput));
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function ten_to_the_power(){
    if (operator || currentInput === '') return;
    let result = 10 ** parseFloat(currentInput);
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function lg(){
    if (operator || currentInput === '') return;
    let result;
    if(parseFloat(currentInput) < 0){
        result = 'Argument cannot be lass than zero';
    } else result = Math.log10(parseFloat(currentInput));
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function ln(){
    if (operator || currentInput === '') return;
    let result;
    if(parseFloat(currentInput) < 0){
        result = 'Argument cannot be lass than zero';
    } else result = Math.log(parseFloat(currentInput));
    screen2.value = result;
    currentInput = '';
    operator = '';
    firstOperand = '';
}