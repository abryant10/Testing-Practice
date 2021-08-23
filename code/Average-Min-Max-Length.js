function averageMinMaxLength (array) {
  const object = {
    average: getAverage(array),
    length: getLength(array),
    max: getMax(array),
    min: getMin(array)
  }
  return object;
}

const getAverage = function getAverage(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  var avg = total / array.length;
  return avg;
}

const getMin = function getMin(array) {
 return Math.min(...array);
}

const getMax = function getMax(array) {
  return Math.max(...array);
}

const getLength = function getLength(array) {
  return array.length;
}

module.exports = averageMinMaxLength