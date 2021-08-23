const averageMinMaxLength = require('../code/Average-Min-Max-Length');

test('returns average, min, max, length', () => {
  expect(averageMinMaxLength([1, 2, 3, 4, 5])).toEqual({"average": 3, "length": 5, "max": 5, "min": 1});
})