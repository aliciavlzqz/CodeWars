// DESCRIPTION:
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)

// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// //Parameters-
// //Return-
// //Example-
// //Pseudocode-
//first- merge the arrays by using concat let arrMerg = arr1.concat(arr2)
//I need to check for duplicate integers and remove them by using the filter method
//then I need to sort the integers from small to largest arrMerge.sort()
//

function mergeArrays(arr1, arr2) {
  let newArr = arr1.concat(arr2).sort((a, b) => a - b);//this is merging and 
  //sorting in ascending order
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== newArr[i + 1]) {// checks if the current element at index i
        // is not equal to the next element at index i + 1 in the newArr array.
        // It compares adjacent elements in the array.
      result.push(newArr[i]); //if the statement is true, the newArr[i] is 
      //pushed into the result array using push method. This step adds the unique
      //elements to the result array
    }//this loop is iterating through the array and 
  }
  return result;
}
