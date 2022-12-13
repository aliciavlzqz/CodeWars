// convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are 
// not capitalized in the same way he originally typed them.


/* loop through the array changing first character of each item to 
uppercase & adding it to the remaining letters in each item */

String.prototype.toJadenCase = function () {
    // assign 'this' keyword to a variable and split String into an array
    var result = this.split(" ");

    /* loop through the array changing first character of each item to 
    uppercase & adding it to the remaining letters in each item */

    for(i = 0; i < result.length; i++) {
      //charAt returns a new string, toUpperCase returns the 
//       calling string value converted to uppercase
    result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
    }
    //finally return items joined back together in a string
    return result.join(' ');
};


//ALTERNATE SOLUTION//// SIMPLIFIED


String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };
