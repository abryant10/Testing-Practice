const capitalizeString = require('../code/Capitalize-String');

test('capitalized first letter of a string', () => {
  expect(capitalizeString('string')).toBe('String');
})
