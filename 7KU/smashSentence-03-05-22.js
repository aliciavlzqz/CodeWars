//Write a function that takes an array of words and smashes them together into a sentence and returns the
//sentence. You can ignore any to sanitize words or add punctuation, but you should add spaces between
// each word. BE CAREFUL, there shouldn't be a space at the beginning or the end of the sentence!

//P-is it a string? will there ever be numbers or special characters? 
//Return- return a sentence without any spaces
//E- .join could you use something to append? .trim?
//P create a function that takes in an array

function smash(words){
    //return joined sentence
    return words.join(' ')
};