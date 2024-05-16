const reverseString = function(string) {
    const STRING_MIN = string.trim();
    const REVERSED_STRING = STRING_MIN.split('').reverse().join('');
    return REVERSED_STRING;
};

// Do not edit below this line
module.exports = reverseString;
