// Calculator module supporting the following operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - power (exponentiation)
// - square root

// addition: returns the sum of two numbers
function addition(a, b) {
  return a + b;
}

// subtraction: returns the difference of two numbers
function subtraction(a, b) {
  return a - b;
}

// multiplication: returns the product of two numbers
function multiplication(a, b) {
  return a * b;
}

// division: returns the quotient of two numbers; throws an error for division by zero
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// modulo: returns the remainder of dividing a by b; throws an error for modulo by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// power: returns base raised to the exponent (exponentiation)
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// squareRoot: returns the square root of a number; throws an error for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot };
