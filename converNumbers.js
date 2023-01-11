// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return
//  the digits of this number within an array in reverse order.


//  Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//Parameters- give a positive number (also 0 probly). It wasnt us to break
//         up that number into an array where each num is an element.
//         then it wants us to reverse the array and return it
//         Can only be given numbers
//Return- array of numbers in reverse orders from the original input
//Example- 
console.log(reversedArray(35231)[1,3,2,5,3])
console.log(reversedArray(0)[0])
console.log(reversedArray(888)[888])
//Pseudocode- 
//make num a string
//split string into array
//reverse array
//return reversed array


function digitize(n) {
    //.split divides string into substrings, puts substring into an array
    // and returns the array
    //.reverse reverses an array
    //.map creates a new array from calling a function for every array element
    //Number converts a value into a number
    return String(n).split('').reverse().map(Number)
  }

  function digitize(n) {
    //code here
    let arr = (String(n).split('').reverse(''))
    return arr.map(e=>Number(e))
  }