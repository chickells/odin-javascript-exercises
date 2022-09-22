// LFG EVERYTHING WORKS SO FAR
// now just need to add condition that checks if 
// either are neg numbers or aren't numbers at all

// got it all working but i wonder if there's a way to
// clean this up. seems like too many lines that are redundant
// and hard to read (basically takes up too much real estate)

// can combine the OR things into one single line with
// the "||" operator.  Seems like doing it with four items works

// now i think i can remove the 'for loop' and put it
// at the end just a single time

const sumAll = function(a, b) {
    let sum = 0;
    if (a == b) {
        sum = a;

    } else if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        sum = 'ERROR';

    } else if (a > b) {
        let bigger = a;
        let smaller = b;
        for (let i=smaller; i<=bigger; i++) {
            sum += i;
        }

    } else {
        let bigger = b;
        let smaller = a;
        for (let i=smaller; i<=bigger; i++) {
            sum += i;
        }
    };
    return sum;
};

// tried to remove the for loop and add at bottom but
// it'd fail because "smaller" wasn't defined, fuck it oh well this works lol

// Do not edit below this line
module.exports = sumAll;
