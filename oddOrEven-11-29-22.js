// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// P-will it always be integers? will it ever be floats? can the integers be negative?


// R-return a string indicating if integer is odd or even


// E-


// P-


function oddOrEven(array) {
    //enter code here
    if(array.length === 0){
        return "even"
    }else{
        let sum = array.reduce((acc, n) => {return acc + n})
        return (sum % 2 === 0) ? "even" : "odd"
    }
 }