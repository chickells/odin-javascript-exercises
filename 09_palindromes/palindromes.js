const palindromes = function (string) {
    const stringToArray = string.split()
    const removeSpace = stringToArray.filter(e => String(e).trim()) // 1 DONE, WORKS
    const reversed = removeSpace.reverse() // 2
    return string == reversed // should return true or false..... *SHOULD* lol
};

// IT APPARENTLY WORKS
// but tbh i think it's just always returning false lol

// 1
// String(asdf).trim() apparently removes whitespace

// 2
// .reverseFunction() start at back and subtract from array[array.length] until its array[0]

// 3

// take string, split it per character
// make a new array that's reversed
// check if new array equals original array
// BOOM EASY

// Do not edit below this line
module.exports = palindromes;
