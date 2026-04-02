const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require("../../calculator");

describe("add", () => {
  test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
  test("adds negative numbers", () => expect(add(-1, -2)).toBe(-3));
  test("adds zero", () => expect(add(5, 0)).toBe(5));
});

describe("subtract", () => {
  test("subtracts two numbers", () => expect(subtract(10, 4)).toBe(6));
  test("result can be negative", () => expect(subtract(3, 7)).toBe(-4));
});

describe("multiply", () => {
  test("multiplies two numbers", () => expect(multiply(3, 4)).toBe(12));
  test("multiply by zero", () => expect(multiply(5, 0)).toBe(0));
});

describe("divide", () => {
  test("divides two numbers", () => expect(divide(10, 2)).toBe(5));
  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("modulo", () => {
  test("5 % 2 equals 1", () => expect(modulo(5, 2)).toBe(1));
  test("10 % 3 equals 1", () => expect(modulo(10, 3)).toBe(1));
  test("6 % 2 equals 0 (even number)", () => expect(modulo(6, 2)).toBe(0));
  test("negative dividend: -5 % 2 equals -1", () => expect(modulo(-5, 2)).toBe(-1));
  test("throws on modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

describe("power", () => {
  test("2 ^ 3 equals 8", () => expect(power(2, 3)).toBe(8));
  test("5 ^ 2 equals 25", () => expect(power(5, 2)).toBe(25));
  test("any number to the power of 0 equals 1", () => expect(power(7, 0)).toBe(1));
  test("power of 1 returns base", () => expect(power(9, 1)).toBe(9));
  test("negative base: -2 ^ 3 equals -8", () => expect(power(-2, 3)).toBe(-8));
  test("fractional exponent: 4 ^ 0.5 equals 2", () => expect(power(4, 0.5)).toBe(2));
});

describe("squareRoot", () => {
  test("√16 equals 4", () => expect(squareRoot(16)).toBe(4));
  test("√25 equals 5", () => expect(squareRoot(25)).toBe(5));
  test("√0 equals 0", () => expect(squareRoot(0)).toBe(0));
  test("√2 is approximately 1.414", () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));
  test("throws on square root of negative number", () => {
    expect(() => squareRoot(-1)).toThrow(
      "Cannot take the square root of a negative number."
    );
  });
  test("throws on square root of any negative number", () => {
    expect(() => squareRoot(-100)).toThrow(
      "Cannot take the square root of a negative number."
    );
  });
});
