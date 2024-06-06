let firstNum;
let secondNum;
let operator;
let equalsClicked = false;
let operatorClicked = false;
const display = document.querySelector('p');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equal = document.getElementById('equals');
const clearAll = document.getElementById('clear');
const del = document.getElementById('delete');
const pct = document.getElementById('%');
const decimal = document.getElementById('decimal');

function operate(operation, num1, num2) {
    switch (operation) {
        case '+':
            return String(add(num1, num2)).slice(0, 12);
        case '-':
            return String(sub(num1, num2)).slice(0, 12);
        case 'x':
            return String(mult(num1, num2)).slice(0, 12);
        case '/':
            return String(divide(num1, num2)).slice(0, 12);
        default:
            return firstNum;
    }
}

decimal.addEventListener('click', () => {
    if (equalsClicked) {
        equalsClicked = false;
        firstNum = 0;
        operator = '';
        display.textContent = '';
        display.textContent = '.';
    } else {
        if (!(display.textContent.includes('.'))) {
            display.textContent += '.';
        }
    }
});

pct.addEventListener('click', () => {
    if (equalsClicked) {
        equalsClicked = false;
        firstNum = display.textContent / 100;;
        secondNum = 0;
        operator = '';
        display.textContent = firstNum;
    } else {
        display.textContent = display.textContent / 100;
    }
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
});

clearAll.addEventListener('click', () => {
    firstNum = null;
    secondNum = null;
    operator = null;
    display.textContent = '';
    equalsClicked = false;
    operatorClicked = false;
});

equal.addEventListener('click', () => {
    operatorClicked = false;
    if (equalsClicked) {
        display.textContent = result;
        firstNum = result;
        secondNum = 0;
    } else {
        secondNum = display.textContent;
        result = operate(operator, Number(firstNum), Number(secondNum));
        display.textContent = result
        equalsClicked = true;
    }
});



for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        if (equalsClicked) {
            equalsClicked = false;
            display.textContent = '';
            display.textContent += numberButtons[i].textContent;
        } else {
            display.textContent += numberButtons[i].textContent;
        }
    })
}
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (operatorClicked) {
            secondNum = display.textContent;
            firstNum = operate(operator, Number(firstNum), Number(secondNum));
            display.textContent = '';
            equalsClicked = true;
        } else {
            operatorClicked = true;
            firstNum = display.textContent;
            operator = operatorButtons[i].id;
            display.textContent = '';
        }
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