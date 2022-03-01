// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, 
//it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

//Parameters- integers, will they always be whole number? Will I ever be given any special characters? 
//Check for perfect squares, meaning- when you multiply a whole number(positive, negative or 0) times itself the result is a whole number.

//Return- boolean (true or false) to determine wether the integer is a perfect square

//Example- Number.isInteger(n), NaN(not a number)
//   var isSquare = function(n){
//       return Number.isInteger(Math.sqrt(n));
//    }



// var isSquare = function(n){

// 	if((Math.sqrt(n) % 1) == 0)
// 		return true;
// 	else
// 		return false;
// }

//Pseaudo- create a function that takes in an integer. use the function Math.sqrt to get the
//square root of n, use % to determine if number is not a float. 
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
  }