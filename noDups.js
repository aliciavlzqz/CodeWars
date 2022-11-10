// Define a function that removes duplicates from an array of numbers and returns
//  it as a result.

// The order of the sequence has to stay the same.
//Parameters- array of integers with duplicates
//Return- array of integers w/ duplicate integers removed
//Example-assert.deepEqual(distinct([1]), [1]);
    // assert.deepEqual(distinct([1,2]), [1,2]);
    // assert.deepEqual(distinct([1,1,2]), [1,2]);
//Pseudocode- I need to look at each integer in the array, if there is a 
//duplicate integer, I need to remove it and return the array without changing its order.


function distinct(a) {
    let noDups = []
    for(let i = 0; i< a.length; i++ ){
        if(noDups.indexOf(a[i] === -1)){
            noDups.push(a[i])
        }
    }
        return noDups
    }