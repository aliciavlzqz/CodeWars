// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.

//P-will it ever be an array? Will it always a string? Any special characters?
//R- rerurn middle character if odd, return 2 middle characters if even
//E- return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
//P- use substr to return portion of a string, check for the length of string, check if even or odd

function getMiddle(s)
{
  //Code goes here!
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}