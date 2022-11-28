const caesar = function() {

};

// Do not edit below this line
module.exports = caesar;


//////////////////////////////////////////////////

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

let count = 0;

function cc(card) {
  // Only change code below this line
  let state = "";
  let isFace = false

  if (card == 'J' || card == 'Q' || card == ' K' || card == 'A') {
    isFace = true
  }

  
  if (card > 1 && card < 7) {
    count++;    
  } 
  else if (card == 10 || isFace) {
    count--
  }


  if (count <= 0) {
    state = 'Hold'
  } else if (count < 0) {
    state = 'Bet'
  }
  return `${count} ${state}`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');