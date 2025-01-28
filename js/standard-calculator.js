function percent(){
    if (operator || currentInput === '') return;
    let result = parseFloat(currentInput) / 100;
    screen.value = result;
    currentInput = '' + result;
    operator = '';
    firstOperand = '';
}