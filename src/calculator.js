#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   add            <a> <b>  - Addition:         returns a + b
 *   subtract       <a> <b>  - Subtraction:      returns a - b
 *   multiply       <a> <b>  - Multiplication:   returns a * b
 *   divide         <a> <b>  - Division:         returns a / b (throws on division by zero)
 *   modulo         <a> <b>  - Modulo:           returns a % b (throws on division by zero)
 *   exponentiation <a> <b>  - Exponentiation:   returns a ** b
 *   sqrt           <a>      - Square Root:      returns √a   (throws on negative input)
 *
 * Usage:
 *   node src/calculator.js <operation> <number1> [number2]
 *
 * Examples:
 *   node src/calculator.js add 4 5              => 9
 *   node src/calculator.js subtract 10 3        => 7
 *   node src/calculator.js multiply 6 7         => 42
 *   node src/calculator.js divide 20 4          => 5
 *   node src/calculator.js modulo 10 3          => 1
 *   node src/calculator.js exponentiation 2 8   => 256
 *   node src/calculator.js sqrt 16              => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a and b; throws if b is zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exp
function exponentiation(base, exp) {
  return Math.pow(base, exp);
}

// Square Root: returns the square root of n; throws if n is negative
function sqrt(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(n);
}

// CLI entry point
function main() {
  const [, , operation, rawA, rawB] = process.argv;

  const twoArgOps = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'exponentiation'];
  const oneArgOps = ['sqrt'];
  const validOps = [...twoArgOps, ...oneArgOps];

  if (!operation || !validOps.includes(operation)) {
    console.error(`Usage: node src/calculator.js <${validOps.join('|')}> <number1> [number2]`);
    process.exit(1);
  }

  const a = parseFloat(rawA);

  if (isNaN(a)) {
    console.error('Error: First argument must be a valid number.');
    process.exit(1);
  }

  let b;
  if (twoArgOps.includes(operation)) {
    b = parseFloat(rawB);
    if (isNaN(b)) {
      console.error('Error: Second argument must be a valid number.');
      process.exit(1);
    }
  }

  let result;
  try {
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'exponentiation':
        result = exponentiation(a, b);
        break;
      case 'sqrt':
        result = sqrt(a);
        break;
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  console.log(`Result: ${result}`);
}

// Only run CLI when executed directly, not when imported by tests
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiation, sqrt };
