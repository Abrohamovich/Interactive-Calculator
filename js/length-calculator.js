const inputValue = document.getElementById('input-value');
const inputUnit = document.getElementById('input-unit');
const outputValue = document.getElementById('output-value');
const outputUnit = document.getElementById('output-unit');

function calculateLengthConvert() {
    const unitConversions = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        inch: 39.3701,
        foot: 3.28084,
        yard: 1.09361,
        mile: 0.000621371
    };
        const input = parseFloat(inputValue.value);
        const inputUnitValue = inputUnit.value;
        const outputUnitValue = outputUnit.value;

        if (isNaN(input)) {
            outputValue.value = '';
            return;
        }

        const meters = input / unitConversions[inputUnitValue];

        const result = meters * unitConversions[outputUnitValue];

        outputValue.value = '' + result;
}

inputValue.addEventListener('input', calculateLengthConvert);
inputUnit.addEventListener('input', calculateLengthConvert);
outputUnit.addEventListener('input', calculateLengthConvert);