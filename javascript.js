console.log("Hello World!");

const operationScreen = document.querySelector('#operationScreen');
operationScreen.textContent = 'ERRORRRRR';

// Memory
let number1 = '';
console.log(`number1 is empty: ${number1}`);

let operator = '';
console.log(`operator is empty: ${operator}`);

let number2 = '';
console.log(`number2 is empty: ${number2}`);

//Blinking Indicator
const allowedValues = {
    numbers: ["0","1","2","3","4","5","6","7","8","9","."],
    operators: ["+","-","*","x","/","÷",],
    actions: ["Enter","Backspace","Escape","C","Del","=",],
}

// document.addEventListener('keydown', (e) => {
//     if (allowedValues.includes(e.key)) {

//     }
// }); 


// Numpad functionality
//Numbers
const nums = document.querySelectorAll('.num');
nums.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        console.log("click on num...");
        const btnVal = numBtn.textContent;
        console.log(`btn value: ${btnVal}`);
        handleInput(btnVal);
    });   
});
// Operators
const ops = document.querySelectorAll('.op');
ops.forEach((opBtn) => {
    opBtn.addEventListener('click', () => {
        console.log("click on operator...");
        const btnVal = opBtn.textContent;
        console.log(`btn value: ${btnVal}`);
        handleInput(btnVal);
    });
});
// Actions
const actions = document.querySelectorAll('.action');
actions.forEach((actionBtn) => {
    actionBtn.addEventListener('click', () => {
        console.log("click on action...");
        const btnVal = actionBtn.textContent;
        console.log(`btn value: ${btnVal}`);
        handleInput(btnVal);
    });
});

// ================
// Function Bank  =
// ================

function operate() {
    if (operator === '+') {
        operationScreen.textContent = add(number1, number2);
    }
}

function handleInput(value) {
    if (allowedValues.numbers.includes(value)) {
        if (operator === '') {
            number1 += value;
            operationScreen.textContent = number1;
            console.log(`operationScreen updated: ${number1}`);
        } else {
            number2 += value;
            operationScreen.textContent = number2;
            console.log(`operationScreen updated: ${number2}`);
        }
    } else if (allowedValues.operators.includes(value)) {
        if (number1 !== '' && operator == '') {
            operator = value;
            console.log(`operator pressed: ${value}`);
            operationScreen.textContent = '';
            console.log(`operationScreen set up for next operand`);
        }
    } else if (allowedValues.actions.includes(value)) {
        if (value === 'C') {
            number1 = '';
            operator = '';
            number2 = '';
            operationScreen.textContent = '';
        } else if (value === 'Del') {
            operationScreen.textContent;
        } else if (value === '=') {
            operate();
        }
        
    }
}

function add(a, b) {
	return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
	return a - b;
};

function sum(arr) {
	return arr.reduce((newVal, current) => (newVal + current), 0);
};

function multiplyArr(arr) {
  return arr.reduce((newVal, current) => (
    newVal * current
  ), 1);
};

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function displayMem() {
    console.log(`number1 current value: ${number1}`);
    console.log(`operator current value: ${operator}`);
    console.log(`number2 current value: ${number2}`);
}