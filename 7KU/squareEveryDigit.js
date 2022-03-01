// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    //convert integer into a string
    let number = '' + num
    //create a new array of all items in string. use string method
    let newNum = new Array()
    //split method, splits a string into an array of substrings
    //join array using map method (creates a new array) using join (creates and retruns new string by concatenating)
    number.split('').map(n => {
      newNum.push(n**2)
    })
    //parseInt function parses a string argument and returns an integer
    return parseInt(newNum.join(''));
  }