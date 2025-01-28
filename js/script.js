let currentInput = '';
let operator = '';
let firstOperand = '';
let screen1 = document.getElementById('standard-screen');
let screen2 = document.getElementById('scientific-screen');

const st_calc = document.getElementById('standard-calculator');
const sc_calc = document.getElementById('scientific-calculator');
const dt_calc = document.getElementById('data-calculator');
const ln_calc = document.getElementById('length-calculator');

function switchToStandard() {
    st_calc.style.display = 'grid';
    sc_calc.style.display = 'none';
    dt_calc.style.display = 'none';
    ln_calc.style.display = 'none';
    currentInput = '';
    operator = '';
    firstOperand = '';
    screen1.value = '';
}

function switchToScientific() {
    st_calc.style.display = 'none';
    sc_calc.style.display = 'grid';
    dt_calc.style.display = 'none';
    ln_calc.style.display = 'none';
    currentInput = '';
    operator = '';
    firstOperand = '';
    screen2.value = '';
}

function switchToData() {
    st_calc.style.display = 'none';
    sc_calc.style.display = 'none';
    dt_calc.style.display = 'flex';
    ln_calc.style.display = 'none';
}

function switchToLength(){
    st_calc.style.display = 'none';
    sc_calc.style.display = 'none';
    dt_calc.style.display = 'none';
    ln_calc.style.display = 'flex';
}