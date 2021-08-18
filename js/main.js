const buttons = document.querySelectorAll('.cta');
const ac = document.querySelector('.ac');
const c = document.querySelector('.c');
const equal = document.querySelector('.equal');
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');

let num1 = '';
let num2 = '';
let operand = '';
let result;

ac.addEventListener('click', clear);

// c.addEventListener('click', removeNumber);

equal.addEventListener('click', () => {
  result = operate(Number(num1), Number(num2), operand);
  num1 = result;
  num2 = '';
  operand = '';
  displayOperation.textContent = result;
  displayResult.textContent = result;
  if (displayResult.textContent === 'Infinity') {
    alert("You can't dive by 0");
    clear();
  }
});

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', () => {
    if (!operand) {
      num1 += numberButton.id;
      populateDisplay(numberButton.id);
      let num1Length = Array.from(num1);
      if (num1Length.length > 13) {
        alert("Your first number can't be more than 13 characters");
        displayOperation.textContent = '';
        num1 = '';
        num2 = '';
        operand = '';
      }
    } else {
      num2 += numberButton.id;
      populateDisplay(numberButton.id);
      let num2Length = Array.from(num2);
      if (num2Length.length > 13) {
        alert("Your second number can't be more than 13 characters");
        displayOperation.textContent = '';
        num1 = '';
        num2 = '';
        operand = '';
      }
      if (num2 != '') {
        result = operate(Number(num1), Number(num2), operand);
        num1 = result;
        num2 = '';
        operand = '';
        displayOperation.textContent = `${num1}${operand}`;
        displayResult.textContent = `${result}`;
      }
    }
  });
});

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', () => {
    operand = operandButton.id;
    populateDisplay(operand);
  });
});

function clear() {
  displayOperation.textContent = '';
  displayResult.textContent = '';
  num1 = '';
  num2 = '';
  operand = '';
  result = 0;
}

// function removeNumber() {
//   // displayOperation.textContent = displayOperation.textContent
//   //   .toString()
//   //   .slice(0, -1);
//   num1.toString().slice(0, -1);
// }

function populateDisplay([...theArgs]) {
  displayOperation.textContent += theArgs;
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return sum(a, b);
      break;

    case '-':
      return subtract(a, b);
      break;

    case '*':
      return multiply(a, b);
      break;

    case '/':
      return divide(a, b);
      break;
  }
}
