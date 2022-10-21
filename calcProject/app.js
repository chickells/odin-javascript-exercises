// operators 
const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const multiply = function(num1, num2) {
    return num1 * num2
};

function divide (num1, num2) {
    return num1 / num2
}

const power = function(x, n) {
	return x ** n
};

const factorial = function(x) {
  if (x === 0) return 1;
  let product = 1;
  for (let i = x; i > 0; i--) {
    product *= i;
  }
  return product;
}

// operator

function operate (operator, num1, num2) {
    return operator(num1, num2)
}

let operator = "asdf"

// other stuff


// modify display text as buttons are clicked
// (can i PULL this info and store as 'const' in js before 
// clicking operator button and typing 2nd number?)
// YES I CAN LFG

const display = document.getElementById('display')
display.insertAdjacentText('beforeend', '!')

// btns write to display, when operator is clicked, num1 = display.textContent
// first btn click clears display and replaces with digit (additional operator clicks replace
// first one until digit pressed)

// following btn clicks add adjacenttext.  once equals is pressed,
// num2 = display.textContent
// call operate function with 'operator/num1/num2' stored values
// set display to 'answer'
// if digit it pressed, it restarts and sets diplay to that digit
// if operator is pressed, display is set to num1 and process continues

// can create 'onclick' listener for each button manually
// OR can write one function to CREATE function for each button,
// calling the functions buttonIDNAME or something like that....hmmm

// operator is a placeholder that's set once you click button
// function isn't actually called until you press equal
// variable 'display' is an array that we 'push' digits to.
// at first it assigns num1


// once operator is clicked, next digit click sets display to
// 'num2' array and starts 'pushing' to that
// also sets floating 'operator' varible to one of our functions

// once equals is hit, it checks what the current 'operator' is 
// set to and calls that function, supplying num1 and num2 from our
// stored numbers in the display.  also updates display to answer.

// from that point there are two options:
// 1 - click any digit next and it resets display to num1 and resets num1
// 2 - click equals or another operator again and the prior "result" 
//     turns into num1 right? and num2 stays constant unless 
//     another operator was selected

// if the 'clear' button is ever clicked, it resets display to 'num1 = [0]'

// if there's a way to append a digit onto a number (or even string of numbers)
// that'd be cleaner, otherwise i'm constantly converting this array
// of num1 and num2 to strings/numbers 



