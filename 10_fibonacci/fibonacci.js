const fibonacci = num => {
    // Build an array with the first two elements of the fibonacci 
    const array = [0, 1];
    // If the number is negative print 'OOPS', otherwise work on the array
    if(num < 0) {
        return 'OOPS';
    } else {
        // Loop through the array, after the first two elements
        for(let i = 2; i <= num; i++) {
            // Sets the value of the next element within the array as the sum of the previous two elements
            array[i] = array[i - 1] + array[i - 2]; 
        }
        // Then just return the value of the specific element.
        return array[num];
    }
}

// Do not edit below this line
module.exports = fibonacci;
