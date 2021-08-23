function add (a, b) {
	var sum = a + b;
	return sum;
}

function subtract (a, b) {
	var dif = a - b;
	return dif;
}
 
function multiply (a, b) {
	return (a * b);
}

function divide (a, b) {
  let num = (a / b);
  return Math.round(num * 100) / 100;
}

module.exports = {
  add,
  subtract,
  divide,
  multiply,
}