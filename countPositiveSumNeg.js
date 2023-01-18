// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and 
// the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
// you should return [10, -65].

//Parameters- an array with integers, positive and nevative, as well as empty  
//Return-an array the sum of all positivie integers in the first element, 
//the second element s the sum of negative integers
//Example-   let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [10, -65];
//     assert.deepEqual(actual, expected);
//   })
    
//   it("Testing for fixed test 2", () => {
//     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [8, -50];    
//     assert.deepEqual(actual, expected);
//   });
// });
//Pseudocode-
//I need to check if the intger is positive or negative. 
//then I need to iterate positive nums and add them, add neg nums
//return my result without forgetting about empty array

function countPositivesSumNegatives(arr) {
    if (arr === null || arr.length === 0) {
      return [];
    }
  
    let countPositives = 0;
    let sumNegatives = 0;
  
    for (let num of arr) {
      if (num > 0) {
        countPositives++;
      } else if (num < 0) {
        sumNegatives += num;
      }
    }
  
    return [countPositives, sumNegatives];
  }
  