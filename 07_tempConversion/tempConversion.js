const ftoc = function(F) {
  let temp = ((F - 32) * 5/9)
  function round(temp, precision) {
    var multiplier = Math.pow(10, 1);
    let answer = Math.round(temp * multiplier) / multiplier;
  };
  return answer;
};

const ctof = function(C) {
  return (C * 9/5 + 32)
};

// BASIC MATH WORKS BUT THIS ROUNDING SHIT ISN'T WORKING RIGHT
// time to work 4th session tho so we'll
// come back to this later

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
