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
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case 'x':
            return mult(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            break;
    }
}

decimal.addEventListener('click', () => {
    equalsClicked = false;
    if (!(display.textContent.includes('.'))) {
        display.textContent += '.';
    }
})

pct.addEventListener('click', () => {
    equalsClicked = false;
    firstNum = display.textContent;
    display.textContent = firstNum / 100;
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
});

clearAll.addEventListener('click', () => {
    firstNum = null;
    secondNum = null;
    operator = null;
    display.textContent = '';
});

equal.addEventListener('click', () => {
    secondNum = display.textContent;
    console.log(secondNum);
    display.textContent = operate(operator, Number(firstNum), Number(secondNum));
    equalsClicked = true;
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
            operatorClicked = false;
            secondNum = display.textContent;
            firstNum = operate(operator, Number(firstNum), Number(secondNum));
            display.textContent = firstNum;
            equalsClicked = true;
        } else {
            operatorClicked = true;
            firstNum = display.textContent;
            console.log(firstNum);
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