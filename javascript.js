console.log("Hello World!");

const operationScreen = document.querySelector('#operationScreen');


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
    actions: ["Enter","Backspace","Escape","C","DEL","=",],
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
        console.log(`Screen result: ${operationScreen.textContent}`);
    } else if (operator === '-') {
        operationScreen.textContent = subtract(number1, number2);
        console.log(`Screen result: ${operationScreen.textContent}`);
    } else if (operator === '*' || operator === 'x') {
        operationScreen.textContent = multiply(number1, number2);
        console.log(`Screen result: ${operationScreen.textContent}`);
    } else if (operator === '/' || operator === '÷') {
        operationScreen.textContent = divide(number1, number2);
        console.log(`Screen result: ${operationScreen.textContent}`);
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
        if (number1 !== '' && operator == '' || 
            operator !== value && number2 == '' && number1 !== '') {
            operator = value;
            console.log(`operator pressed: ${value}`);
            operationScreen.textContent = `${value}`;
            console.log(`operationScreen set up for next operand`);
        }
    } else if (allowedValues.actions.includes(value)) {
        if (value === 'C') {
            number1 = '';
            operator = '';
            number2 = '';
            operationScreen.textContent = '';
            console.log(`operationScreen is clear: ${operationScreen.textContent}`);
            defaultScreen();
        } else if (value === 'DEL') {
            if (number1 !== '' && number2 === '' && operator === '') {
                number1 = del(number1);
                console.log(`number1 changes to ${number1}`);
                operationScreen.textContent = number1;
            } else if (number2 === '' && operator !== '') {
                operator = del(operator);
                console.log(`operator changes to ${operator}`);
                operationScreen.textContent = number1;
            } else if (number2 !== '') {
                number2 = del(number2);
                console.log(`number2 changes to ${number2}`);
                if (number2 !== '') {
                    operationScreen.textContent = number2;
                } else {operationScreen.textContent = operator}
            }
            defaultScreen();
        } else if (value === '=' && number2 !== '') {
            operate();
            displayMem();
            number1 = operationScreen.textContent;
            operator = '';
            number2 = '';
            console.log("number1, ready to operate:");
            displayMem();
        }
        
    }
}

function add(a, b) {
	return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
	return parseFloat(a) - parseFloat(b);
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
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function displayMem() {
    console.log(`number1 current value: ${number1}`);
    console.log(`operator current value: ${operator}`);
    console.log(`number2 current value: ${number2}`);
}

function del(elem) {
    return elem.slice(0, -1);
}

function defaultScreen() {
    if (operationScreen.textContent === '') {
        operationScreen.textContent = '0';
    }
}

function displayError() {
    operationScreen.textContent = 'ERRORRRRR';
}