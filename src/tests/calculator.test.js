const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator');

describe('Calculator', () => {
  // addition tests
  describe('addition', () => {
    test('adds two positive numbers', () => {
      expect(addition(2, 3)).toBe(5);
    });
    test('adds a positive and a negative number', () => {
      expect(addition(5, -3)).toBe(2);
    });
    test('adds two negative numbers', () => {
      expect(addition(-4, -6)).toBe(-10);
    });
    test('adds zero to a number', () => {
      expect(addition(7, 0)).toBe(7);
    });
  });

  // subtraction tests
  describe('subtraction', () => {
    test('subtracts two positive numbers', () => {
      expect(subtraction(10, 4)).toBe(6);
    });
    test('subtracts a larger number from a smaller one', () => {
      expect(subtraction(3, 8)).toBe(-5);
    });
    test('subtracts zero from a number', () => {
      expect(subtraction(5, 0)).toBe(5);
    });
  });

  // multiplication tests
  describe('multiplication', () => {
    test('multiplies two positive numbers', () => {
      expect(multiplication(3, 4)).toBe(12);
    });
    test('multiplies a number by zero', () => {
      expect(multiplication(5, 0)).toBe(0);
    });
    test('multiplies two negative numbers', () => {
      expect(multiplication(-2, -3)).toBe(6);
    });
    test('multiplies a positive and a negative number', () => {
      expect(multiplication(4, -2)).toBe(-8);
    });
  });

  // division tests
  describe('division', () => {
    test('divides two positive numbers', () => {
      expect(division(10, 2)).toBe(5);
    });
    test('divides and returns a decimal result', () => {
      expect(division(7, 2)).toBe(3.5);
    });
    test('throws an error for division by zero', () => {
      expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // modulo tests
  describe('modulo', () => {
    test('returns the remainder of 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });
    test('returns zero when there is no remainder', () => {
      expect(modulo(6, 3)).toBe(0);
    });
    test('returns the modulo of a negative dividend', () => {
      expect(modulo(-7, 3)).toBe(-1);
    });
    test('throws an error for modulo by zero', () => {
      expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  // power (exponentiation) tests
  describe('power', () => {
    test('raises 2 to the power of 3', () => {
      expect(power(2, 3)).toBe(8);
    });
    test('raises a number to the power of 0', () => {
      expect(power(5, 0)).toBe(1);
    });
    test('raises a number to a negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
    });
    test('raises 0 to a positive power', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  // square root tests
  describe('squareRoot', () => {
    test('returns the square root of 16', () => {
      expect(squareRoot(16)).toBe(4);
    });
    test('returns the square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });
    test('returns a decimal square root', () => {
      expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
    });
    test('throws an error for square root of a negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed');
    });
  });
});
