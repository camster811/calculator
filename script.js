let firstNum;
let secondNum;
let operator;
const display = document.querySelector('p');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const clearButton = document.getElementById('clear');
const del = document.getElementById('delete');
const percent = document.getElementById('%');
const division = document.getElementById('/');
const multiplication = document.getElementById('x');
const subtraction = document.getElementById('-');
const addition = document.getElementById('+');

function operate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return sub(num1, num2);
        case 'multiply':
            return mult(num1, num2);
        case 'divide':
            return divide(num1, num2);
        case 'percent':
            return percent(num1);
        default:
            break;
    }
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        display.textContent = numberButtons[i].id;
    })
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percentage(num) {
    return (num / 100)
}

function backspace() {

}

function clear() {

}
