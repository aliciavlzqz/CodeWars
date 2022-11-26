// Your task is to make a function that can take any non-negative integer as an argument 
//and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//P-always an integer? will it ever be a float? will it ever be a negative number? will it ever be an array?

//R-return in descending order- in other words high to low

//E-

//P

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }