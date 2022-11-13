// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas
//  'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!',
//   if there are more than 2 return 'I smell a series!'. If there are no good ideas, as
//    is often the case, return 'Fail!'.

// Parameters- a list of words in an array of 'good' and 'bad'
// Return- Publish! if one or two 'good' listed, 'I smell a series!' if 
//         more than 2 'good', and 'Fial!' if no 'good' is listed
// Example- describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
//       assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//       assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//     });
//   });
// Pseudocode- I will go through all the words in the array and count how many 'good'
//             words are in the array. If I find none, then I will return 'Fial!'

function well(x){
let counter = 0
for(const idea of x){
  if(idea === 'good')counter += 1;
}
  if(counter > 2 ) return 'I smell a series!';
  if(counter > 0) return 'Publish!';
  return 'Fail!'
}