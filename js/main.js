const buttons = document.querySelectorAll('.cta');
const ac = document.querySelector('.ac');
const equal = document.querySelector('.equal');
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');

let num1 = '';
let num2 = '';
let operand = '';

ac.addEventListener('click', () => {
  displayOperation.textContent = '';
  displayResult.textContent = '';
  num1 = '';
  num2 = '';
  operand = undefined;
});

equal.addEventListener('click', () => {
  displayResult.textContent = operate(Number(num1), Number(num2), operand);
});

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', () => {
    if (!operand) {
      num1 += numberButton.id;
      populateDisplay(numberButton.id);
    } else {
      num2 += numberButton.id;
      populateDisplay(numberButton.id);
    }
  });
});

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', () => {
    operand = operandButton.id;
    populateDisplay(operand);
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
