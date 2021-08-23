const reverseString = require('../code/Reverse-String');

test('reverse one word string', () => {
  expect(reverseString('string')).toBe('gnirts');
})
test('reverse two word string', () => {
  expect(reverseString('string baby')).toBe('ybab gnirts');
})
test('reverse two word string with numbers and punctuation', () => {
  expect(reverseString('string 2 baby!')).toBe('!ybab 2 gnirts');
})