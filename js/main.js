const buttons = document.querySelectorAll('.cta');
const ac = document.querySelector('.ac');
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');

let num1 = [];
let num2 = [];
// let num1ToInt;
let operand = [];

ac.addEventListener('click', () => {
  displayOperation.textContent = '';
  displayResult.textContent = '';
  num1 = [];
  num2 = [];
  operand = [];
});

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', () => {
    if (
      operand.includes('+') ||
      operand.includes('*') ||
      operand.includes('-') ||
      operand.includes('/')
    ) {
      num2.push(numberButton.id);
    } else {
      num1.push(numberButton.id);
    }
    populateDisplay(numberButton.id);
  });
});

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', () => {
    let op = operandButton.id;
    operand.push(op);
    populateDisplay(op);
    if (operandButton.id === '=') {
      let num1ToEvaluate = lmao(num1);
      let num2ToEvaluate = lmao(num2);
      displayResult.textContent = operate(
        num1ToEvaluate,
        num2ToEvaluate,
        operand[0]
      );
    }
  });
});

function lmao(arr) {
  return Number(arr.join(''));
}

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
