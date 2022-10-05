// const palindromes = function (string) {
//     const stringToArray = string.split()
//     const removeSpace = stringToArray.filter(e => String(e).trim()) // 1 DONE, WORKS
//     const reversed = removeSpace.reverse() // 2
//     return string == reversed // should return true or false..... *SHOULD* lol
// };

function palindromes (string) {
    const stringToArray = string.split('')
    console.log(stringToArray);

    const removeSpace = stringToArray.filter(e => String(e).trim()) // 1 DONE, WORKS
    console.log(removeSpace);
    
    const onlyLetters = removeSpace.filter(char => /[a-zA-Z]/.test(char));
    console.log(onlyLetters); // 3

    const reversed = onlyLetters.reverse() // 2
    console.log(reversed);


    // const backToString = onlyLetters.join('')
    // console.log(backToString);

    return reversed == onlyLetters // should return true or false..... *SHOULD* lol
};

console.log(palindromes('racecar!'));

// 10.5 Wed 1.35pm
// FACK almost working
// not sure why it doesn't work tbh. next time. 4th session off.


// IT APPARENTLY WORKS
// but tbh i think it's just always returning false lol

// 1
// String(asdf).trim() apparently removes whitespace

// 2
// .reverseFunction() start at back and subtract from array[array.length] until its array[0]

// 3
// stolen from https://stackoverflow.com/questions/58259610/how-do-i-filter-out-a-string-to-contain-only-letters-in-vanilla-javascript

// take string, split it per character
// make a new array that's reversed
// check if new array equals original array
// BOOM EASY

// Do not edit below this line
module.exports = palindromes;
