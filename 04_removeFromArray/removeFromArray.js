// initial code that wouldn't work
// const removeFromArray = function(array, valueToRemove, ...others) {
//     return array.filter(function(elementsToKeep) {
//         return elementsToKeep != (valueToRemove, others);
//     })
// };

// copied and pasted from https://love2dev.com/blog/javascript-remove-from-array/
// the "Making a Remove Method"

// function arrayRemove(arr, value) { 
    
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }

// so this works for removing a SINGLE item, but it doesn't let me
// pass through multiple items.
// i could hard code X amounts of inputs but that would 
// cap the amount of inputs i could throw in....
// let's try adding multiple with default values

// yeah it doesn't quite work, i don't understand it fully
// here's cv'd from the solutions:

// THIS IS CV'D FROM 'SOLUTIONS' BRANCH

// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed

      // THE !ARGS IS BASICALLY SAYING HEY, IF THIS ITEM DOESN'T INCLUDE,
      // PUSH THAT SHIT
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // var removeFromArray = function(...args) {
  //   const array = args[0]
  //   return array.filter(val => !args.includes(val))
  // }
  //
  

// Do not edit below this line
module.exports = removeFromArray;
