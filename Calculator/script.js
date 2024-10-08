const display = document.getElementById('display');
const buttons = document.querySelectorAll('input[type="button"]');

let inputValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => buttonClick(button.value));
});

function buttonClick(value) {
    if (value === 'AC') {
        inputValue = '';
        display.value = '0';
    } else if (value === 'DEL') {
        inputValue = inputValue.slice(0, -1);
        display.value = inputValue || '0';
    } else if (value === '=') {
        try {
            display.value = eval(inputValue) || '0';
        } catch {
            display.value = 'Error';
        }
        inputValue = display.value;
    } else {
        inputValue += value;
        display.value = inputValue;
    }
}
