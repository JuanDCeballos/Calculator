const buttons = document.querySelectorAll('.cta');
const numberButtons = document.querySelectorAll('.number');
const nButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');

let num1;
let num1ToInt;
let num2;
let num2ToInt;
let operand;
let operand2;

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', () => {
    if (num1 === undefined) {
      num1 = numberButton.id;
      populateDisplay(num1);
      num1ToInt = parseInt(num1);
    } else if (num1 !== undefined) {
      num2 = numberButton.id;
      populateDisplay(num2);
      num2ToInt = parseInt(num2);
    }
  });
});

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', () => {
    if (operand === undefined) {
      operand = operandButton.id;
      populateDisplay(operand);
    } else if (operand !== undefined) {
      operand2 = operandButton.id;
    }
    if (operandButton.id === '=') {
      displayResult.textContent = operate(num1ToInt, num2ToInt, operand);
    }
  });
});

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
