// Write a function that takes a list of strings as an argument and returns a 
// filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated 
// in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same 
// order as in the initial array passed to your function, albeit with the 'geese' 
// removed. Note that all of the strings will be in the same case as those provided, 
// and some elements may be repeated.

// sample Tests:

// const Test = require('@codewars/test-compat');

// describe("Basic tests",function(){
//   it("Mixed list",function(){
//     Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
//   });
//   it("No geese",function(){
//     Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//   });
//   it("All geese",function(){
//     Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
//   });
// });

//Parameters-a list of string words. no empty strings are included.
//some elements may be repeated.
//Return-a filtered list containing the same elements but with the 'geese' removed.
//Example-["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//Pseudocode-i need to filter out the geese. so I can use filter method. 
//then I can return the result with elements that do not include geese.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.filter(x => !geese.includes(x))
  };

  //Alternate solution

  function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    /* 
    return non-matches
      return an array containing all of the strings in the input array except those that match strings in geese
      Use a combination of Array.prototype.filter and Array.prototype.inclues
      
      Steps
      1. filter creates new array
      2. elements that pass test are implemented
      3. includes determins whether an array includes a certain value 
        3.a) returns a true or false (we want the false values to be returned) 
      4. Non-Geese elements are returned
    */
    
    let filterGeese = birds.filter((word) => !geese.includes(word));
    
    //console.log(filterGeese)
    return filterGeese
  };