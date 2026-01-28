console.log("Hello World!");

const operationScreen = document.querySelector('#operationScreen');
operationScreen.textContent = 'ERRORRRRR';

let number1 = '';

let operator = '';

let number2 = '';

// Memory
let mem = '';

//Blinking Indicator
const allowedValues = {
    numbers: ["0","1","2","3","4","5","6","7","8","9",],
    operators: ["+","-","*","/"],
    actions: ["Enter","Backspace","Escape",],
}

// document.addEventListener('keydown', (e) => {
//     if (allowedValues.includes(e.key)) {

//     }
// }); 


// Numpad functionality
const nums = document.querySelectorAll('.num');
nums.forEach((num) => {
    num.addEventListener('click', () => {
        console.log("click on num...");
        const btnVal = num.textContent;
        console.log(`btn value: ${btnVal}`);
        handleInput(btnVal);
    });   
});

// ================
// Function Bank  =
// ================

function operate(a, b, operator) {
    return add(a,b);
}

function handleInput(value) {
    if (allowedValues.numbers.includes(value)) {
        mem += value;
        operationScreen.textContent = mem;
        console.log(`operationScreen updated: ${mem}`);
    } else if (allowedValues.operators.includes(value)) {
        

    } else if (allowedValues.actions.includes(value)) {
        
        
    }
}

function add(a, b) {
	return a + b;
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