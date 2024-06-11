const palindromes = function (string) {
    // Delete the blank spaces in the string and then turn the string into an   array.
    let stringToArray = string.trim().toLowerCase().split('');
    console.log(stringToArray)
    // Store a string without a exclamation symbol
    let arrayFlat = flattenTheArray(stringToArray);
    console.log(arrayFlat)
    let reversedString = arrayFlat.split('').reverse().join('');
    // Compare if the arrayFlat is equal to his reversed version, if it's then return true. If isn't, then return false.
    if(arrayFlat !== reversedString) {
        return false;
    } else {
        return true;
    }
};

const flattenTheArray = arr => {
    if(arr.includes('!') || arr.includes(',') || arr.includes('.')) {
        let arrayFlatted = arr.filter((letter) => {
            return letter !== ',' && letter !== '.' && letter !== '!' && letter !== ' ';
        })
        let arrayToString = arrayFlatted.join('')
        return arrayToString;
    } else {
        return arr.join('')
    }
}

// Do not edit below this line
module.exports = palindromes;
