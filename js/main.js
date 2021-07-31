const buttons = document.querySelectorAll('.cta');
const numberButtons = document.querySelectorAll('.number');
const operandButtons = document.querySelectorAll('.operand');
const displayOperation = document.getElementById('operation');
const displayResult = document.getElementById('result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let numberOne = 0;
    let numberTwo = 0;
    let operand = undefined;
    if (button.id == numberButtons) {
      numberOne = button.id;
      console.log(numberOne);
    } else if (button.id == operandButtons) {
      operand = button.id;
      console.log(operand);
    }
    populateDisplay(numberOne, operand);
  });
});

function populateDisplay([...theArgs]) {
  let display = (displayOperation.textContent += theArgs);
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
  if (operator === sum) {
    return sum(a, b);
  } else if (operator === subtract) {
    return subtract(a, b);
  } else if (operator === multiply) {
    return multiply(a, b);
  } else if (operator === divide) {
    return divide(a, b);
  }
}
