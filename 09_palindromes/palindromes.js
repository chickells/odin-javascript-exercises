// const palindromes = function (string) {
//     const stringToArray = string.split()
//     const removeSpace = stringToArray.filter(e => String(e).trim()) // 1 DONE, WORKS
//     const reversed = removeSpace.reverse() // 2
//     return string == reversed // should return true or false..... *SHOULD* lol
// };

function palindromes (string) {

    let newString = string.toLowerCase().replace(/[^a-z]/g, "")
    // remove capitalization
    // replace does not modify 'string'
    // /[^a-z]/ looks for ALL LETTERS (only lowercase bc we already lowered)
    // 'g' looks for ALL INSTANCES of ALL LETTERS
    // replace(___ , "") replaces only those letters....? fuck idk tbh
    // maybe it replaces anything that ISNT a letter with blank,therefore deleting it

    return (
        newString
            .split("")
            .reverse()
            .join("") === newString
    );

    // let newString = string.split('')
    // console.log(newString);

    // newString = newString.filter(e => String(e).trim()) // 1 DONE, WORKS
    // console.log(newString);
    
    // let x = newString.filter(char => /[a-zA-Z]/.test(char));
    // console.log(newString); // 3

    // let reversedString = newString.reverse() // 2
    // console.log(reversedString);

    // this works for the most part, just don't understand why it thinks
    // the two are equal when i'm seeing them in the log, the two arrays are OBVIOUSLY different lol
    // going to use a single rolling variable instead of new const every step
    // const removeSpace = stringToArray.filter(e => String(e).trim()) // 1 DONE, WORKS
    // console.log(removeSpace);
    
    // const onlyLetters = removeSpace.filter(char => /[a-zA-Z]/.test(char));
    // console.log(onlyLetters); // 3

    // const reversed = onlyLetters.reverse() // 2
    // console.log(reversed);


    // const backToString = onlyLetters.join('')
    // console.log(backToString);
    // console.log(newString.toString());
    // console.log(reversedString.toString());

    // return newString === reversedString // should return true or false..... *SHOULD* lol
};

// Wed 10.5 5.00pm
// welp it works, totally stole that shit.
// lowercase and remove nonletters first,
// then split, reverse and join and see if its equal to before the reverse.

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
