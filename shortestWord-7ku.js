// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }




  const findShort = s => Math.min(...s.split(' ').map(x => x.length));


  // //The Math.min() function returns the smallest of the numbers given as input parameters, 
  // or Infinity if there are no parameters.
  // //The map() method creates a new array populated with the results of calling a provided function
  //  on every element in the calling array.

  //In the last code provided, Math.min is used to return the number with the lowest value, from .split
  //.split is used to turn s into a new array, 
  //.map is used on the new array - results from the called function on every element in the calling array