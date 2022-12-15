const Calculator = require('../calculator');

describe('Add tests', () => {
  test('6 + 3 should be 9', () => {
    // Arrange
    const a = 6;
    const b = 3;

    // Act
    const result1 = Calculator.add(a, b);

    expect(result1).toEqual(9);
  });
  test('2.5 + 1.5 should be 4', () => {
    // Arrange
    const a = 2.5;
    const b = 1.5;

    // Act
    const result1 = Calculator.add(a, b);

    expect(result1).toEqual(4);
  });
  test('15 + 10 should be 25', () => {
    // Arrange
    const a = 15;
    const b = 10;

    // Act
    const result1 = Calculator.add(a, b);

    expect(result1).toEqual(25);
  });
});

describe('Subtract tests', () => {
  test('20 - 3 should be 17', () => {
    // Arrange
    const a = 20;
    const b = 3;

    // Act
    const result1 = Calculator.subtract(a, b);

    expect(result1).toEqual(17);
  });
  test('20 - 10.5 should be 9.5', () => {
    // Arrange
    const a = 20;
    const b = 10.5;

    // Act
    const result1 = Calculator.subtract(a, b);

    expect(result1).toEqual(9.5);
  });
  test('20 - 20 should be 0', () => {
    // Arrange
    const a = 20;
    const b = 20;

    // Act
    const result1 = Calculator.subtract(a, b);

    expect(result1).toEqual(0);
  });
});

describe('Multiply tests', () => {
  test('10 * 3 should be 30', () => {
    // Arrange
    const a = 10;
    const b = 3;

    // Act
    const result1 = Calculator.multiply(a, b);

    expect(result1).toEqual(30);
  });
  test('20 * 30 should be 600', () => {
    // Arrange
    const a = 20;
    const b = 30;

    // Act
    const result1 = Calculator.multiply(a, b);

    expect(result1).toEqual(600);
  });
  test('20 * 20 should be 400', () => {
    // Arrange
    const a = 20;
    const b = 20;

    // Act
    const result1 = Calculator.multiply(a, b);

    expect(result1).toEqual(400);
  });
});

describe('Divide tests', () => {
  test('20 / 4 should be 5', () => {
    // Arrange
    const a = 20;
    const b = 4;

    // Act
    const result1 = Calculator.divide(a, b);

    expect(result1).toEqual(5);
  });
  test('40 / 20 should be 2', () => {
    // Arrange
    const a = 40;
    const b = 20;

    // Act
    const result1 = Calculator.divide(a, b);

    expect(result1).toEqual(2);
  });
  test('20 / 20 should be 1', () => {
    // Arrange
    const a = 20;
    const b = 20;

    // Act
    const result1 = Calculator.divide(a, b);

    expect(result1).toEqual(1);
  });
});
