// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//P-will there ever be floats? will there be any special characters? will it ever become a string?
//will it always be an array? will it return floats?

//R-return the average of an array of numbers

//E-[5,3,2,2] should return 3 
//[0] + [1] + [2] + [3] + [4] / 4 ----maybe .reduce?
// The reducer walks through the array element-by-element, at each step adding the current array 
// value to the result from the previous step (this result is the running sum of all the previous steps)
//  — until there are no more elements to add.

//P-create variable with value of  0 and a variable for array.reduce
//divide the sum of elements by the length of the array using / .length



function findAverage(array) {
    // your code here
    // return 0;
    if (array.length > 0){
        let average = array.reduce((a, b) => a + b) / array.length
        return average
    }else{
        return 0;
    }
  };
 
