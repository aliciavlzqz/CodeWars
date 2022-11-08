// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function
//  that determines whether a string that contains only letters is an isogram. Assume the empty string is an 
//  isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

//Found this code that worked. Need to break it down
function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }


  //alternate solution
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
  

  //The size accessor property returns the number of (unique) elements in a Set object.

//   in javascript set is an object that takes in values, just like an array. the difference is: sets only accept unique values
//    which means you cant have repeating values inside a set so that solution creates a Set with the letters from the passed in
//     string. if that string has repeating letters the set will ignore those and they wont be inside our set. then we check the 
//     SIZE of the set which is basically the same thing as checking its length. its gonna return to us the number of elements
//      inside the set. if the set size is the same as the string lenght that means the string does not contain any repeating letters
// (cause if it did, the set size would be less than the string side cause it wouldnt contain the repeating letters)