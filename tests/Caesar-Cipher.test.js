const caesarCipher = require('../code/Caesar-Cipher');

test('works with single letter', () => {
  expect(caesarCipher('a', 1)).toBe('b');
})

test('works with words', () => {
  expect(caesarCipher('Aaa', 1)).toBe('Bbb');
})

test('works with phrases', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
})

test('works with negative shift', () => {
  expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
})

test('works with large shift factors', () => {
  expect(caesarCipher('Hello, World!', 75)).toBe('Ebiil, Tloia!');
})

test('works with large shift factors', () => {
  expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
})