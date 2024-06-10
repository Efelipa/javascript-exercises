const add = function(num1 = 0, num2 = 0) {
	if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
};

const subtract = function(num1 = 0, num2 = 0) {
	if(typeof num1 === 'number' && typeof num2 === 'number') {
    if(num1 > num2) return num1 - num2;
    if(num1 < num2) return num2 - num1;
  }
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
  return array.reduce((toMultiply, curr) => toMultiply * curr, 1);
};

const power = function(num1 = 0, num2 = 0) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let arr = new Array();
  for (let i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
