const ftoc = function(F) {
  let temp = ((F - 32) * 5/9);
  if (temp % 1 == 0){
    return temp;
  } else {return Number(Number.parseFloat(temp).toFixed(1));}
};

const ctof = function(C) {
  let temp = (C * 9/5 + 32);
  if (temp % 1 == 0){
    return temp;
  } else {return Number(Number.parseFloat(temp).toFixed(1));}
};

// FINAL NOTES:
// check if whole number with modulo 
// parseFloat/toFixed returns string.  I think toFixed is the culprit
// ENTONCES just use Number(x) to change into 'num' type instead of string


// const ftoc = function(F) {
//   // let temp = ((F - 32) * 5/9)
//   // function round(temp, precision) {
//   //   var multiplier = Math.pow(10, 1);
//   //   let answer = Math.round(temp * multiplier) / multiplier;
//   // };
//   // ^^ the above code over complicates things
//   return Number.parseFloat(((F - 32) * 5/9)).toFixed(1);
// };



// function works but rounds to X.0 instead of X when whole number
// this page may work https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


// this code:
// Number.parseFloat(x).toFixed(1);
// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed