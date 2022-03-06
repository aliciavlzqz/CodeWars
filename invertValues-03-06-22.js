// Given a set of numbers, return the additive inverse of each. Each positive becomes 
// negatives, and the negatives become positives.

// P- will they ever be floats? Any special characters? will they ever be a string? 

// R- return positive integer into a negative integer and negative integer into a positive integer

// E - a loop, use % 2 to check for positive, * -1 to make positive and/ or negative. return value

// P - loop through array.


function invert(array) {
    let invert = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] > 0){
        invert.push(array[i] - (array[i] * 2));
      }
      
      if(array[i] < 0){
        invert.push(Math.abs(array[i]));
      }
  
      if(array[i] == 0){
        invert.push(-0);
      }
    }
    return invert;
  }