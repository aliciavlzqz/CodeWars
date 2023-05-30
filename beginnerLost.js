// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters- a list of positve numbers
//Return-return the array of numbers doubled
//Example-
//nums = [2, 4, 6] --> nums = [4, 8, 12], [5, 10, 15] --> [10, 20, 30]
//Pseudocode-
//I can loop through the array and multiply each number by 2
//and return my result


function maps(x){
    var doubled = [];
       for (var i = 0; i < x.length; i++) {
           doubled.push(x[i] * 2);
       }
     return doubled
   }

//the following is an alternate solution
function maps(x){
  return x.map(n => n * 2);
}