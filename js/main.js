const a = 'a';

const buttons = document.querySelectorAll('.cta');
const ac = document.querySelector('.ac');
const c = document.querySelector('.c');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');

let num1 = '';
let num2 = '';
let operand = '';
let operand2 = '';
let result;

ac.addEventListener('click', clear);

c.addEventListener('click', removeNumber);

equal.addEventListener('click', () => {
  if (num1 === '' || operand === '' || num2 === '') {
    clear();
  }
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
      populateOperation(numberButton.id);
      let num1Length = Array.from(num1);
      if (num1Length.length > 13) {
        alert("Your first number can't be more than 13 characters");
        displayOperation.textContent = '';
        num1 = '';
        num2 = '';
        operand = '';
        operand2 = '';
      }
    } else {
      num2 += numberButton.id;
      populateOperation(numberButton.id);
      let num2Length = Array.from(num2);
      if (num2Length.length > 13) {
        alert("Your second number can't be more than 13 characters");
        displayOperation.textContent = '';
        num1 = '';
        num2 = '';
        operand = '';
        operand2 = '';
      }
    }
  });
});

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', () => {
    if (operand != '') {
      operand2 = operandButton.id;
      populateOperation(operandButton.id);
    } else {
      operand = operandButton.id;
      populateOperation(operandButton.id);
    }
    if (operand2 != '') {
      result = operate(Number(num1), Number(num2), operand);
      num1 = result;
      num2 = '';
      operand = operand2;
      displayOperation.textContent = result + operand;
      displayResult.textContent = result;
    }
  });
});

function clear() {
  displayOperation.textContent = '';
  displayResult.textContent = '';
  num1 = '';
  num2 = '';
  operand = '';
  operand2 = '';
  result;
}

function removeNumber() {
  if (num2 != '') {
    num2 = num2.slice(0, -1);
    displayOperation.textContent = displayOperation.textContent.slice(0, -1);
  } else if (operand != '') {
    operand = operand.slice(0, -1);
    displayOperation.textContent = displayOperation.textContent.slice(0, -1);
  } else if (num1 != '') {
    num1 = num1.slice(0, -1);
    displayOperation.textContent = displayOperation.textContent.slice(0, -1);
  }
}

function populateOperation([...theArgs]) {
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
