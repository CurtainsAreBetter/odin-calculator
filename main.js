// Global variable declarations
/*========================
        buttons
========================*/
// numbers
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');
const n6 = document.querySelector('#n6');
const n7 = document.querySelector('#n7');
const n8 = document.querySelector('#n8');
const n9 = document.querySelector('#n9');
const n0 = document.querySelector('#n0');

// operators and utility
const addOp = document.querySelector('#add');
const multiOp = document.querySelector('#multiply');
const divOp = document.querySelector('#divide');
const subOp = document.querySelector('#subtract');
const clearUtil = document.querySelector('#clear');
const equalUtil = document.querySelector('#equals');



// Functions
/*========================
        Math Functions
========================*/

// verify two inputs are numbers
function numVerify(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return true;
    }
    return false;
}

function add(a, b) {
    if (numVerify(a, b)) {
        return a + b;
    }
    return 'ERROR';
}

function subtract(a ,b) {
    if (!numVerify(a, b)) {
        return 'ERROR'
    }
    return a - b;
}

function multiply(a ,b) {
    if (!numVerify(a, b)) {
        return 'ERROR'
    }
    return a * b;
}

function divide(a ,b) {
    if (!numVerify(a, b)) {
        return 'ERROR'
    }
    return a / b;
}

function operate (operator, a, b){
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'ERROR';
    }
}


/*========================
      Screen Functions
=========================*/
const screen = document.querySelector('.screen');
function clearScreen () {
    screen.textContent = '';
}

// update screen given number button presses
function numButtonsScreenUpdate() {
    const numbers = document.querySelectorAll('.numbers');
    numbers.forEach((num) => {
        num.addEventListener('click', (e) => {
            screen.textContent += e.target.innerText;
        });
    });
}




