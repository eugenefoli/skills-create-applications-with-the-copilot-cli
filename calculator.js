#!/usr/bin/env node

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error("Modulo by zero is not allowed.");
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) throw new Error("Cannot take the square root of a negative number.");
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  const [, , operation, ...args] = process.argv;
  const nums = args.map(Number);

  const ops = {
    add:        () => add(nums[0], nums[1]),
    subtract:   () => subtract(nums[0], nums[1]),
    multiply:   () => multiply(nums[0], nums[1]),
    divide:     () => divide(nums[0], nums[1]),
    modulo:     () => modulo(nums[0], nums[1]),
    power:      () => power(nums[0], nums[1]),
    squareRoot: () => squareRoot(nums[0]),
  };

  if (!operation || !ops[operation]) {
    console.log("Usage: node calculator.js <operation> <num1> [num2]");
    console.log("Operations: add, subtract, multiply, divide, modulo, power, squareRoot");
    process.exit(1);
  }

  try {
    console.log(ops[operation]());
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}
