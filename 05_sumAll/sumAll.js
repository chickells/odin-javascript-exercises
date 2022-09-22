// LFG EVERYTHING WORKS SO FAR
// now just need to add condition that checks if 
// either are neg numbers or aren't numbers at all

const sumAll = function(a, b) {
    let sum = 0;
    if (a == b) {
        sum = a;
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
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
