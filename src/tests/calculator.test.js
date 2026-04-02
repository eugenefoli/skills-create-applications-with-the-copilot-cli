/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - add        (addition)
 *   - subtract   (subtraction)
 *   - multiply   (multiplication)
 *   - divide     (division)
 *   - modulo     (modulo / remainder)
 *   - power      (exponentiation)
 *   - squareRoot (square root)
 *
 * Includes image-based examples and edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test('adding zero returns the same number', () => {
    expect(add(42, 0)).toBe(42);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test('subtracting a larger number yields a negative result', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(99, 0)).toBe(99);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test('multiplies two negative numbers yields positive', () => {
    expect(multiply(-5, -6)).toBe(30);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(999, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(57, 1)).toBe(57);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides yielding a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers yields positive', () => {
    expect(divide(-20, -4)).toBe(5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('modulo with a negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with a negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ─── Power (Exponentiation) ───────────────────────────────────────────────────
describe('power', () => {
  test('2 ^ 8 = 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('3 ^ 3 = 27', () => {
    expect(power(3, 3)).toBe(27);
  });

  test('any number to the power of 0 is 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('any number to the power of 1 is itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('negative base with even exponent yields positive', () => {
    expect(power(-2, 4)).toBe(16);
  });

  test('negative base with odd exponent yields negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('fractional exponent (square root via power)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('square root of 16 is 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 9 is 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('square root of 2 is approximately 1.414', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('square root of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 is 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  // Edge case: square root of a negative number
  test('throws an error when taking the square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
  });

  test('throws an error when taking the square root of a negative decimal', () => {
    expect(() => squareRoot(-0.5)).toThrow('Square root of a negative number is not allowed.');
  });
});
