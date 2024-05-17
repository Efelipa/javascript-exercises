const convertToCelsius = function(fahrenheit) {
  let formulaToConvert = (fahrenheit - 32) * (5/9);
  let toSetToDecimal = Number(formulaToConvert.toFixed(1));
  return toSetToDecimal;
};

const convertToFahrenheit = function(celsius) {
  let formulaToConvert = (celsius *(9/5)) + 32;
  let toSetToDecimal = Number(formulaToConvert.toFixed(1));
  return toSetToDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
