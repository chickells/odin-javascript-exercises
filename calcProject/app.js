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

function operate (operator, num1, num2) {
    return operator(num1, num2)
}

let operator = ""

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



