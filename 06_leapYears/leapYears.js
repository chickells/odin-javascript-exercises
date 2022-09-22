const leapYears = function(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0)
};

// tried dicking around with options to return
// false if the input wasn't an integer, didn't work
// it appears if its a number that's a string, it 
// still treats it like an integer

// LOOKS LIKE IT WORKS IF THE STRING ISNT A NUMBER LFG

// Do not edit below this line
module.exports = leapYears;
