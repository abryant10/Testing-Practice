const calculator = require('../code/calculator');

test('adds two positive numbers', () => {
  expect(calculator.add( 3, 9)).toBe(12);
})

test('adds a positive and negative number', () => {
  expect(calculator.add( 3, -9)).toBe(-6);
})

test('adds two negative numbers', () => {
  expect(calculator.add( -3, -9)).toBe(-12);
})

test('subtracts two nubers ', () => {
  expect(calculator.subtract( 9, 3)).toBe(6);
})

test('multiplies two numbers', () => {
  expect(calculator.multiply( 3, -10)).toBe(-30);
})

test('divides two numbers rounded to the second deimcal', () => {
  expect(calculator.divide( 50, 12)).toBe(4.17);
})